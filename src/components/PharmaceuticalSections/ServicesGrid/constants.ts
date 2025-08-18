export interface ServiceImage {
  src: string;
  alt: string;
  url: string;
  titleKey: string;
  descriptionKey: string;
  videoUrl: string;
}

export const serviceImages: ServiceImage[] = [
  {
    src: "/static/images/pharmaceutical-services/institutional-corporate-videos.png",
    alt: "Institutional & Corporate Videos",
    url: "institutional-videos",
    titleKey: "institutional",
    descriptionKey: "institutional",
    videoUrl: "https://www.youtube.com/embed/1pMA0rCGkBg?si=2Upc8mIJUzCvdka1",
  },
  {
    src: "/static/images/pharmaceutical-services/product-launch.png",
    alt: "Product Launch",
    url: "product-launch",
    titleKey: "productLaunch",
    descriptionKey: "productLaunch",
    videoUrl: "https://www.youtube.com/embed/bQavAa2pVSg?si=9ljRmBFhVPlCRPVR",
  },
  {
    src: "/static/images/pharmaceutical-services/tutorial-training.png",
    alt: "Tutorials & Training",
    url: "tutorials-training",
    titleKey: "tutorials",
    descriptionKey: "tutorials",
    videoUrl: "https://www.youtube.com/embed/pUtpN6ak1rE?si=9MR24_qGD6ZxB8LW",
  },
  {
    src: "/static/images/pharmaceutical-services/promotional-videos.png",
    alt: "Promotional Videos",
    url: "promotional-videos",
    titleKey: "promotional",
    descriptionKey: "promotional",
    videoUrl: "https://www.youtube.com/embed/LmlLAJe8Edo?si=jv07OTGNn6-qIA5_",
  },
  {
    src: "/static/images/pharmaceutical-services/events-conferences.png",
    alt: "Events & Congress",
    url: "events-congress",
    titleKey: "events",
    descriptionKey: "events",
    videoUrl: "https://www.youtube.com/embed/1DS_mkqlSbQ?si=h4XcTjBQWqvH8wok",
  },
  {
    src: "/static/images/pharmaceutical-services/podcast-videos.png",
    alt: "Video Podcast",
    url: "video-podcast",
    titleKey: "podcast",
    descriptionKey: "podcast",
    videoUrl: "https://www.youtube.com/embed/OZ4RoZyxcqM?si=gOGj2jxZFVuxDVUM",
  },
];
