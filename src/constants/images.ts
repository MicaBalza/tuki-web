import { SERVICES_ENUM } from "./services";

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

export const ANIMATION_PROJECTS = ["shutterfly"];

export const SOCIAL_MEDIA_PROJECTS = ["claire-salabelle"];

export const EDITORIAL_PROJECTS = ["primal"];

export const BRANDING_PROJECTS = ["bardo"];

export const PROJECTS: Record<string, string[]> = {
  [SERVICES_ENUM.ILLUSTRATION]: ILLUSTRATION_PROJECTS,
  [SERVICES_ENUM.ANIMATION]: ANIMATION_PROJECTS,
  [SERVICES_ENUM.SOCIAL_MEDIA]: SOCIAL_MEDIA_PROJECTS,
  [SERVICES_ENUM.EDITORIAL]: EDITORIAL_PROJECTS,
  [SERVICES_ENUM.BRANDING]: BRANDING_PROJECTS,
  [SERVICES_ENUM.MOTION_GRAPHICS]: [],
};
