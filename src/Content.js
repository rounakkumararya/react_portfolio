// import images
import Hero_person from "./assets/images/Hero/hero1.png";
import Hero_bg from "../public/heroBg.png";

import figma from "./assets/images/Skills/figma.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import adobexd from "./assets/images/Skills/adobexd.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import css from "./assets/images/Skills/css.png";
import express from "./assets/images/Skills/express.png";
import firebase from "./assets/images/Skills/firebase.png";
import git from "./assets/images/Skills/git.png";
import html from "./assets/images/Skills/html.png";
import java from "./assets/images/Skills/java.png";
import javascript from "./assets/images/Skills/javascript.png";
import jquery from "./assets/images/Skills/jquery.png";
import mongo from "./assets/images/Skills/mongo.png";
import nextjs from "./assets/images/Skills/nextjs.png";
import postgres from "./assets/images/Skills/postgres.png";
import postman from "./assets/images/Skills/postman.png";
import redux from "./assets/images/Skills/redux.png";
import tailwind from "./assets/images/Skills/tailwind.png";

import logo from "../src/assets/images/logo/logo.svg";
import services_logo1 from "./assets/images/Services/Group 42.svg";
import services_logo2 from "./assets/images/Services/Group 42.svg";
import services_logo3 from "./assets/images/Services/Group 42.svg";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import facebook_ico from "./assets/images/Socials/facebook.png";
import twitter_ico from "./assets/images/Socials/twitter.png";
import instagram_ico from "./assets/images/Socials/instagram.png";
import linkedin_ico from "./assets/images/Socials/linkedin.png";
import dribbble_ico from "./assets/images/Socials/dribbble.png";
import behance_ico from "./assets/images/Socials/behance.png";

// import Hireme_person from "./assets/images/Hireme/person.png";
import about_img from "./assets/images/About/person1.svg";
import edu_img from "./assets/images/Education/Education.svg";
import Achievements_img from "./assets/images/Achievements/Achievement.svg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { FaToolbox, FaGithub } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillBehanceSquare,
  AiFillDribbbleCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  logoImg: {
    img: logo,
  },
  nav: [
    {
      name: "Home",
      link: "#home",
      icon: TbSmartHome,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: FaToolbox,
    },
    {
      name: "About",
      link: "#about",
      icon: BiUser,
    },
    {
      name: "Services",
      link: "#services",
      icon: RiServiceLine,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      name: "Contact me",
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  socials: [
    {
      link: "https://www.linkedin.com/in/rounak-kumar-arya/",
      icon: AiFillLinkedin,
      color: "#0072b1",
    },
    {
      link: "www.instagram.com",
      icon: AiFillInstagram,
      color: "red",
    },

    {
      link: "www.twitter.com",
      icon: AiFillTwitterCircle,
      color: " #00acee",
    },
    {
      link: "www.github.com",
      icon: FaGithub,
      color: "#00000",
    },
    {
      link: "www.behance.com",
      icon: AiFillBehanceSquare,
      color: "#053eff",
    },
    {
      link: "www.dribble.com",
      icon: AiFillDribbbleCircle,
      color: "#ea4c89",
    },
    {
      link: "www.facebook.com",
      icon: BsFacebook,
      color: "#1877F2",
    },
  ],

  hero: {
    title: ["UI/UX Designer", "MERN Developer"],
    firstName: "ROUNAK",
    LastName: "ARYA",
    btnText: ["Resume", "Socials"],
    image: Hero_person,
    background: Hero_bg,
    hero_content: [
      {
        count: "+5",
        text: "",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  About: {
    title: "About Me",
    subtitle: "Who am I ?",
    image: about_img,
    para: [
      "Rounak Kumar Arya, a creative and passionate Full-Stack Web Developer & UI/UX designer.",
      "I delved into the world of full-stack development. I find immense joy in creating and building digital solutions from the ground up. However, my passion doesn't stop there. I have a deep admiration for the art of UX designing, and it has become somewhat of a crush for me. The way user experience can be enhanced through thoughtful design choices fascinates me, and I constantly strive to improve my skills in this area. So, you could say I'm a physics graduate who has fallen head over heels for the captivating world of UX designing.",

      "In addition to my  pursuits, I am also an aspiring UX designer. I am constantly seeking opportunities to enhance my skills and knowledge in this field. I have taken various online courses and worked on different projects to learn about the principles of UX design, user research, and prototyping. I am particularly interested in understanding user behavior and creating designs that not only meet their needs but also provide a delightful experience.",
    ],
    btnText: "Hire Me",
  },
  Education: {
    title: "Education",
    subtitle: "My Degrees",
    image: edu_img,
    details: [
      {
        year: "2021-2024",
        degree: "B.S. in Physics",
        institute: "Vinoba Bhave University, Hazaribagh",
      },
      {
        year: "2017-2019",
        degree: "High school",
        institute: "D.A.V. Public School, Hazaribagh",
      },
    ],
  },
  Achievements: {
    title: "Achievements",
    subtitle: "Online courses and Trainings",
    image: Achievements_img,
    details: [
      {
        year: "Aug 2023 - Nov 2023",
        degree: "Google UX design Certification",
        institute: "Coursera",
      },
      {
        year: "July 2023 - Dec 2023",
        degree: "Meta Front-End Certification",
        institute: "Coursera",
      },
    ],
  },
  Skills: {
    title: "Skills",
    subtitle: "Tools And Technologies",
    front_end: [
      {
        name: "Javascript",
        logo: javascript,
      },
      {
        name: "React js",

        logo: reactjs,
      },
      {
        name: "HTML",

        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Bootstrap",

        logo: bootstrap,
      },
      {
        name: "Tailwind",

        logo: tailwind,
      },
      {
        name: "Redux",

        logo: redux,
      },
      {
        name: "Jquery",

        logo: jquery,
      },
    ],
    back_end: [
      {
        name: "Next js",

        logo: nextjs,
      },
      {
        name: "Node js",

        logo: nodejs,
      },
      {
        name: "ExpressJs",

        logo: express,
      },
      {
        name: "Firebase",

        logo: firebase,
      },
      {
        name: "MongoDb",
        logo: mongo,
      },
      {
        name: "Postgresql",

        logo: postgres,
      },
    ],
    others: [
      {
        name: "Java",

        logo: java,
      },
      {
        name: "python",

        logo: python,
      },
      {
        name: "Photoshop",

        logo: ps,
      },
      {
        name: "Figma",

        logo: figma,
      },
      {
        name: "Adobe xd",

        logo: adobexd,
      },
      {
        name: "Git",

        logo: git,
      },
    ],
    icon: MdArrowForward,
  },

  Services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "With regards to my experience in web development, I have gained substantial knowledge and expertise in various aspects of this field. Throughout my journey, I have acquired a deep understanding of programming languages such as HTML, CSS, and JavaScript, which are essential for creating visually appealing and interactive websites. Additionally, I have honed my skills in utilizing frameworks and libraries like Bootstrap and jQuery to enhance the functionality and responsiveness of web applications. Moreover, I have hands-on experience in designing and implementing databases using SQL, ensuring efficient data management and retrieval. Furthermore, I have worked on numerous projects that involved collaborating with cross-functional teams, enabling me to effectively communicate and coordinate with designers, content creators, and other stakeholders. Overall, my extensive experience in web development has equipped me with the necessary skills and knowledge to deliver high-quality and user-friendly websites and applications.",
        logo: services_logo1,
      },
      {
        title: "UI / UX DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Gym Website",
        category: "MERN",
        image: project1,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolorum deleniti magnam placeat, quisquam quaerat laborum inventore aliquam veniam cumque vitae sequi itaque sint? Eaque praesentium ipsam maiores perspiciatis molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam quasi, aliquam dolorum, eos rerum obcaecati beatae consequatur itaque illum hic rem voluptatibus provident ea, eius voluptate aliquid veritatis placeat?",
        link: "https://www.github.com/rounakkumararya",
      },
      {
        title: "Social Media web",
        category: "MERN",
        image: project2,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolorum deleniti magnam placeat, quisquam quaerat laborum inventore aliquam veniam cumque vitae sequi itaque sint? Eaque praesentium ipsam maiores perspiciatis molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam quasi, aliquam dolorum, eos rerum obcaecati beatae consequatur itaque illum hic rem voluptatibus provident ea, eius voluptate aliquid veritatis placeat?",
        link: "https://www.github.com/rounakkumararya",
      },
      {
        title: "Creative Website",
        category: "MERN",
        image: project3,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolorum deleniti magnam placeat, quisquam quaerat laborum inventore aliquam veniam cumque vitae sequi itaque sint? Eaque praesentium ipsam maiores perspiciatis molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam quasi, aliquam dolorum, eos rerum obcaecati beatae consequatur itaque illum hic rem voluptatibus provident ea, eius voluptate aliquid veritatis placeat?",
        link: "https://www.github.com/rounakkumararya",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    // image1: Hireme_person,
    // image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "rounakkumar040@gmail.com",
        icon: GrMail,
        link: "mailto:rounakkumar040@gmail.com",
      },
      {
        text: "+91 7733017260",
        icon: MdCall,
        link: "https://wa.me/7733017260",
      },
      {
        text: "Rounakkumar040",
        icon: BsInstagram,
        link: "https://www.instagram.com/rounak-kumar-040/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
