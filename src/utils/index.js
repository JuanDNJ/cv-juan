import { technologicalSkills } from "./technologicalSkills";
const languages = [
  {
    id: 1,
    language: "en",
    name: "inglish",
    img: "./images/png/en.png",
  },
  {
    id: 2,
    language: "es",
    name: "spanish",
    img: "./images/png/es.png",
  },
  {
    id: 3,
    language: "ca",
    name: "catalonia",
    img: "./images/png/cat.png",
  },
];

const socialNetWork = [
  {
    id: 1,
    name: "LinkEdin",
    component: "linkedin",
    url: "https://www.linkedin.com/in/juan-antonio-valdivia-camacho-09598a279/",
  },
  {
    id: 2,
    name: "GitHub",
    component: "github",
    url: "https://github.com/JuanDNJ",
  },
];

const firstCharAtToUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export {
  languages,
  socialNetWork,
  technologicalSkills,
  firstCharAtToUpperCase,
};
