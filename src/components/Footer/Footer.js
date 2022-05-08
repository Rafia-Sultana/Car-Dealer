import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { ImAddressBook } from 'react-icons/im';
import { IoCall } from 'react-icons/io';
import { HiMail } from 'react-icons/hi';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='first-column'>
                <p>We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers.</p>
                <p className='style'><ImAddressBook className='color'></ImAddressBook>  220E Front St. Burlington NC 27215</p>
                {/* <p className='style'><IoCall className='color'></IoCall>(007) 123 456 7890</p> */}

                <p className='style'><HiMail className='color2' ></HiMail>
                    support@example.com</p>



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
                <button className='btn btn-danger'>SUBSCRIBE</button>
            </div>
            <p className='copyright'><small>©Copyright 2022 Car Dealer</small></p>
        </div>
    );
};

export default Footer;