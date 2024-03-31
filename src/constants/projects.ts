import { ServiceType } from "@/types/services";
import { ANIMATION_PROJECTS } from "./animationProjects";
import { EDITORIAL_PROJECTS } from "./editorialProjects";
import { ILLUSTRATION_PROJECTS } from "./illustrationProjects";
import { MOTION_GRAPHICS_PROJECTS } from "./motionGraphicsProjects";
import { SOCIAL_MEDIA_PROJECTS } from "./socialMediaProjects";

export const PROJECTS: Record<string, any> = {
  [ServiceType.ILLUSTRATION]: ILLUSTRATION_PROJECTS,
  [ServiceType.ANIMATION]: ANIMATION_PROJECTS,
  [ServiceType.EDITORIAL]: EDITORIAL_PROJECTS,
  [ServiceType.SOCIAL_MEDIA]: SOCIAL_MEDIA_PROJECTS,
  [ServiceType.BRANDING]: [],
  [ServiceType.MOTION_GRAPHICS]: MOTION_GRAPHICS_PROJECTS,
};
