import React from 'react';
import '../sass/layout/_info.scss';
import LeafTop from '../assets/info/leaf_1.svg';
import LeafBottom from '../assets/info/leaf_2.svg';

const Info = ( {data} ) => {
    return (
        <div id="info" className="info__container">
            <div className="info__imageWrapper">
                <img className="info__imageTwo" src={data.portraitImage} alt="portrait" />
            </div>
            <div className="info__content">
                <div className="info__contentTop">
                    <img src={LeafTop} alt="leaf" />
                </div>
                <div className="info__contentMiddle">
                    <h2>{data.header}</h2>
                    <p className="text-xs">{data.textOne}</p>
                    <p className="text-xs">{data.textTwo}</p>
                    <p className="text-xs">{data.textThree}</p>
                </div>
                <div className="info__contentBottom">
                    <img src={LeafBottom} alt="leaf" />
                    <img id="img__signature" src={data.signatureImage} alt="signature" />
                </div>
            </div>
        </div>
    );
}

export default Info;
