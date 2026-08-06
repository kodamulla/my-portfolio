import { useState } from 'react';
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from 'react-icons/fi';
import { site } from '../data/site';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

const FORM_ENDPOINT = 'https://api.web3forms.com/submit';


const WEB3FORMS_ACCESS_KEY = 'a503d247-cf19-408b-a543-f54d18942ebc';

const FIELD =
  'w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-subtle ' +
  'transition-colors duration-200 focus:border-primary focus:outline-none';

const LABEL = 'mb-1.5 block text-sm font-medium text-fg';

const channels = [
  {
    id: 'email',
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: FiMail,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'kodamulla',
    href: site.socials.github,
    Icon: FiGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Hansi Kodamulla',
    href: site.socials.linkedin,
    Icon: FiLinkedin,
  },
];

const Contact = () => {
  const [status, setStatus] = useState('idle');
  // idle | loading | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus('loading');

    try {
      const formData = new FormData(form);

      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', 'New message from Hansi Portfolio');
      formData.append('from_name', 'Hansi Kodamulla Portfolio');

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission rejected');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something together"
        description="Have a role, a project or a question in mind? Send a message and I’ll get back to you."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <Reveal>
          <ul className="space-y-3">
            {channels.map(({ id, label, value, href, Icon }) => (
              <li key={id}>
                <Card
                  as="a"
                  interactive
                  href={href}
                  {...(href.startsWith('mailto:')
                    ? {}
                    : {
                        target: '_blank',
                        rel: 'noreferrer',
                      })}
                  className="flex items-center gap-4 px-4 py-4"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-bg-subtle text-fg-muted">
                    <Icon size={18} />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] tracking-tight text-fg-subtle uppercase">
                      {label}
                    </span>

                    <span className="block truncate text-sm font-medium text-fg">
                      {value}
                    </span>
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="p-6 sm:p-8">
            {status === 'success' ? (
              <div
                role="status"
                className="flex min-h-64 flex-col items-center justify-center text-center"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <FiCheckCircle size={24} />
                </span>

                <p className="mt-4 font-display text-lg font-semibold text-fg">
                  Message sent
                </p>

                <p className="mt-2 max-w-sm text-sm text-fg-muted">
                  Thanks for reaching out — I’ll reply as soon as I can.
                </p>

                <Button
                  variant="ghost"
                  className="mt-5"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                {/* Web3Forms spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={LABEL} htmlFor="contact-name">
                      Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      className={FIELD}
                    />
                  </div>

                  <div>
                    <label className={LABEL} htmlFor="contact-email">
                      Email
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      className={FIELD}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className={LABEL} htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me a little about what you have in mind…"
                    className={`${FIELD} resize-y`}
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="mt-4 text-sm text-red-400">
                    Something went wrong sending your message. Please try again,
                    or email me directly at {site.email}.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  loading={status === 'loading'}
                  className="mt-6 w-full sm:w-auto"
                >
                  <FiSend size={16} />
                  Send message
                </Button>
              </form>
            )}
          </Card>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;