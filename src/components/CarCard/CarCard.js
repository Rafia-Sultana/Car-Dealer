import React from 'react';
import './CarCard.css'

const CarCard = ({ item, deleteItem }) => {
    const { name, img, quantity, description, sold, supplierEmail, supplierName, price, _id } = item



    return (
        <div className='CarCardContainer'>
            <div className='image'>
                <img src={img} alt="" />
                <div>
                    <h5>{name}</h5>
                    <p className='price'>$ {price}</p>
                </div>
            </div>
            <div className='CarInfo'>
                <small>`${description}`</small>
                <div className='stockInfo'>
                    <p className='blueBack'>Stock : {quantity}</p>
                    <p className='blueBack'>Suplier : {supplierName}</p>
                </div>
                <button className='buttonDelete' onClick={() => deleteItem(_id)} >Delete</button>
            </div>
        </div>
    );
};

export default CarCard;