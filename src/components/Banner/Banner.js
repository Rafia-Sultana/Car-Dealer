import React from 'react';
import car from '../../images/car.png'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner'>
            <div className="textArea">
                <h1>Grab Your <span className='span'>Dream Car!</span></h1>
                <p className='text'>When you drive your dream car, it’s all about the behind-the-wheel feel</p>
                <br /><button className='button'>Read More</button>
            </div>
            <div className="imageBox">
                <img src={car} alt="" />
            </div>

        </div>
    );
};

export default Banner;