export enum ServiceType {
  ILLUSTRATION = "illustration",
  ANIMATION = "animation",
  SOCIAL_MEDIA = "social-media",
  EDITORIAL = "editorial",
  BRANDING = "branding",
  MOTION_GRAPHICS = "motion-graphics",
}

export type ServiceData = {
  name: string;
  country: string;
  description: string;
  folderName: string;
  gridType?: "onetwoonefour" | string;
  imageQuantity?: number;
  videoUrl?: string;
  hasVideo?: boolean;
  hasSecondVideo?: boolean;
  hasGifs?: boolean;
  gridGifType?: string;
  gifQuantity?: number;
};
