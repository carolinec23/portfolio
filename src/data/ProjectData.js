import ProjectImgVet from "../assets/projects/project_vet.png"
import ProjectImgShop from "../assets/projects/project_shop.png";
//import ProjectTwoImg from "../assets/projects/project_catering.png";
import ProjectImgDog from "../assets/projects/project_dog.png";
import BackgroundOne from "../assets/projects/project_background0.svg";
import BackgroundTwo from "../assets/projects/project_background1.svg";
import BackgroundThree from "../assets/projects/project_background2.svg";

export const ProjectData = [
    {
        title: "Veterinary Site",
        description: "I found a design template online and tried to recreate it, using React & Sass to make a responsive site for a veterinary clinic.",
        image: ProjectImgVet,
        demoLink: "https://vet-site.netlify.app/",
        codeLink: "https://github.com/carolinec23/veterinary-site",
        backgroundColor: "#e2c068",
        backgroundImage: BackgroundTwo,
    },
    {
        title: "E-Commerce Site",
        description: "A beginner's ongoing attempt at an eshop, using Redux for some state management and Firebase for authentication and database.",
        image: ProjectImgShop,
        demoLink: "https://eshop-sample.web.app/",
        codeLink: "https://github.com/carolinec23/eshop",
        backgroundColor: "#d36464",
        backgroundImage: BackgroundOne,
    },
    /*{
        title: "Responsive Catering Site",
        description: "Simple catering company web using the mobile-first approach and only HTML & CSS.",
        image: ProjectTwoImg,
        demoLink: "https://catering-responsive.netlify.app",
        codeLink: "https://github.com/carolinec23/catering-responsive",
        backgroundColor: "#d36464",
        backgroundImage: BackgroundTwo,
    },*/
    {
        title: "Dog Walking Site",
        description: "Basic React site using styled components and React Router. Content is under construction - but it does have some nice photos of my dog.",
        image: ProjectImgDog,
        demoLink: "https://dog-walking.netlify.app/",
        codeLink: "https://github.com/carolinec23/mydog",
        backgroundColor: "#B7C8A1",
        backgroundImage: BackgroundThree,
    },
]