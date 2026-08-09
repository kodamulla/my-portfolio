/*
 * TEMPORARY IMAGE FALLBACKS
 * -------------------------
 * The optimized screenshots under public/projects/ do not exist yet. Until they
 * are added, the slots below fall back to the screenshots currently in
 * src/assets so the carousel, image counter and navigation keep working.
 *
 * These imports are the ONLY reason src/assets is referenced here. Once every
 * .webp listed in this file exists under public/, delete these imports and every
 * `fallback:` line — the `src` paths already point at the final locations.
 */


/**
 * The single source of truth for the Projects section.
 *
 * To add a project: append one object to the array. To remove one: delete its
 * object. Array order is render order — nothing else in the app needs to change.
 *
 * @typedef  {Object}        ProjectImage
 * @property {string}        src        Public path, e.g. "/projects/slug/cover.webp".
 *                                      Served from public/, not imported from src/assets.
 * @property {string}        label      Short human label; becomes part of the alt text.
 * @property {string}  [fallback]       TEMPORARY. Bundled image shown while `src` is missing.
 *
 * @typedef  {Object}        Project
 * @property {string}        id           Stable unique slug, used as the React key.
 * @property {string}        title
 * @property {string}        category     Short qualifier shown under the modal title.
 * @property {string | null} date         Free-text period, or null if not applicable.
 * @property {string | null} role         Your role on the project, or null.
 * @property {string | null} contribution What you personally built, or null.
 * @property {string}        description  Two or three sentences; the card clamps to two.
 * @property {ProjectImage[]} images      First entry is the card cover.
 * @property {string[]}      techStack
 * @property {string[]}      keyFeatures
 * @property {string | null} link         Live demo URL, or null to hide the button.
 * @property {string | null} repo         Source repo URL, or null to hide the button.
 */

/** @type {Project[]} */
export const projects = [
  {
  id: "velvet-co",

  title: "Velvet Co",

  category: "Full-Stack MERN E-Commerce Platform",

  description:
    "A modern full-stack e-commerce platform built with the MERN stack, providing a secure shopping experience with comprehensive product management, order processing, and role-based administration.",

  role: "Full-Stack Developer",

  contribution:
    "Designed and developed the application across both frontend and backend. Implemented secure authentication, role-based access control, product management, order processing, image management, dashboard analytics, and RESTful APIs while improving application security and performance.",

  techStack: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT",
    "Supabase",
    "REST API"
  ],

  keyFeatures: [
    "Secure JWT Authentication",
    "Role-Based Access Control",
    "Product Management",
    "Category Management",
    "Shopping Cart",
    "Checkout Process",
    "Order Management",
    "Admin Dashboard",
    "Image Upload with Supabase",
    "Analytics Dashboard",
    "Responsive Design",
    "REST API Architecture"
  ],

  images: [
    {
      src: "/projects/velvet-co/cover.webp",
      label: "Home Page"
    },
    {
      src: "/projects/velvet-co/products.webp",
      label: "Products"
    },
    {
      src: "/projects/velvet-co/product-details.webp",
      label: "Product Details"
    },
    {
      src: "/projects/velvet-co/cart.webp",
      label: "Shopping Cart"
    },
    {
      src: "/projects/velvet-co/checkout.webp",
      label: "Checkout"
    },
    {
      src: "/projects/velvet-co/admin-dashboard.webp",
      label: "Admin Dashboard"
    },
   
   
  ],

  link: "https://velvet-co.vercel.app",
  repo:" https://github.com/kodamulla/velvet-co.git",
},
  {
    id: 'tradez-voting-dapp',
    title: 'Tradez Voting DApp',
    category: 'Final Year Computing Project',
    date: null,
    role: null,
    contribution:
      'Designed and developed the full prototype, including the responsive frontend, blockchain integration, smart contracts, voter registration flow, vote casting process, and decentralized document storage architecture.',
    description:
      'A secure blockchain-based electronic voting prototype built to modernize Sri Lanka’s traditional paper-based voting process. Ethereum smart contracts provide transparent, tamper-resistant vote recording, enforce one-person-one-vote validation, and automate vote tallying while maintaining voter privacy.',
    images: [
  {
    src: "/projects/tradez-voting/cover.webp",
    label: "Landing Page",
  },
  {
    src: "/projects/tradez-voting/voter.webp",
    label: "Voter Registration",
  },
  {
    src: "/projects/tradez-voting/voting-page.webp",
    label: "Voting Page",
  },
  {
    src: "/projects/tradez-voting/confirm-transaction.webp",
    label: "Transaction Confirmation",
  },
],
    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'Solidity',
      'Ethereum',
      'Hardhat',
      'Ethers.js',
      'MetaMask',
      'IPFS',
      'Pinata',
    ],
    keyFeatures: [
      'Secure voter and candidate registration',
      'One-person-one-vote enforcement',
      'Immutable blockchain-based vote records',
      'Automated vote tallying',
      'MetaMask wallet integration',
      'IPFS-based storage for voter documents',
      'Admin monitoring functionality',
      'Verifiable voting transactions',
    ],
    link: null,
    repo:"https://github.com/kodamulla/tradez-voting-dapp.git",
  },
  {
    id: 'flavor-town',
    title: 'Flavor Town',
    category: 'Restaurant Management and Ordering System',
    date: 'December 2025 – January 2026',
    role: 'Security and Backend Architecture Specialist',
    contribution:
      'Worked as part of a collaborative university group project and focused primarily on authentication, authorization, backend security, server-side validation, API integration, and secure application state management.',
    description:
      'A full-stack restaurant management and online ordering platform where customers browse menus, place food orders, make table reservations, and submit reviews. It also includes an administrative dashboard for securely managing categories, menu items, orders, reservations, and customer feedback.',
    images: [
  {
    src: "/projects/flavor-town/cover.webp",
    label: "Home Page",
  },
  {
    src: "/projects/flavor-town/home.webp",
    label: "Landing Page",
  },
  {
    src: "/projects/flavor-town/menu.webp",
    label: "Menu",
  },
  {
    src: "/projects/flavor-town/ordering.webp",
    label: "Ordering",
  },
  {
    src: "/projects/flavor-town/booking.webp",
    label: "Booking",
  },
  {
    src: "/projects/flavor-town/admin-dashboard.webp",
    label: "Admin Dashboard",
  },
],
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'JWT',
      'BcryptJS',
      'React Context API',
      'REST API',
    ],
    keyFeatures: [
      'Secure JWT-based user authentication',
      'BcryptJS password hashing',
      'Role-based access control for users and administrators',
      'Menu browsing and online ordering',
      'Table reservation management',
      'Administrative dashboard',
      'Category and menu-item management',
      'Order and customer-review management',
      'Protected frontend routes',
      'Server-side data validation',
    ],
    link: null,
    repo: null,
  },
  {
    id: 'i-computers',
    title: 'i-Computers',
    category: 'MERN Stack E-Commerce Platform',
    date: null,
    role: null,
    contribution: null,
    description:
      'A responsive MERN Stack e-commerce application developed for browsing and purchasing computer hardware. The platform covers product discovery, category-based browsing, cart management, and user authentication, alongside administrative tools for managing products and inventory.',
    images: [
  {
    src: "/projects/i-computers/cover.webp",
    label: "Home Page",
  },
  {
    src: "/projects/i-computers/login.webp",
    label: "Login",
  },
  {
    src: "/projects/i-computers/orders.webp",
    label: "Orders",
  },
  {
    src: "/projects/i-computers/order-details.webp",
    label: "Order Details",
  },
],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    keyFeatures: [
      'Product browsing',
      'Product details',
      'Category-based filtering',
      'Shopping cart management',
      'User authentication',
      'Product administration',
      'Inventory management',
      'Responsive interface',
    ],
    link: null,
    repo: "https://github.com/kodamulla/i-computers-frontend.git",
  },
  {
    id: 'furniture-studio',
    title: 'Furniture Studio',
    category: '3D Furniture Customization Tool',
    date: '2026',
    role: null,
    contribution:
      'Developed the interactive visualization experience, integrated React Three Fiber for real-time 3D rendering, and implemented object manipulation using PivotControls.',
    description:
      'An interactive web-based interior design application that allows users to visualize and customize furniture in both 2D and 3D environments.',
    images: [
  {
    src: "/projects/furniture-studio/cover.webp",
    label: "Home",
  },
  {
    src: "/projects/furniture-studio/login.webp",
    label: "Login",
  },
  {
    src: "/projects/furniture-studio/studio-3d.webp",
    label: "3D Studio",
  },
  {
    src: "/projects/furniture-studio/customization.webp",
    label: "Customization",
  },
  {
    src: "/projects/furniture-studio/asset-collection.webp",
    label: "Asset Collection",
  },
],
    techStack: ['React', 'React Three Fiber', 'JavaScript', 'Tailwind CSS'],
    keyFeatures: [
      'Real-time 3D furniture rendering',
      'Interactive scaling, rotation, and positioning',
      '2D and 3D view switching',
      'Interior design visualization',
      'Custom furniture planning',
      'Responsive user interface',
    ],
    link: null,
    repo: null,
  },
];

export default projects;
