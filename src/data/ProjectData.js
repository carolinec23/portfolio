import ProjectOneImg from "../assets/projects/project_1.png";
import ProjectTwoImg from "../assets/projects/project_2.png";
import ProjectThreeImg from "../assets/projects/project_3.png";
import BackgroundOne from "../assets/projects/project_background0.svg";
import BackgroundTwo from "../assets/projects/project_background1.svg";
import BackgroundThree from "../assets/projects/project_background2.svg";

export const ProjectData = [
    {
        title: "E-Commerce Site",
        description: "A beginner's ongoing attempt at an eshop, using Redux for some state management and Firebase for authentication and database.",
        image: ProjectOneImg,
        demoLink: "https://eshop-sample.web.app/",
        codeLink: "https://github.com/carolinec23/eshop",
        backgroundColor: "#e2c068",
        backgroundImage: BackgroundOne,
    },
    {
        title: "Responsive Catering Site",
        description: "Simple catering company web using the mobile-first approach and only HTML & CSS.",
        image: ProjectTwoImg,
        demoLink: "https://catering-responsive.netlify.app",
        codeLink: "https://github.com/carolinec23/catering-responsive",
        backgroundColor: "#d36464",
        backgroundImage: BackgroundTwo,
    },
    {
        title: "Dog Walking Site",
        description: "Basic React site using styled components and React Router. Content is under construction - but it does have some nice photos of my dog.",
        image: ProjectThreeImg,
        demoLink: "https://dog-walking.netlify.app/",
        codeLink: "https://github.com/carolinec23/mydog",
        backgroundColor: "#B7C8A1",
        backgroundImage: BackgroundThree,
    },
]