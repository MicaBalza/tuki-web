import { Props } from "./Resource";

export const CONTENT: Record<
  Props["variant"],
  { title?: string; description?: string }
> = {
  illustration: {
    title: "Ilustración",
    description:
      "Dibujamos mucho: personajes, libros ilustrados, packaging y todas tus ideas.",
  },
  animation: {
    title: "Animación",
    description: "Nos gusta movernos: de GIFs a videos explicativos.",
  },
  "social-media": {
    title: "Social Media",
    description: "Realizamos contenido audiovisual para potenciar tu marca.",
  },
  editorial: {
    title: "Editorial",
    description:
      "Diseñamos y maquetamos libros, revistas, folletos, diarios - dónde sea que vivan las letras.",
  },
  branding: {
    title: "Branding",
    description: "Creamos los elementos que tu marca necesita para ser única.",
  },
  "motion-graphics": {
    title: "Motion Graphics",
    description:
      "Exploramos nuevas formas de mantenernos en movimiento: videos corporativos, explicativos, lanzamiento de producto, etc.",
  },
};
