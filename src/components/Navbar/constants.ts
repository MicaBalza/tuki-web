export const ROUTES = [
  {
    path: "/",
    text: "home",
    color: "nude",
  },
  {
    path: "/services",
    text: "services",
    color: "nude",
    dropdown: [
      { path: "/services/illustration", text: "illustration" },
      { path: "/services/animation", text: "animation" },
      { path: "/services/social-media", text: "social-media" },
      { path: "/services/editorial", text: "editorial" },
      { path: "/services/branding", text: "branding" },
      { path: "/services/motion-graphics", text: "motion-graphics" },
      { path: "/services/pharmaceutical", text: "pharmaceutical" },
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
        path: "/pharmaceutical-services/services",
        text: "services",
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
