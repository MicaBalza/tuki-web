export const ROUTES = [
  {
    path: "/",
    text: "home",
    color: "nude",
  },
  {
    path: "/projects",
    text: "services",
    color: "nude",
    dropdown: [
      { path: "/projects/illustration", text: "illustration" },
      { path: "/projects/animation", text: "animation" },
      { path: "/projects/social-media", text: "social-media" },
      { path: "/projects/editorial", text: "editorial" },
      { path: "/projects/branding", text: "branding" },
      { path: "/projects/motion-graphics", text: "motion-graphics" },
      { path: "/projects/pharmaceutical", text: "pharmaceutical" },
    ],
  },
  {
    path: "/pharmaceutical-services",
    text: "pharmaceutical-services",
    color: "green",
    dropdown: [
      {
        path: "/pharmaceutical-services/institutional-corporate-videos",
        text: "institutional-corporate-videos",
      },
      {
        path: "/pharmaceutical-services/product-launch",
        text: "product-launch",
      },
      {
        path: "/pharmaceutical-services/tutorial-training",
        text: "tutorial-training",
      },
      {
        path: "/pharmaceutical-services/promotional-videos",
        text: "promotional-videos",
      },
      {
        path: "/pharmaceutical-services/events-conferences",
        text: "events-conferences",
      },
      {
        path: "/pharmaceutical-services/podcast-videos",
        text: "podcast-videos",
      },
      {
        path: "/pharmaceutical-services/projects",
        text: "projects",
      },
    ],
  },
  {
    path: "/us",
    text: "who-we-are",
    color: "light-purple",
  },
  {
    path: "/blog",
    text: "blog",
    color: "yellow",
  },
  {
    path: "/contact-us",
    text: "contact",
    color: "pink",
  },
];

export const NAVBAR_COLORS: Record<string, string> = {
  "/": "nude",
  "//services": "nude",
  "//pharmaceutical-services": "green",
  "//us": "light-purple",
  "//blog": "yellow",
  "//contact-us": "pink",
  "//services/illustration": "green",
  "//services/animation": "yellow",
  "//services/social-media": "light-purple",
  "//services/editorial": "red",
  "//services/branding": "pink",
  "//services/motion-graphics": "light-purple",
};
