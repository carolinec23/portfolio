import React from 'react';
import '../sass/layout/_education.scss';
import SchoolOne from '../assets/education/school_1.svg';
import SchoolTwo from '../assets/education/school_2.svg';
import LineOne from '../assets/education/line_1.svg';
import LineTwo from '../assets/education/line_2.svg';

const Education = () => {
    return (
        <div className="education__container">
            <div className="education__border border__top">
            </div>
            <div className="education__wrapper">
                <h2>Education</h2>
                <div className="education__content">
                    <div className="school">
                        <img src={SchoolOne} alt="temp" />
                        <div className="school__text">
                            <p>Faculty of Information Technology, CTU in Prague</p>
                            <h4>2019 - </h4>
                        </div>   
                    </div>
                    <div className="line">
                        <img id="line" src={LineOne} alt="line" />
                    </div>
                    <div className="school">
                        <img src={SchoolTwo} alt="temp" />
                        <div className="school__text">
                            <p>Gymnasium in Stropkov, Slovakia</p>
                            <h4>2015 - 2019</h4>
                        </div>   
                    </div>
                    <div className="line">
                        <img id="line" src={LineTwo} alt="line" />
                    </div>
                </div>
            </div>  
            <div className="education__border border__bottom">
            </div>
        </div>
    )
}

export default Education;
