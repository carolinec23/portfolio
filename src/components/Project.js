import React from 'react';
import '../sass/components/_project.scss';
import { FaFileCode, FaLaptop } from 'react-icons/fa';

const Project = ( props ) => {
    return (
        <div className="project__container">
            <div className="project__content" style={{ backgroundColor: props.color }}>
                <img src={props.image} alt="temp" />
                <h4>{props.title}</h4>
                <p className="text-xs">{props.description}</p>    
                <div className="project__links">
                    <a href={props.codeLink} id="code_link" target="_blank" rel="noreferrer"><FaFileCode /></a>
                    <a href={props.demoLink} id="demo_link" target="_blank" rel="noreferrer"><FaLaptop /></a>
                    <p id="demo_text">See the live demo</p>
                    <p id="code_text">See the source code</p>
                </div>   
            </div>
        </div>
    )
}

export default Project


//FIX INLINE BACKGROUND IMAGE STYLING
// style={{ backgroundImage: `url(../assets/${props.background})` }}