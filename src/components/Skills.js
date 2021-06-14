import React from 'react';
import "../sass/layout/_skills.scss";
import DisplayLottie from './DisplayLottie';
import Animation from '../assets/lottie/computer2.json';
import Circles from '../assets/skills/circles.svg';
import CirclePink from '../assets/skills/circle_pink.svg';
import EnglishIcon from '../assets/skills/united_kingdom.svg';
import SlovakIcon from '../assets/skills/slovakia.svg';
import GermanIcon from '../assets/skills/germany.svg';
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaFigma, FaFire, FaPython, FaGitAlt } from 'react-icons/fa';


const Skills = () => {
    return (
        <div id="skills" className="skills__container">
            <div className="skills__title">
                <h2>Skills &</h2>
                <h2 id="neutral">Technologies</h2>
                <img src={Circles} alt="circles" />
            </div>
            <div className="skills__circlePink">
                <img src={CirclePink} alt="circle" />
                <DisplayLottie animation={Animation} loop={true}/>
            </div>
            <div className="skills__list">
                <ul>
                    <li>
                        <div className="skills__listType">
                            <i><FaHtml5 /></i>
                            <p>HTML5</p>
                        </div>
                        <p id="lighter">(intermediate)</p>
                    </li>
                    <li>
                        <div className="skills__listType">
                            <i><FaCss3Alt /></i>
                            <p>CSS3</p>
                        </div>
                        <p id="lighter">(intermediate)</p>
                    </li>
                    <li>
                        <div className="skills__listType">
                            <i><FaSass /></i>
                            <p>Sass</p>
                        </div>
                        <p id="lighter">(beginner)</p>
                    </li>
                    <li>
                        <div className="skills__listType">
                            <i><FaJs /></i>
                            <p>Javascript</p>
                        </div>
                        <p id="lighter">(intermediate)</p>
                    </li>
                    <li>
                        <div className="skills__listType">
                            <i><FaReact /></i>
                            <p>React JS</p>
                        </div>
                        <p id="lighter">(intermediate)</p>
                    </li>
                    <li>
                        <div className="skills__listType">
                            <i><FaPython /></i>
                            <p>Python</p>
                        </div>
                        <p id="lighter">(beginner)</p>
                    </li>
                    <li>
                        <div className="skills__listType">
                            <i><FaGitAlt /></i>
                            <p>Git</p>
                        </div>
                        <p id="lighter">(beginner)</p>
                    </li>
                    <li>
                        <div className="skills__listType">
                            <i><FaFire/></i>
                            <p>Firebase</p>
                        </div>
                        <p id="lighter">(beginner)</p>
                    </li>
                    <li>
                        <div className="skills__listType">
                            <i><FaFigma/></i>
                            <p>Figma</p>
                        </div>
                        <p id="lighter">(beginner)</p>
                    </li>
                </ul>
            </div>
            <div className="skills__languages">
                <div className="skills__languagesWrapper">
                    <div className="language">
                        <img src={SlovakIcon} alt="Icon by Freepik" />
                        <p className="text-xs">Native Speaker</p>
                    </div>
                    <div className="language">
                        <img src={EnglishIcon} alt="Icon by Freepik" />
                        <p className="text-xs">Native Speaker</p>
                    </div>
                    <div className="language">
                        <img src={GermanIcon} alt="Icon by Freepik" />
                        <p className="text-xs">Beginner</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
