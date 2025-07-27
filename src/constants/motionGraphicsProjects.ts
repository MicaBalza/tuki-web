import { ProjectData } from "@/types/projects";

const caixaBank: ProjectData = [
  {
    type: "cover",
    name: "CaixaBank",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Realización de video corporativo, edición de video y elementos gráficos.",
  },
  {
    type: "video",
    videoUrl: "https://www.youtube.com/embed/JdKDHn6cIsA?si=AXt3rihawjigBipQ",
  },
];

const imagin: ProjectData = [
  {
    type: "cover",
    name: "Imagin",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Realización de video corporativo, edición de video y elementos gráficos.",
  },
  {
    type: "video",
    videoUrl: "https://youtube.com/embed/fLtYRseUnG0?si=YYIhQbjFxTn4XQkA",
  },
];

const olistic: ProjectData = [
  {
    type: "cover",
    name: "Olistic",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Realización de video corporativo, edición de video y elementos gráficos.",
  },
  {
    type: "video",
    videoUrl: "https://www.youtube.com/embed/GhMgKtQY1_c?si=j4JSCMlXXpitBfV-",
  },
];

const tajMahal: ProjectData = [
  {
    type: "cover",
    name: "Taj-Mahal",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Realización de video corporativo, edición de video y elementos gráficos.",
  },
  {
    type: "video",
    videoUrl: "https://www.youtube.com/embed/19p6ci3TToc?si=OPMqh5i_AchAwcRF",
  },
];

export const MOTION_GRAPHICS_PROJECTS: Record<string, ProjectData> = {
  tajMahal,
  imagin,
  olistic,
  caixaBank,
};
