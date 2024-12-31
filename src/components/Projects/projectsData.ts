import {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  chat1,
  chat2,
  chat3,
  chat4,
  dh1,
  dh2,
  dh3,
  dh4,
  dh5,
  ecomm1,
  ecomm2,
  ecomm3,
  ecomm4,
  ecomm5,
  int1,
  int10,
  int2,
  int3,

  int6,
  int8,
} from "../../assets/projects";
import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Real-Time Chat Application",
    description:
      "Developed a seamless real-time chat application using the MERN stack to enable instant communication between users. The application leverages MongoDB for scalable data storage, Express.js and Node.js for a robust backend, and React for a dynamic, user-friendly frontend interface. Integrated WebSockets via Socket.io to support real-time messaging",
    images: [
      {
        url: chat1,
        caption: "chat1",
      },
      {
        url: chat2,
        caption: "chat2",
      },
      {
        url: chat3,
        caption: "chat3",
      },
      {
        url: chat4,
        caption: "chat4",
      },
    ],
    github: "https://github.com/AdamChafiki/MERN-Chat",
    live: "https://mern-chat-app-1.herokuapp.com/",
    technologies: [
      "React",
      "Redux",
      "TailwindCSS",
      "Express.js",
      "MongoDB",
      "Socket.io",
    ],
  },
  {
    title: "Blog App",
    description:
      "A blog platform built with the MERN stack, allowing users to add, update, delete posts, like, and comment. Includes an admin dashboard for managing users and content",
    images: [
      {
        url: blog1,
        caption: "blog1",
      },
      {
        url: blog2,
        caption: "blog2",
      },
      {
        url: blog3,
        caption: "blog3",
      },
      {
        url: blog4,
        caption: "blog4",
      },
      {
        url: blog5,
        caption: "blog5",
      },
    ],
    github: "https://github.com/AdamChafiki/MERN-Blog",
    live: "https://mern-blog-app-1.herokuapp.com/",
    technologies: ["React", "TailwindCSS", "Express.js", "MongoDb", "Redux"],
  },
  {
    title: "React-Firebase-Store",
    description: "React Store App with Dummy JSON API 🛒 && firebase",
    images: [
      {
        url: ecomm1,
        caption: "ecomm1",
      },
      {
        url: ecomm2,
        caption: "ecomm2",
      },
      {
        url: ecomm3,
        caption: "ecomm3",
      },
      {
        url: ecomm4,
        caption: "ecomm4",
      },
      {
        url: ecomm5,
        caption: "ecomm5",
      },
    ],
    github: "https://github.com/AdamChafiki/React-Firebase-Store",
    live: "https://react-firebase-store.vercel.app/",
    technologies: ["React", "Firebase", "Redux", "TailwindCSS"],
  },
  {
    title: "Dhenbio",
    description:
      "Dhen Bio is a Laravel-based platform for buying organic products",
    images: [
      {
        url: dh1,
        caption: "dh1",
      },
      {
        url: dh2,
        caption: "dh2",
      },
      {
        url: dh3,
        caption: "dh3",
      },
      {
        url: dh4,
        caption: "dh4",
      },
      {
        url: dh5,
        caption: "dh5",
      },
    ],
    github: "https://github.com/AdamChafiki/DhenBio",
    live: "",
    technologies: ["Laravel", "TailwindCSS", "MySQL", "JS"],
  },
  {
    title: "Internship",
    description:
      "Internship Seeker is a platform built with Angular and Spring Boot that connects students with internship opportunities. Students can browse and apply for internships, while employers can post job listings and manage applicants. The project aims to simplify the internship search process for students and enhance recruitment for companies",
    images: [
      {
        url: int1,
        caption: "int1",
      },
      {
        url: int2,
        caption: "int2",
      },
      {
        url: int3,
        caption: "int3",
      },
      {
        url: int6,
        caption: "int6",
      },
      {
        url: int8,
        caption: "int8",
      },
      {
        url: int10,
        caption: "int10",
      },
    ],
    github: "https://github.com/AdamChafiki/INTERNSHIP-FRONT",
    live: "",
    technologies: [
      "Angular",
      "TailwindCSS",
      "SpringBoot",
      "SpringSecurity",
      "MySql",
    ],
  },
];
