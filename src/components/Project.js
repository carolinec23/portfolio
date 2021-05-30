import React from 'react';
import '../sass/_project.scss';
import { FaFileCode, FaLaptop } from 'react-icons/fa';

const Project = ( props ) => {
    return (
        <div className="project__container">
            <div className="project__content" style={{ backgroundColor: props.color }}>
                <img src={props.image} alt="temp" />
                <h4>{props.title}</h4>
                <p className="text-xs">{props.description}</p>    
                <div className="project__links">
                    <a href={props.demoLink}><FaLaptop /></a>
                    <a href={props.codeLink}><FaFileCode /></a>
                </div>   
            </div>
        </div>
    )
}

export default Project


//FIX INLINE BACKGROUND IMAGE STYLING
// style={{ backgroundImage: `url(../assets/${props.background})` }}