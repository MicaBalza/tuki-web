export interface PharmaceuticalService {
  id: string;
  cover: {
    title: string;
    bigDescription: string;
    description: string;
    bgColor: string;
  };
  howWeDoIt: {
    description: string;
    bgColor: string;
  };
}

export const PHARMACEUTICAL_SERVICES: Record<string, PharmaceuticalService> = {
  "institutional-corporate-videos": {
    id: "institutional-corporate-videos",
    cover: {
      title: "Videos Institucionales y Corporativos",
      bigDescription:
        "Contamos de forma simple y visual <b>quién es tu empresa, qué la mueve y cómo trabaja.</b>",
      description:
        "Creamos vídeos que  pueden transmitir tu cultura, presentar proyectos claves ó recorrer tu laboratorio.",
      bgColor: "nude",
    },
    howWeDoIt: {
      description:
        "Elige la opción que mejor se adapte a tu mensaje y presupuesto. Desde ilustraciones simples y educativas en 2D, hasta animaciones complejas en 3D, pasando por gráficos en movimiento.",
      bgColor: "pink",
    },
  },
  "product-launch": {
    id: "product-launch",
    cover: {
      title: "Lanzamiento & Presentación de Producto",
      bigDescription:
        "Desarrollamos vídeos que muestran los <b>beneficios</b> de tus productos, <b>cómo funcionan</b> y por qué <b>marcan la diferencia</b>.",
      description:
        "Por ejemplo, un vídeo que explique un nuevo medicamento, cómo se usa un dispositivo médico o la presentación de un mecanismo de acción.",
      bgColor: "purple",
    },
    howWeDoIt: {
      description:
        "Selecciona el formato que mejor encaje con tu mensaje y presupuesto: desde ilustraciones didácticas en 2D hasta animaciones complejas en 3D, sin olvidar los motion graphics.",
      bgColor: "pink",
    },
  },
  "tutorial-training": {
    id: "tutorial-training",
    cover: {
      title: "Tutoriales y Capacitación",
      bigDescription:
        "Creamos vídeos para <b>enseñar</b> a profesionales o pacientes <b>cómo usar</b> un medicamento, dispositivo o plataforma <b>paso a paso</b>.",
      description:
        "Este tipo de vídeos puede mostrar cómo aplicar un tratamiento ó explicar el uso de una app de salud.",
      bgColor: "light-purple",
    },
    howWeDoIt: {
      description:
        "Adaptamos la producción a tu idea y presupuesto: ilustraciones simples en 2D, gráficos en movimiento o animaciones más complejas en 3D.",
      bgColor: "nude",
    },
  },
  "promotional-videos": {
    id: "promotional-videos",
    cover: {
      title: "Videos de Promoción",
      bigDescription:
        "Creamos contenidos visuales que <b>destacan las ventajas</b> de tu producto ó empresa enfocado a tu público ideal.",
      description:
        "Un claro ejemplo son los videos cortos para redes sociales ó una presentación rápida para inversores.",
      bgColor: "green",
    },
    howWeDoIt: {
      description:
        "Desde animaciones sencillas en 2D hasta piezas elaboradas en 3D, incluyendo motion graphics: elige lo que mejor se ajuste a tu mensaje y tus recursos.",
      bgColor: "pink",
    },
  },
  "events-conferences": {
    id: "events-conferences",
    cover: {
      title: "Contenido para Eventos & Conferencias",
      bigDescription:
        "Diseñamos <b>material audivisual</b> para acompañar tus <b>charlas, stands o presentaciones en congresos</b>.",
      description:
        "Sirve para visualizar un proceso específico, presentar un nuevo producto, etc.",
      bgColor: "pink",
    },
    howWeDoIt: {
      description:
        "Tienes opciones para cada tipo de mensaje y presupuesto: 2D educativo, motion graphics dinámico o animación 3D con más detalle.",
      bgColor: "nude",
    },
  },
  "podcast-videos": {
    id: "podcast-videos",
    cover: {
      title: "Producción de Video Podcast",
      bigDescription:
        "Tomamos tus episodios de podcast y los <b>combinamos con imágenes, gráficos y/o fragmentos de vídeos</b>.",
      description:
        "Transformar tu podcast de esta manera hace que sea más fácil compartir los episodios en redes sociales.",
      bgColor: "nude",
    },
    howWeDoIt: {
      description:
        "¿Tu mensaje es simple o complejo? Tenemos el estilo adecuado para cada necesidad y presupuesto: 2D, motion graphics o animación 3D.",
      bgColor: "pink",
    },
  },
};

// Common images for the second section (these will be the same for all services)
export const PHARMACEUTICAL_PROCESS_IMAGES = [
  {
    title: "Animación 2D",
    alt: "Animación 2D",
  },
  {
    title: "Animación 3D",
    alt: "Animación 3D",
  },
  {
    title: "Motion Graphics",
    alt: "Motion Graphics",
  },
];
