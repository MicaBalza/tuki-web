import { ServiceType } from "@/types/services";

export const ILLUSTRATION_PROJECTS = [
  "presentacion-privada-medica",
  "primal",
  "roedores-y-dinosaurios",
  "personajes-de-fantasia",
  "illuminated",
  "mudarse",
  "alfabeto",
  "coleccion-rosa",
  "coleccion-de-ilustraciones",
];

export const ANIMATION_PROJECTS = [
  "shutterfly",
  "tatari",
  "linmore-led",
  "bridge-tech-medical",
  "neha",
  "uk-school",
  "crc",
  "hum-capital",
  "zion",
  "adevantage",
  "tdverse",
];

export const SOCIAL_MEDIA_PROJECTS = [
  "claire-salabelle",
  "momentful-app",
  "social-media",
  "trippin-store",
];

export const EDITORIAL_PROJECTS = [
  "primal",
  "campaña-publicitaria",
  "birdwatchers",
  "tinta",
  "timo",
  "autismo-avila",
];

export const BRANDING_PROJECTS = [
  "bardo",
  "viuty",
  "malcriada",
  "baba-studio",
  "harmony",
  "logofolio",
  "iamskin",
  "desquiciado",
  "fig-creme",
];

export const PROJECTS: Record<string, string[]> = {
  [ServiceType.ILLUSTRATION]: ILLUSTRATION_PROJECTS,
  [ServiceType.ANIMATION]: ANIMATION_PROJECTS,
  [ServiceType.SOCIAL_MEDIA]: SOCIAL_MEDIA_PROJECTS,
  [ServiceType.EDITORIAL]: EDITORIAL_PROJECTS,
  [ServiceType.BRANDING]: BRANDING_PROJECTS,
  [ServiceType.MOTION_GRAPHICS]: [],
};
