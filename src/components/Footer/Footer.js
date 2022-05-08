import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='first-column'>
                <p>We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers.</p>
                <p><small>copyright warning!!</small></p>

            </div>
            <div className='middle-column'>

                <h6>Useful Links</h6>

                <p> <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos> Change Oil and Filter</p>
                <p><MdOutlineArrowForwardIos></MdOutlineArrowForwardIos> Brake Pads Replacement</p>
                <p><MdOutlineArrowForwardIos></MdOutlineArrowForwardIos> Timing Belt Replacement</p>
                <p><MdOutlineArrowForwardIos></MdOutlineArrowForwardIos> Pre-purchase Car Inspection</p>
                <p> <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos> Starter Replacement</p>


            </div>
            <div>
                <h6>SUBSCRIBE OUR NEWSLETTER</h6>
                <p>Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p>
            </div>
        </div>
    );
};

export default Footer;