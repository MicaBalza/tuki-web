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
    videoUrl: "https://www.youtube.com/embed/EUH6stzUVv8?si=SVeuM00QiJQCKoRf",
  },
  {
    src: "/static/images/pharmaceutical-services/product-launch.png",
    alt: "Product Launch",
    url: "product-launch",
    titleKey: "productLaunch",
    descriptionKey: "productLaunch",
    videoUrl: "https://www.youtube.com/embed/hRX06tvkXJk?si=AsP0uX5J0PfpGoIa",
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
    videoUrl: "https://www.youtube.com/embed/cLsYr8_LtGQ?si=nV61LAQHGwsUCNv7",
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
