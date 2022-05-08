import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import InventoryCard from '../InventoryCard/InventoryCard';
import aboutCar from '../../images/about-car-img.png';
import { AiFillCar } from 'react-icons/ai';
import { AiFillWechat } from 'react-icons/ai';
import { SiWebmoney } from 'react-icons/si';
import { FaKey } from 'react-icons/fa';

import './Home.css'

const Home = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])
    return (
        <div>
            <Banner></Banner>

            <div className="inventoryContainer">
                <h1 className='title'>products</h1>
                <div className="inventoryItems">
                    {
                        item.slice(0, 6).map(data => <InventoryCard
                            key={data._id}
                            data={data}


                        ></InventoryCard>)
                    }
                </div>
                <div className="second-section">
                    <div className="left-part">
                        <h4 className='fw-bold mb-2'>About Us</h4>
                        <p className='fst-italic'>Everything you need to build an amazing dealership website.

                            Car Dealer is the most enticing, creative, modern and multipurpose auto dealer Premium WordPress Theme. Suitable for any car dealer websites, business or corporate websites. The Theme has been Created especially for automotive dealers, car resellers, car service stations, mechanic workshop and auto motor retailers.</p>
                    </div>
                    <div className="">
                        <img src={aboutCar} alt="" />
                    </div>
                </div>

                <div className="third-section">
                    <div className="right-part">
                        <AiFillCar size={35}></AiFillCar>
                        <br />
                        <h4 className='mt-3'>ALL BRANDS</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem acantium doloremque laudantium.</p>
                    </div>
                    <div className="right-part">
                        <AiFillWechat size={40} ></AiFillWechat>
                        <h4 className='mt-3'>FREE SUPPORT</h4>
                        <p>We also offer 24/7 Customer Service so you can contact us anytime you error sit voluptatem acantium</p>
                    </div>
                    <div className="right-part">
                        <FaKey size={30}></FaKey>
                        <h4 className='mt-3'>DEALERSHIP</h4>
                        <p>The best car dealership WordPress Theme website ut perspiciatis unde omnis iste natus sit voluptatem</p>
                    </div>
                    <div className="right-part">
                        <SiWebmoney size={30}></SiWebmoney>
                        <h4 className='mt-3'>AFFORDABLE</h4>
                        <p>We offer best price Perspiciatis sed ut unde omnis iste natus error sit voluptatem acantiu munde omnis.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;