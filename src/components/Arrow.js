import React from 'react';
import '../sass/components/_arrow.scss';
import { IoIosArrowDown } from 'react-icons/io';

const Arrow = () => {
    return (
        <div className="arrow__container" >
            <i id="neutral"><IoIosArrowDown /></i>
        </div>
    );
}

export default Arrow;