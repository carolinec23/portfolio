import React from 'react';
import '../sass/layout/_home.scss';
import Header from './Header';
import Arrow from './Arrow';
import DisplayLottie from './DisplayLottie';
import Banner from '../assets/home/blob.png';
import Animation from '../assets/lottie/computer1.json';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div className="home__container">
            <Header />
            <div className="home__wrapper">
                <div className="home__title">
                    <h1>Aspiring</h1>
                    <h1 id="neutral">Front End</h1>
                    <h1>Web Developer</h1>
                </div>
                <div className="home__image">
                    <img src={Banner} alt="Banner" />
                    <DisplayLottie animation={Animation} loop={false}/>
                </div>
            </div>    
            <Link to="info" smooth={true}><Arrow /></Link>
        </div>
    )
}

export default Home;