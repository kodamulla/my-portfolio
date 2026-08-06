import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Tag from './ui/Tag';
import Button from './ui/Button';
import Modal from './ui/Modal';
import Reveal from './ui/Reveal';
import cx from '../lib/cx';

/**
 * Resolves a project's declared image slots to the URLs that can actually be
 * shown. A slot whose public file is missing falls back to its bundled image;
 * a slot with neither is dropped, so the counter and arrows never page onto a
 * blank frame.
 *
 * @param {{src: string, label: string, fallback?: string}[]} images
 * @param {Set<string> | null} missing  Probed missing paths, or null while probing.
 */
const resolveImages = (images, missing) =>
  images
    .map((image) => ({
      ...image,
      // Before the probe resolves, only bundled fallbacks are known-good.
      url: missing === null
        ? image.fallback
        : missing.has(image.src)
          ? image.fallback
          : image.src,
    }))
    .filter((image) => Boolean(image.url));

/** Shared styling for the labelled blocks inside the project dialog. */
const SECTION_LABEL = 'font-mono text-xs font-medium tracking-[0.16em] text-fg-subtle uppercase';

/** A pointer travel beyond this is a drag, not a tap on a card. */
const DRAG_THRESHOLD = 5;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [missingImages, setMissingImages] = useState(null);

  const scroller = useRef(null);
  const drag = useRef({ moved: 0 });

  // Probe which public screenshots have actually been added. HEAD requests do
  // not download image bytes, so this does not defeat lazy loading.
  useEffect(() => {
    const sources = [...new Set(projects.flatMap((p) => p.images.map((i) => i.src)))];
    let cancelled = false;

    Promise.all(
      sources.map(async (src) => {
        try {
          const res = await fetch(src, { method: 'HEAD' });
          // A dev server may answer unknown paths with an SPA fallback, so
          // require an image content type rather than trusting the status code.
          const type = res.headers.get('content-type') || '';
          return res.ok && type.startsWith('image/') ? null : src;
        } catch {
          return src;
        }
      }),
    ).then((results) => {
      if (!cancelled) setMissingImages(new Set(results.filter(Boolean)));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Marks a slot missing if it 404s or decodes badly despite the probe.
  const handleImageError = (src) => {
    setMissingImages((prev) => {
      if (prev?.has(src)) return prev;
      const next = new Set(prev ?? []);
      next.add(src);
      return next;
    });
  };

  /**
   * Click-and-drag scrolling for pointing devices. Touch is left to the
   * browser, whose momentum and snapping are better than anything replicated
   * here. Snapping is suspended mid-drag because a mandatory snap fights
   * scrollLeft being written on every move.
   */
  const handlePointerDown = (event) => {
    drag.current.moved = 0;
    if (event.pointerType === 'touch') return;

    const el = scroller.current;
    if (!el) return;

    const startX = event.clientX;
    const startScroll = el.scrollLeft;
    const previousSnap = el.style.scrollSnapType;

    el.style.scrollSnapType = 'none';
    el.classList.add('cursor-grabbing', 'select-none');

    const onMove = (moveEvent) => {
      const dx = moveEvent.clientX - startX;
      drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
      el.scrollLeft = startScroll - dx;
    };

    const onUp = () => {
      el.style.scrollSnapType = previousSnap;
      el.classList.remove('cursor-grabbing', 'select-none');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
  };

  const openProject = (project) => {
    // Ignore the click that ends a drag.
    if (drag.current.moved > DRAG_THRESHOLD) {
      drag.current.moved = 0;
      return;
    }
    setCurrentImageIndex(0);
    setSelectedProject(project);
  };

  const modalImages = selectedProject ? resolveImages(selectedProject.images, missingImages) : [];
  const imageCount = modalImages.length;
  // The list can shrink while open if a probe or load fails, so clamp.
  const safeIndex = imageCount > 0 ? Math.min(currentImageIndex, imageCount - 1) : 0;
  const currentImage = modalImages[safeIndex];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % imageCount);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + imageCount) % imageCount);

  // Arrow keys page through screenshots while the dialog is open.
  useEffect(() => {
    if (!selectedProject || imageCount < 2) return;

    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject, imageCount]);

  return (
    <Section id="projects" className="bg-bg-subtle" containerClassName="max-w-none px-0">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few of the things I have designed, built and shipped. Drag or swipe to explore."
        />
      </div>

      <Reveal className="mt-14">
        {/* The outer wrapper clips the viewport cleanly, while the inner list
            keeps the existing native scroll, drag, momentum and snap logic. */}
        <div className="mx-auto w-full max-w-[1440px] overflow-hidden px-5 sm:px-6 lg:px-8 xl:px-10">
          <ul
            ref={scroller}
            tabIndex={0}
            aria-label="Projects, scroll horizontally"
            onPointerDown={handlePointerDown}
            className={cx(
              'no-scrollbar flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain py-2',
              'scroll-px-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring',
            )}
          >
          {projects.map((project) => {
            const cover = resolveImages(project.images, missingImages)[0];

            return (
              <li
                key={project.id}
                // Cards fill the visible row exactly: one on mobile, two on
                // tablet and three on desktop. Mandatory snap prevents a card
                // from remaining half-visible after dragging.
                className="flex w-full shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <Card interactive className="group relative flex w-full flex-col overflow-hidden">
                  <div className="relative aspect-16/10 overflow-hidden bg-bg-subtle">
                    {cover && (
                      <img
                        src={cover.url}
                        alt={`${project.title} — ${cover.label}`}
                        loading="lazy"
                        draggable="false"
                        onError={() => handleImageError(cover.src)}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-mono text-[11px] font-medium tracking-tight text-primary">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-fg">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fg-muted">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                      {project.techStack.length > 3 && (
                        <Tag tone="primary">+{project.techStack.length - 3}</Tag>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="mt-5 inline-flex cursor-pointer items-center gap-1.5 self-start border-t border-transparent pt-4 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {/* Stretches the hit area to the whole card while keeping
                          a single, properly labelled control for the keyboard. */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      View details
                      <FiArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                      <span className="sr-only">for {project.title}</span>
                    </button>
                  </div>
                </Card>
              </li>
            );
          })}
          </ul>
        </div>
      </Reveal>

      <Modal
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ''}
        maxWidth="max-w-6xl"
        className="lg:h-[86dvh]"
      >
        {selectedProject && (
          // Stacked and page-scrolling on mobile; two independent columns on
          // large screens, where only the details side scrolls.
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
            {/* ---------- Left: gallery ---------- */}
            <div className="flex shrink-0 flex-col border-b border-line bg-bg-subtle lg:w-[55%] lg:border-r lg:border-b-0">
              {currentImage ? (
                <>
                  <div className="group relative aspect-16/10 w-full lg:aspect-auto lg:min-h-0 lg:flex-1">
                    <img
                      src={currentImage.url}
                      alt={`${selectedProject.title} — ${currentImage.label} (${safeIndex + 1} of ${imageCount})`}
                      onError={() => handleImageError(currentImage.src)}
                      className="absolute inset-0 h-full w-full object-contain"
                    />

                    {imageCount > 1 && (
                      <>
                        {/* Always visible on touch, where there is no hover. */}
                        <button
                          type="button"
                          aria-label="Previous screenshot"
                          onClick={prevImage}
                          className="absolute top-1/2 left-3 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-fg backdrop-blur transition duration-200 hover:bg-surface md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
                        >
                          <FiChevronLeft size={18} />
                        </button>
                        <button
                          type="button"
                          aria-label="Next screenshot"
                          onClick={nextImage}
                          className="absolute top-1/2 right-3 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-fg backdrop-blur transition duration-200 hover:bg-surface md:opacity-0 md:group-hover:opacity-100 md:focus-visible:opacity-100"
                        >
                          <FiChevronRight size={18} />
                        </button>
                      </>
                    )}
                  </div>

                  {imageCount > 1 && (
                    <div className="flex shrink-0 items-center justify-center gap-3 border-t border-line px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        {modalImages.map((image, index) => (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`Show screenshot ${index + 1}: ${image.label}`}
                            aria-current={index === safeIndex ? 'true' : undefined}
                            className={cx(
                              'h-2 rounded-full transition-all duration-300',
                              index === safeIndex
                                ? 'w-6 bg-primary'
                                : 'w-2 bg-line-strong hover:bg-fg-subtle',
                            )}
                          />
                        ))}
                      </div>
                      <span className="font-mono text-[11px] text-fg-subtle">
                        {safeIndex + 1} / {imageCount}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-16/10 w-full lg:aspect-auto lg:flex-1" />
              )}
            </div>

            {/* ---------- Right: details ---------- */}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-6 sm:p-8">
              <header>
                <p className="font-mono text-xs font-medium tracking-tight text-primary">
                  {selectedProject.category}
                </p>
                <p className="mt-2 pr-12 font-display text-2xl font-bold text-fg sm:text-3xl">
                  {selectedProject.title}
                </p>
                {selectedProject.date && (
                  <p className="mt-1.5 font-mono text-xs text-fg-subtle">{selectedProject.date}</p>
                )}
              </header>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-fg-muted">
                {selectedProject.description}
              </p>

              {selectedProject.role && (
                <section className="mt-6">
                  <h3 className={SECTION_LABEL}>My Role</h3>
                  <p className="mt-2 text-sm text-fg">{selectedProject.role}</p>
                </section>
              )}

              {selectedProject.contribution && (
                <section className="mt-6">
                  <h3 className={SECTION_LABEL}>My Contribution</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {selectedProject.contribution}
                  </p>
                </section>
              )}

              <section className="mt-6">
                <h3 className={SECTION_LABEL}>Key Features</h3>
                <ul className="mt-3 space-y-2.5">
                  {selectedProject.keyFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {(selectedProject.link || selectedProject.repo) && (
                <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
                  {selectedProject.repo && (
                    <Button
                      as="a"
                      variant="secondary"
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub size={16} />
                      Source code
                    </Button>
                  )}
                  {selectedProject.link && (
                    <Button as="a" href={selectedProject.link} target="_blank" rel="noreferrer">
                      <FiExternalLink size={16} />
                      Live demo
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
};

export default Projects;