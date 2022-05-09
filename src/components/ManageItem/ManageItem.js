import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CarCard from '../CarCard/CarCard';

import './ManageItem.css';



const ManageItem = () => {

    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('https://evening-crag-89379.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])


    const deleteItem = (id) => {
        const url = `https://evening-crag-89379.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const restItem = item.filter(item => item._id !== id)
                    setItem(restItem);
                }
            })

    }


    return (
        <div>
            <h1 className='manageCarTitle'>Manage All Products</h1>


            <div className='manageCarContainer'>
                {
                    item.map(item => <CarCard key={item._id} item={item} deleteItem={deleteItem} />)

                }
            </div>
            <div className='addCarButtonBox'>
                <Link className='addCarButton' to='/additem'>Add a new product</Link>
            </div>
        </div>

    );
};

export default ManageItem;