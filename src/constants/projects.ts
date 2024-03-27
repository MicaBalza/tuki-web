import { ServiceType } from "@/types/services";
import { ANIMATION_PROJECTS } from "./animationProjects";
import { EDITORIAL_PROJECTS } from "./editorialProjects";
import { ILLUSTRATION_PROJECTS } from "./illustrationProjects";

const SOCIAL_MEDIA_PROJECTS = [
  {
    name: "Claire Salabelle",
    country: "Argentina",
    description: "Creación de piezas de redes sociales",
    folderName: "claire-salabelle",
    gridType: "onetwoonetwotwo",
    imageQuantity: 4,
    hasVideo: true,
    hasSecondVideo: true,
  },
  {
    name: "Proyecto Personal",
    country: "España",
    description: "Realización de GIFs y piezas para redes sociales",
    folderName: "proyecto-personal",
  },
  {
    name: "Momentful App",
    country: "UK",
    description:
      "Ilustración y conceptualización de E-Cards (Tarjetas electrónicas ilustradas)",
    folderName: "momentful-app",
    gridType: "one-wide",
    imageQuantity: 7,
  },
  {
    name: "Social Media",
    country: "Argentina",
    description: "Creaciones de Piezas para redes sociales",
    folderName: "social-media",
    gridType: "two",
    imageQuantity: 6,
  },
  {
    name: "Trippin' Store",
    country: "Argentina",
    description: "Creaciones de Piezas para redes sociales",
    folderName: "trippin-store",
    gridType: "two",
    imageQuantity: 4,
    hasVideo: true,
    hasSecondVideo: true,
  },
  {
    name: "BW Animations",
    country: "España",
    description:
      "Animación frame by frame de personajes para proyecto personal",
    folderName: "bw-animations",
  },
];

const BRANDING_PROJECTS = [
  {
    name: "Bardo",
    country: "España",
    description: "Branding y posts de RRSS",
    folderName: "bardo",
    gridType: "one-wide",
    imageQuantity: 6,
  },
  {
    name: "Viuty",
    country: "España",
    description: "Rediseño de branding y post de RRSS",
    folderName: "viuty",
    gridType: "two",
    imageQuantity: 28,
  },
  {
    name: "Malcriada",
    country: "Argentina",
    description: "Brand refresh",
    folderName: "malcriada",
    gridType: "oneonethreetwothree",
    imageQuantity: 10,
  },
  {
    name: "Baba Studio",
    country: "España",
    description:
      "Logo - Identidad Visual - Catalogo - Etiquetas - Redes Sociales",
    folderName: "baba-studio",
    gridType: "oneonefourtwo",
    imageQuantity: 8,
  },
  {
    name: "Harmony",
    country: "Colombia",
    description:
      "Creación de packaging de una línea de productos dermatológicos.",
    folderName: "harmony",
    gridType: "onetwoonefour",
    imageQuantity: 9,
  },
  {
    name: "Logofolio",
    country: "",
    description: "Desarrollo de logos para diferentes marcas",
    folderName: "logofolio",
    gridType: "one",
    imageQuantity: 10,
  },
  {
    name: "Iamskin",
    country: "España",
    description: "Diseño grafico, RRSS, fotografia, edicion de video",
    folderName: "iamskin",
    gridType: "one",
    imageQuantity: 5,
  },
  {
    name: "Desquiciado",
    country: "Argentina",
    description: "Ilustracion para etiqueta",
    folderName: "desquiciado",
    gridType: "onetwoonetwotwo",
    imageQuantity: 6,
  },
  {
    name: "Fig creme",
    country: "Argentina",
    description: "Ilustración cientifica packaging",
    folderName: "fig-creme",
    gridType: "onetwoonetwotwo",
    imageQuantity: 8,
  },
];

const MOTION_GRAPHICS_PROJECTS = [
  {
    name: "Caixa Bank",
    country: "España",
    description: "",
    folderName: "caixa-bank",
    gridType: "one-wide",
    imageQuantity: 1,
    videoUrl: "https://www.youtube.com/embed/QxKkaIeGTT0?si=UcKX8CVSd2ws5Dnc",
  },
  {
    name: "Imagin",
    country: "España",
    description: "",
    folderName: "imagin",
    gridType: "one-wide",
    imageQuantity: 1,
    videoUrl: "https://www.youtube.com/embed/SBWsGniboWc",
  },
  {
    name: "Olistic",
    country: "España",
    description: "",
    folderName: "olistic",
    gridType: "one-wide",
    imageQuantity: 1,
    videoUrl: "https://www.youtube.com/embed/RExi03yD3Sk?si=mn5_7nj-aICLk_dn",
  },
  {
    name: "Taj-Mahal",
    country: "España",
    description: "",
    folderName: "taj-mahal",
    gridType: "one-wide",
    imageQuantity: 1,
    videoUrl: "https://www.youtube.com/embed/pzx7Wznkp3E?si=ieDe3siC_6t-IcO9",
  },
];

export const PROJECTS: Record<string, any> = {
  [ServiceType.ILLUSTRATION]: ILLUSTRATION_PROJECTS,
  [ServiceType.ANIMATION]: ANIMATION_PROJECTS,
  [ServiceType.EDITORIAL]: EDITORIAL_PROJECTS,
  [ServiceType.SOCIAL_MEDIA]: SOCIAL_MEDIA_PROJECTS,
  [ServiceType.BRANDING]: BRANDING_PROJECTS,
  [ServiceType.MOTION_GRAPHICS]: MOTION_GRAPHICS_PROJECTS,
};
