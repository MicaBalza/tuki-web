export type ProjectData = {
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
