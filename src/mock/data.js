import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: `Buford Eeds | Software Developer`, // e.g: `Name | Developer`
  lang: `en`, // e.g: en, es, fr, jp
  description: `I'm Buford, a software developer from Austin, TX`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hello! My name is`,
  name: `Buford`,
  subtitle: `I am a software developer.`,
  cta: `About Me`,
};

// ABOUT DATA
export const aboutData = {
  img: `square-wyoming.JPG`,
  paragraphOne: `Diligent and assertive Marine Corps veteran with a knack for solving problems and web development. After attending Flatiron School's rigorous 4-month Software Engineering bootcamp, I gained fundamental experience in Javascript, React, Ruby on Rails and I couldn't be happier!`,
  paragraphTwo: `Armed with a array of several web applications and a love for software development, I am now seeking to extend my passion and these newfound skills into real-time applications.`,
  paragraphThree: `Feel free to checkout my resume and projects to see how far I've come.`,
  resume: `https://docs.google.com/document/d/e/2PACX-1vSWtGPla-o-gRuC2fe8DWhcitr9iNnUshHUatKyeT2R0MLjxJwTSiCFOqKjHwyPuZNkCPY70JFMHqP5/pub`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: `tww-demo-img.png`,
    title: `Tommy Want Wingy`,
    info: `A React website for a food truck based in Austin, Texas.`,
    info2: `I used React & Ruby on Rails for the frontend & backend to create this website.`,
    url: `https://www.youtube.com/watch?v=8PzzboFMheg&feature=youtu.be`,
    repo: `https://github.com/bufordeeds8/tww-client`, // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: `illuminight-demo-img.png`,
    title: `Illuminight`,
    info: `A single page application (SPA) where the objective is to light up all 25 tiles.`,
    info2: `I used React & Ruby on Rails for the frontend & backend to create this website.`,
    url: `https://www.youtube.com/watch?v=cLiHqqfKgcQ&feature=youtu.be`,
    repo: `https://github.com/bufordeeds8/illuminight-client`, // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: `flatiron-pingpong-demo-img.png`,
    title: `Flatiron Ping Pong`,
    info: `A web application built to keep score of ping pong matches and track users’ overall record and record versus every other user they have played.`,
    info2: `Built with vanilla javascript for the frontend and a Ruby on Rails API`,
    url: `https://www.youtube.com/watch?v=EfEF_KRPhZk&feature=youtu.be`,
    repo: `https://github.com/bufordeeds8/flatiron-ping-pong`, // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Let's create something together!`,
  btn: `E-mail`,
  email: `bufordeeds8@gmail.com`,
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: `twitter`,
      url: `https://twitter.com/bufordeeds`,
    },
    {
      id: uuidv1(),
      name: `codepen`,
      url: `https://codepen.io/bufordeeds/`,
    },
    {
      id: uuidv1(),
      name: `linkedin`,
      url: `https://www.linkedin.com/in/bufordeeds/`,
    },
    {
      id: uuidv1(),
      name: `github`,
      url: `https://github.com/bufordeeds`,
    },
    {
      id: uuidv1(),
      name: `medium`,
      url: `https://medium.com/@bufordeeds `,
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
