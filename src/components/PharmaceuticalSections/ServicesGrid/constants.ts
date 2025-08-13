export interface ServiceImage {
  src: string;
  alt: string;
  url: string;
  title: string;
}

export const serviceImages: ServiceImage[] = [
  { 
    src: "/static/images/pharmaceutical-services/institutional-corporate-videos.png",
    alt: "Institutional & Corporate Videos",
    url: "institutional-videos",
    title: "Videos Institucionales & Corporativos"
  },
  { 
    src: "/static/images/pharmaceutical-services/product-launch.png",
    alt: "Product Launch",
    url: "product-launch",
    title: "Lanzamiento y Presentación de Producto"
  },
  { 
    src: "/static/images/pharmaceutical-services/tutorial-training.png",
    alt: "Tutorials & Training",
    url: "tutorials-training",
    title: "Tutoriales & Capacitación"
  },
  { 
    src: "/static/images/pharmaceutical-services/promotional-videos.png",
    alt: "Promotional Videos",
    url: "promotional-videos",
    title: "Videos de Promoción"
  },
  { 
    src: "/static/images/pharmaceutical-services/events-conferences.png",
    alt: "Events & Congress",
    url: "events-congress",
    title: "Contenido para Eventos & Congresos"
  },
  { 
    src: "/static/images/pharmaceutical-services/podcast-videos.png",
    alt: "Video Podcast",
    url: "video-podcast",
    title: "Producción de Video Podcast"
  }
];