export const COLOR_BY_PATH = [
  {
    path: "/",
    bgColor: "pink",
    color: "purple",
  },
  {
    path: "/services",
    bgColor: "purple",
    color: "white",
  },
  {
    path: "/us",
    bgColor: "purple",
    color: "white",
  },
  {
    path: "/contact-us",
    bgColor: "purple",
    color: "white",
  },
  {
    path: "/health-services/institutional-corporate-videos",
    bgColor: "light-purple",
    color: "white",
  },
  {
    path: "/health-services/product-launch",
    bgColor: "light-purple",
    color: "white",
  },
  {
    path: "/health-services/promotional-videos",
    bgColor: "light-purple",
    color: "white",
  },
  {
    path: "/health-services/podcast-videos",
    bgColor: "light-purple",
    color: "white",
  },
];

export const FOOTER_SECTIONS = [
  {
    title: "home",
    path: "/",
    items: [],
  },
  {
    title: "services",
    path: "/services",
    items: [
      { text: "illustration", path: "/services/illustration" },
      { text: "animation", path: "/services/animation" },
      { text: "social-media", path: "/services/social-media" },
      { text: "editorial", path: "/services/editorial" },
      { text: "branding", path: "/services/branding" },
      { text: "motion-graphics", path: "/services/motion-graphics" },
      { text: "pharmaceutical", path: "/health-services" },
    ],
  },
  {
    title: "health-services",
    path: "/health-services",
    items: [
      {
        text: "institutional-corporate-videos",
        path: "/health-services/institutional-corporate-videos",
      },
      {
        text: "product-launch",
        path: "/health-services/product-launch",
      },
      {
        text: "tutorial-training",
        path: "/health-services/tutorial-training",
      },
      {
        text: "promotional-videos",
        path: "/health-services/promotional-videos",
      },
      {
        text: "events-conferences",
        path: "/health-services/events-conferences",
      },
      {
        text: "podcast-videos",
        path: "/health-services/podcast-videos",
      },
      { text: "projects", path: "/health-services" },
    ],
  },
  {
    title: "who-we-are",
    path: "/us",
    items: [],
  },
  // {
  //   title: "blog",
  //   path: "/blog",
  //   items: [],
  // },
  {
    title: "contact",
    path: "/contact-us",
    items: [],
  },
];
