const primal = [
  {
    type: "cover",
    name: "Primal",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Creación de imágenes iniciales para una novela gráfica.",
    creativity: "Conceptualización Creativa.<br>Dirección de arte",
    production: "Definición del estilo gráfico.<br>Ilustración",
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
];

const ajuntamenteDeBarcelona = [
  {
    type: "cover",
    name: "Ajuntamente de Barcelona",
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
    flex: "oneWide",
  },
  {
    type: "info-img",
    h2: "Realizamos procesos de bocetos",
  },
  {
    type: "image",
    description:
      "<h2>Pasamos los bocetos a color y los adaptamos a diferentes formatos</h2>",
    link: "https://drive.google.com/file/d/1x2CRTURVYulL2D6Ah_OVyOdFFCsWNbfO/view?usp=drive_link",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "wide",
    link: "https://drive.google.com/file/d/1wxz7F8imxiUiMj7Q3ge6ELAtcIXHAjdZ/view?usp=drive_link",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoWide",
    links: [
      "https://drive.google.com/drive/folders/12SxMUTCqKNrs19YAMu9EUzQ1nDyW9GPs?usp=drive_link",
      "https://drive.google.com/drive/folders/1EQtUwh4hWMAf3scmNBCU9Y_a08yqfOQS?usp=drive_link",
    ],
  },
  {
    type: "flex",
    quantity: 4,
    flex: "fourWide",
    link: "https://drive.google.com/drive/folders/1dtaDsQUY8xlQ3zEbSdF_qxwDZIsemc8w?usp=drive_link",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
    link: "https://drive.google.com/drive/folders/1Bntkr6MpMuAwmbdMUXTXA804a9tYDAFE?usp=drive_link",
  },
];

const birdwatchers = [
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

const tinta = [
  {
    type: "cover",
    name: "Tinta",
    country: "Argentina",
    description: "PROJECT SCOPE",
    goal: "Realización de diseño editorial de una revista enfocada al arte y la cultura, dirigida al público argentino.",
    creativity: "Conceptualización Creativa<br>Dirección de arte",
    production: "Definición del estilo gráfico<br>Diseño Editorial",
    link: "https://drive.google.com/file/d/1yZzHMykf0SUP39S9RLc2G1IBWbVd3Fq7/view?usp=drive_link",
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

export const EDITORIAL_PROJECTS: Record<string, any> = {
  primal,
  ajuntamenteDeBarcelona,
  birdwatchers,
  tinta,
};
