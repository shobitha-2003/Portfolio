import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";


export const HEROIN_CONTENT = 'I am a Bachelor of Engineering student in Information Science and Engineering at Mangalore Institute of Technology & Engineering, with a CGPA of 9.08 (2021–2025). My academic focus includes Programming, Operating Systems, DBMS, Object-Oriented Programming, and Data Structures. I am skilled in Java, HTML, CSS, JavaScript, MySQL, MongoDB, and tools like VS Code, NetBeans, GitHub, and Canva.In October–November 2023, I interned at Pulsecode Technology as a UX Intern, conducting user research, interviews, and surveys. I created wireframes, prototypes, and high-fidelity designs using Figma, gaining hands-on experience in user-centered design processes.';

export const EXPERIENCES = [
  {
    year: "2021-2025",
    instituename: "MANGALORE INSTITUTE OF TECHNOLOGY & ENGINEERING",
    description: `Pursuing Bachelor of Engineering in Information Science and Engineering with CGPA 9.08 ,MITE,Moodbodri,Mangalore,Karnataka.`,
  },
  {
    year: "2019-2021",
    instituename: "NARENDRA PU COLLEGE THENKILA PUTTUR",
    description: `Completed my pre-university education from Narendra PU COLLEGE with 95 percentage.`,
  },
  {
    year: "2018",
    instituename: "PRAGATHI ENGLISH MEDIUM SCHOOL KANIYOOR PUTTUR",
    description: `Completed SSLC from PEMS Kaniyoor, with 91 percentage`,
  },
  {
    year: "OCTOBER(2023) - NOVEMBER(2023)",
    company: "PULSECODE TECHNOLOGY PRIVATE LTD | USER ANALYSIS AND UX RESEARCH",
    description: `Conducting user research, interviews, and surveys to gather insights and informdesigndecisions,assisting in the creation of wire-frames, prototypes, and high-fidelity designs using tools like figma.`,
   
  },
];

export const PROJECTS = [
  {
    title: "Online Job Portal",
    image: project1,
    description:
      "A full-stack job portal with separate dashboards for users and admins. Users can register, search jobs by location, and apply, while admins manage listings, applications, and profiles. It features secure JWT authentication, bcrypt password hashing, and an optimized database for seamless user and job management.",
    technologies: ["Expess.js", "React.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/shobitha-2003",
  },
  {
    title: "Bank Management System",
    image: project2,
    description:
      "It functions as normal ATM. This ATM Simulator System has functionalities like OpeningBankingAccount, Deposit,Withdrawal,Pin change etc",
    technologies: ["Java", "MySQL"],
    githubLink: "https://github.com/shobitha-2003/Bank-Management-System/tree/master/Different%20pages",
  },
];

export const CONTACT = {
  address: [
  "Naliyaru House",
    "Murulya Post & Village",
    "Sullia Taluk, Dakshina Kannada",
  ],
  email: "shobithanaliyar@gmail.com",
};
