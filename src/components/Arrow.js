import React from 'react';
import '../sass/components/_arrow.scss';
import { IoIosArrowDown } from 'react-icons/io';

const Arrow = () => {
    return (
        <div className="arrow__container" >
            <a href="" id="neutral"><i><IoIosArrowDown /></i></a>
        </div>
    );
}

export default Arrow;