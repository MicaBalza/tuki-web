const privateMedicalPresentation = [
  {
    type: "cover",
    name: "Presentación privada médica",
    country: "USA",
    description: "PROJECT SCOPE vía MyeVideo",
    goal: "Medallia buscaba generar un video explicativo 2D para mostrar las capacidades de su empresa en el cuidado de la tercera edad. Por privacidad sólo podemos enseñar el proceso detrás del vídeo.",
    creativity:
      "Conceptualización Creativa.<br>Storytelling.<br>Dirección de arte",
    production:
      "Definición del estilo gráfico.<br>Creación de styleframes.<br>Storyboard.<br>Ilustración",
    projectManagement:
      "Llevar el proyecto desde sus inicios hasta su finalización.<br>Comunicación con el cliente y los artistas involucrados.",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoWide",
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

const primal = [
  {
    type: "cover",
    name: "Primal",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Conceptualización de personajes y mundos para una novela gráfica.",
    creativity:
      "Conceptualización Creativa.<br>Storytelling.<br>Dirección de arte",
    production:
      "Definición del estilo gráfico.<br>Creación de styleframes.<br>Storyboard.<br>Ilustración.<br>Animación",
    projectManagement:
      "Llevar el proyecto desde sus inicios hasta su finalización.",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneWide",
  },
  {
    type: "info-img",
    h2: "Creamos una serie de bocetos iniciales para los personajes.",
    isSquare: true,
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoTall",
  },
  {
    type: "info",
    h2: "Así como hojas de expresiones para los personajes.",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoTall",
  },
  {
    type: "flex",
    quantity: 4,
    flex: "fourTall",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoTall",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneWide",
  },
];

const rodentsAndDinosaurs = [
  {
    type: "cover",
    name: "Roedores y dinosaurios",
    country: "España",
    description: "PROJECT SCOPE",
    goal: "Conceptualización de personajes fantásticos.",
    creativity: "Conceptualización Creativa.<br>Dirección de arte",
    production: "Definición del estilo gráfico.<br>Ilustración",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoWide",
  },
  {
    type: "info",
    h2: "Creamos los personajes a partir de ejercicios de manchas",
  },
  {
    type: "flex",
    quantity: 2,
    flex: "twoWide",
  },
  {
    type: "info-video",
    h2: "Este es el proceso del primer personaje en blanco y negro",
  },
  {
    type: "info-video",
    h2: "Este es el proceso del segundo personaje en blanco y negro",
    isReverse: true,
  },
  {
    type: "info-video",
    h2: "Este es el proceso de color del primer personaje",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneWide",
  },
];

const fantasyCharacters = [
  {
    type: "cover",
    name: "Personajes de fantasía",
    country: "España",
    description: "OBJETIVO",
    goal: "Creación de una serie de personajes fantásticos.",
    creativity: "Conceptualización Creativa.<br>Dirección de arte",
    production: "Definición del estilo gráfico.<br>Ilustración",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneWide",
  },
  {
    type: "info-video",
    h2: "Creamos el turnaround del personaje",
  },
  {
    type: "flex",
    quantity: 3,
    flex: "threeWide",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneWide",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneWide",
  },
  {
    type: "flex",
    quantity: 1,
    flex: "oneWide",
  },
];

export const ILLUSTRATION_PROJECTS: Record<string, any> = {
  privateMedicalPresentation,
  primal,
  rodentsAndDinosaurs,
  fantasyCharacters,
};
