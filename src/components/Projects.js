import React from 'react';
import "../sass/_projects.scss";
import Project from './Project';
import Note from '../assets/handwriting.svg';
import { ProjectData } from '../data/ProjectData';

const Projects = () => {
    const projects = ProjectData;

    const renderProjects = () => {
        return projects.map(item => {
            return (
                <div className="projects__itemWrapper">
                    <Project 
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        demoLink={item.demoLink}
                        codeLink={item.codeLink}
                        color={item.backgroundColor}
                        backgroundImg={item.backgroundImage}
                        key={item.title}
                    />
                </div>
            );
        });
    }

    return (
        <div id="projects" className="projects__container">
            <div className="projects__title">
                <div className="projects__titleText">
                    <h2>Selected</h2>
                    <h2>Work</h2>
                </div> 
            </div>
            <div className="projects__wrapper">
                {renderProjects()}
            </div>
            <div className="projects__github">
                <a href="https://github.com/carolinec23" target="_blank" rel="noreferrer">
                    <img src={Note} alt="github" />
                </a>
            </div>
        </div>
    )
}

export default Projects;
