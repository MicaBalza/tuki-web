// Base interface for all project content blocks
interface BaseProjectBlock {
  type: string;
}

// Cover block - contains project metadata and description
interface CoverBlock extends BaseProjectBlock {
  type: "cover";
  name: string;
  country?: string;
  description: string;
  goal: string;
  creativity?: string;
  production?: string;
  projectManagement?: string;
  position?: string;
  format?: string;
  link?: string;
  repeatedFolder?: string;
}

// Flex layouts for image grids
type FlexType =
  | "oneWide"
  | "oneSquare"
  | "oneTall"
  | "oneSuperWide"
  | "twoWide"
  | "twoSquare"
  | "twoTall"
  | "twoWideSquare"
  | "threeWide"
  | "threeWider"
  | "threeSquare"
  | "threeTall"
  | "fourWide"
  | "fourSquare"
  | "fiveSquare"
  | "sixSquare";

// Flex block - contains image grids
interface FlexBlock extends BaseProjectBlock {
  type: "flex";
  quantity: number;
  flex: FlexType;
  format?: string | Record<number, string>;
  position?: string;
}

// Flex video block - contains video grids
interface FlexVideoBlock extends BaseProjectBlock {
  type: "flex-video";
  quantity: number;
  flex: FlexType;
  videoUrl?: string;
}

// Info block - contains text information
interface InfoBlock extends BaseProjectBlock {
  type: "info";
  h2: string;
}

// Info image block - contains text with image context
interface InfoImageBlock extends BaseProjectBlock {
  type: "info-img";
  h2: string;
  position?: string;
  isSquare?: boolean;
  isReverse?: boolean;
}

// Info video block - contains text with video
interface InfoVideoBlock extends BaseProjectBlock {
  type: "info-video";
  h2: string;
  p?: string;
  videoUrl?: string;
  autoplay?: boolean;
}

// Video block - contains just a video (for motion graphics projects)
interface VideoBlock extends BaseProjectBlock {
  type: "video";
  videoUrl: string;
}

// Union type for all possible project content blocks
export type ProjectContentBlock =
  | CoverBlock
  | FlexBlock
  | FlexVideoBlock
  | InfoBlock
  | InfoImageBlock
  | InfoVideoBlock
  | VideoBlock;

// Project data is an array of content blocks
export type ProjectData = ProjectContentBlock[];
