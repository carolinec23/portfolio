import React from 'react';
import '../sass/_info.scss';
//import PortraitOne from '../assets/portrait.png';
import PortraitTwo from '../assets/portrait_2.png';
//import PortraitThree from '../assets/portrait_3.png';
import Signature from '../assets/signature_2.png';
import LeafTop from '../assets/leaf_1.svg';
import LeafBottom from '../assets/leaf_2.svg';

const Info = () => {
    return (
        <div id="info" className="info__container">
            <div className="info__imageWrapper">
                {/*<img className="info__imageOne" src={PortraitOne} alt="portrait" />*/}
                <img className="info__imageTwo" src={PortraitTwo} alt="portrait" />
                {/*<img src={Portrait} alt="portrait" /> */}
            </div>
            <div className="info__content">
                <div className="info__contentTop">
                    <img src={LeafTop} alt="leaf" />
                </div>
                <div className="info__contentMiddle">
                    <h2>Hi there!</h2>
                    <p className="text-xs">I’m on a journey to becoming a full-stack web developer. Currently I’m focusing more on front-end, but I hope to eventually get into back-end too.</p>
                    <p className="text-xs">So far I’ve been gaining all my web dev knowledge by self-teaching. That’s been nice, however, I’d love to be able to glimpse into the world of commercial development and gain some practical experience as well.</p>
                    <p className="text-xs">Filler text blablabla Lexi is cute as pie. Lexincatko doggo trolololol hehe Lexi is a cute doggo. True.</p>
                </div>
                <div className="info__contentBottom">
                    <img src={LeafBottom} alt="leaf" />
                    <img id="img__signature" src={Signature} alt="signature" />
                </div>
            </div>
        </div>
    );
}

export default Info;
