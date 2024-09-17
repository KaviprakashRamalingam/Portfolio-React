import Horse from "../assets/projects/Horse.jpg";
import Renault from "../assets/projects/Renault.jpg";
import TT from "../assets/projects/TT.png";
import Portfolio from "../assets/projects/Portfolio.png";
import CDK from "../assets/projects/CDK.jpg"

export const HERO_CONTENT = `I’m a full-stack developer with 5 years of experience, focused on building scalable web applications. I specialize in React, Next.js, and backend technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My aim is to create smart, effective solutions that not only support business growth but also enhance the user experience.`;

export const ABOUT_TEXT = `I’m a full stack developer with a strong background in delivering scalable and reliable web solutions. With over 5 years of experience, I’ve mastered a range of technologies, from React and Next.js on the front end to Node.js, MySQL, PostgreSQL, and MongoDB on the back end. My expertise spans creating modular, reusable components, designing complex microservices architectures, and optimizing systems for performance. I’m driven by a love for solving intricate problems and a commitment to building seamless user experiences. Outside of development, I’m always exploring new technologies and refining my skills, constantly looking for ways to make a meaningful impact through code.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2023",
    role: "Senior Full Stack Developer",
    company: "Renault Nissan",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with OracleDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "Oracle", "Spring Boot", "ELK"],
  },
  {
    year: "2018 - 2021",
    role: "Associate Consultant ",
    company: "Capgemini",
    description: `Developed and optimized SAP modules (SD, FICO) using ABAP-based reports, BADIs, and BAPIs, integrated cross-platform data exchange via FTP, and led the migration of Oracle DB to SAP HANA, improving data integrity and reducing manual errors.`,
    technologies: ["HTML", "CSS", "mySQL", "ETL", "SAP HANA", "ABAP"],
  },
];

export const PROJECTS = [
  {
    title: "HORSE and AMPERE",
    image: Horse,
    description:
      "HORSE and AMPERE are key web applications for Renault Nissan's EV strategy, designed to enhance performance and user experience. Built with React, Redux, and Spring Boot microservices, these platforms optimize real-time data access, reduce frontend latency, and ensure fast data retrieval, supporting Renault's electric vehicle operations.",
    technologies: ["React", "Redux", "Spring Boot", "Redis", "Elasticsearch", "SQL"],
  },
  {
    title: "ALCOR",
    image: Renault,
    description:
      "ALCOR is a security-focused initiative for Renault Nissan, designed to strengthen SAP system compliance and data integration. By implementing SAP UI masking with SAPUI5 and integrating Cloud Identity Services, the project achieved 99% security compliance. Additionally, REST APIs were developed using Apigee with OAuth2, allowing for real-time data synchronization between Azure and SAP, boosting operational efficiency by 25%.",
    technologies: ["SAPUI5", "SAP Cloud", "CRM", "Apigee", "OAuth2", "Azure", "SAP"],
  },
  {
    title: "Tasty trails - Food sharing app",
    image: TT,
    description:
      "A fully functional purpose-driven web application designed to foster community collaboration and reduce food waste. Tasty Trails provides a platform for users to share information about surplus food, creating a better environment where everyone can contribute to minimizing food wastage.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Career Development Kit",
    image: CDK,
    description:
      "Career Development Kit (CDK) is a Spring Boot application designed to facilitate user login, job posting, and job applications with various features aimed at enhancing career development.",
    technologies: ["Spring Boot", "Hibernate ORM", "Spring Security", "Google OAuth2", "jQuery"],
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Boston, MA 02445 ",
  phoneNo: "+1 857 423 9278 ",
  email: "kavir4118@gmail.com",
};
