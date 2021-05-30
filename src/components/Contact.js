import React from 'react';
import '../sass/_contact.scss';
import Bubbles from '../assets/bubbles.svg';
import DisplayLottie from './DisplayLottie';
import Animation from '../assets/lottie/dog.json';
import { FaGithub, FaLinkedin } from 'react-icons/fa';     

const Contact = () => {
    return (
        <div id="contact" className="contact__container">
            <div className="contact__title">
                <h2>Get in touch.</h2>
            </div>
            <div className="contact__content">
                <div className="contact__image">
                    <img src={Bubbles} alt="bubbles" />
                    <DisplayLottie animation={Animation} />
                </div>
                <div className="contact__info">
                    <h3>carolinecicha@gmail.com</h3>
                    <div className="contact__icons">
                        <a href="https://github.com/carolinec23"><i id="text-lg"><FaGithub /></i></a>
                        <a href="https://www.linkedin.com/in/caroline-cich%C3%A1-8484b220b/"><i id="text-lg"><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__footer">
                <p id="text-xs">© 2021 Caroline Cichá</p>
            </div>
        </div>
    )
}

export default Contact;
