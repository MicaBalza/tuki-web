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
    animation2d: string;
    animation3d: string;
    motionGraphics: string;
  };
  video: {
    description: string;
    videoUrl: string;
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
      animation2d:
        "Transmitimos la misión, visión y valores de tu empresa a través de animaciones accesibles y atractivas. Perfecto para contar la historia de tu marca de manera clara y emotiva.",
      animation3d:
        "Creamos representaciones visuales realistas que destacan tu infraestructura, procesos y estándares de calidad con un alto nivel de detalle y profesionalismo",
      motionGraphics:
        "Presentamos información clave de tu empresa con gráficos dinámicos, datos en movimiento y efectos visuales que refuerzan tu identidad corporativa",
    },
    video: {
      description:
        "Selección de videos institucionales realizados en MyeVideo / Medevice Digital. Desde el concepto hasta la entrega final, en Tuki Studio nos encargamos de la dirección creativa, el desarrollo del guión y la coordinación del equipo de producción.",
      videoUrl: "https://www.youtube.com/embed/EUH6stzUVv8?si=SVeuM00QiJQCKoRf",
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
      animation2d:
        "Comunicar quién sos y qué te mueve: animaciones claras, accesibles y con alma, pensadas para reflejar la esencia de tu marca.",
      animation3d:
        "Mostramos lo mejor de tu empresa con animaciones realistas que destacan instalaciones, procesos y calidad con todo detalle.",
      motionGraphics:
        "Información clave, bien presentada: gráficos en movimiento y efectos visuales que hacen que tu mensaje se entienda y se recuerde.",
    },
    video: {
      description:
        "Clips de lanzamientos pensados para destacar lo mejor de cada producto. En Tuki Studio lideramos el enfoque creativo, la narrativa visual y la producción integral, como parte del equipo de MyeVideo / Medevice Digital.",
      videoUrl: "https://www.youtube.com/embed/hRX06tvkXJk?si=AsP0uX5J0PfpGoIa",
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
      animation2d:
        "Damos vida a la historia de tu empresa con animaciones visuales que conectan emocionalmente y comunican tu propósito con claridad.",
      animation3d:
        "Reproducimos visualmente tu infraestructura y procesos con precisión y profesionalismo, cuidando cada aspecto técnico.",
      motionGraphics:
        "Animaciones dinámicas para presentar tus datos de forma clara, estética y en sintonía con tu imagen de marca.",
    },
    video: {
      description:
        "Fragmentos de videos explicativos diseñados para hacer más fácil lo complejo. Desarrollo de guión, propuesta visual y supervisión de todo el proceso creativo, realizados por Tuki Studio durante nuestra etapa en MyeVideo / Medevice Digital.",
      videoUrl: "https://www.youtube.com/embed/pUtpN6ak1rE?si=9MR24_qGD6ZxB8LW",
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
      animation2d:
        "Animaciones pensadas para contar tu misión, visión y valores de forma cercana, comprensible y visualmente atractiva.",
      animation3d:
        "Damos forma a representaciones realistas que reflejan tu nivel de calidad, tecnología e instalaciones con fidelidad visual.",
      motionGraphics:
        "Datos que se mueven, gráficos que comunican: creamos piezas visuales alineadas con tu identidad corporativa.",
    },
    video: {
      description:
        "Piezas promocionales creadas para campañas, redes y presentaciones. Desde Tuki Studio nos encargamos de la dirección creativa y la coordinación general, trabajando como parte del equipo de MyeVideo / Medevice Digital.",
      videoUrl: "https://www.youtube.com/embed/LmlLAJe8Edo?si=jv07OTGNn6-qIA5_",
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
      animation2d:
        "Hacemos que tu marca hable: animaciones simples y emotivas para transmitir lo que te define como empresa.",
      animation3d:
        "Visualizamos tus procesos e instalaciones con detalle y realismo, resaltando tu estándar profesional.",
      motionGraphics:
        "Visualizamos tus cifras y mensajes clave con motion graphics que combinan ritmo, diseño y coherencia de marca.",
    },
    video: {
      description:
        "Contenido pensado para pantallas grandes y momentos clave. Concepto, guión visual y supervisión de producción a cargo de Tuki Studio, dentro de nuestro trabajo en MyeVideo / Medevice Digital.",
      videoUrl: "https://www.youtube.com/embed/cLsYr8_LtGQ?si=nV61LAQHGwsUCNv7",
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
      animation2d:
        "Una forma clara y visual de compartir tu propósito: animaciones que cuentan la historia de tu marca desde lo emocional y lo accesible.",
      animation3d:
        "Animaciones que muestran tu infraestructura con claridad técnica y estética, transmitiendo confianza y calidad.",
      motionGraphics:
        "Transformamos tus datos en gráficos animados que informan, impactan y refuerzan tu identidad visual.",
    },
    video: {
      description:
        "Diseño visual, edición y narrativa para podcasts en vídeo. Proyecto desarrollado por Tuki Studio como parte del equipo de MyeVideo / Medevice Digital.",
      videoUrl: "https://www.youtube.com/embed/OZ4RoZyxcqM?si=gOGj2jxZFVuxDVUM",
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
