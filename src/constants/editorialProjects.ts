import { ProjectData } from "@/types/projects";

const primal: ProjectData = [
  {
    type: "cover",
    name: "Primal",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Creación de imágenes iniciales para una novela gráfica.",
    creativity: "Conceptualización Creativa.<br>Dirección de arte",
    production: "Definición del estilo gráfico.<br>Ilustración",
    position: "70% center",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoTall",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoTall",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneTall",
  },
];

const ajuntamenteDeBarcelona: ProjectData = [
  {
    type: "cover",
    name: "Ajuntament de Barcelona",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Propuesta de campaña publicitaria para el Ayuntamiento de Barcelona",
    creativity: "Conceptualización Creativa.<br>Dirección de arte",
    production:
      "Definición del estilo gráfico.<br>Ilustración.<br>Diseño Editorial",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneSquare",
  },
  {
    type: "info-img",
    h2: "Realizamos procesos de bocetos",
    position: "top",
  },
  {
    type: "info-img",
    h2: "Pasamos los bocetos a color y los adaptamos a diferentes formatos",
    isReverse: true,
    position: "top",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoWide",
  },
  {
    type: "flex",
    quantity: 4,
    flex: "fourWide",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoWide",
  },
];

const birdwatchers: ProjectData = [
  {
    type: "cover",
    name: "Birdwatchers",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Creación de un libro para colorear para adultos.",
    creativity: "Conceptualización Creativa<br>Dirección de arte",
    production:
      "Definición del estilo gráfico<br>Ilustración<br>Diseño Editorial",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeTall",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeTall",
  },
  {
    type: "flex",
    quantity: 4,
    flex: "fourWide",
  },
];

const tinta: ProjectData = [
  {
    type: "cover",
    name: "Tinta",
    country: "Argentina",
    description: "PROJECT SCOPE",
    goal: "Realización de diseño editorial de una revista enfocada al arte y la cultura, dirigida al público argentino.",
    creativity: "Conceptualización Creativa<br>Dirección de arte",
    production: "Definición del estilo gráfico<br>Diseño Editorial",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
];

const timo: ProjectData = [
  {
    type: "cover",
    name: "Timo",
    country: "Alemania",
    description: "PROJECT SCOPE",
    goal: "Realización de ilustraciones para una publicación editorial para el público infantil que buscaba explicarle el COVID a los niños.",
    creativity: "Conceptualización Creativa<br>Dirección de arte",
    production:
      "Definición del estilo gráfico<br>Ilustración<br>Diseño Editorial",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "info-video",
    h2: "El paso del blanco y negro al color",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
];

const autismoAvila: ProjectData = [
  {
    type: "cover",
    name: "Autismo Avila",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Creación de una serie de ilustraciones en blanco y negro para una publicación de la compañía Autismo Ávila, basado en fotografías compartidas por el cliente.",
    creativity: "Conceptualización Creativa<br>Dirección de arte",
    production: "Definición del estilo gráfico<br>Ilustración",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoWide",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneWide",
  },
];

const universidadFederalDeGoias: ProjectData = [
  {
    type: "cover",
    name: "Universidad Federal de Goiás",
    country: "Brasil",
    description: "PROJECT SCOPE - Fake News",
    goal: "Diseño editorial de un libro educativo de Filosofía dirigido a adolescentes.",
    creativity: "Conceptualización Creativa<br>Dirección de arte",
    production: "Definición del estilo gráfico<br>Diseño Editorial",
  },
  {
    type: "flex-video",
    quantity: 1,
    flex: "oneWide",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneTall",
  },
];

export const EDITORIAL_PROJECTS: Record<string, ProjectData> = {
  primal,
  ajuntamenteDeBarcelona,
  birdwatchers,
  tinta,
  timo,
  autismoAvila,
  universidadFederalDeGoias,
};
