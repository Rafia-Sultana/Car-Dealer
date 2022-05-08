import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import InventoryCard from '../InventoryCard/InventoryCard';
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
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;