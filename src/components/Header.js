import React from 'react';
import '../sass/_header.scss';
import { Link } from 'react-scroll';
//import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    return (
        <header>
            {/*<div className="menu__button" id="neutral">
                <i><GiHamburgerMenu /></i>
            </div>*/}
            <div className="menu__options">
                <ul>
                    <li><Link to="info" smooth={true}>About</Link></li>
                    <li><Link to="skills" smooth={true}>Skills</Link></li>
                    <li><Link to="projects" smooth={true}>Projects</Link></li>
                </ul>    
                <Link to="contact" smooth={true} className="menu__action" href="">Contact Me</Link>
            </div>   
        </header>
    )
}

export default Header;
