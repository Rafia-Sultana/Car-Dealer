import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryCard.css';

const InventoryCard = ({ data }) => {
    const { name, img, quantity, description, sold, supplierEmail, supplierName, price, _id } = data;
    return (

        < div >
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><span className='fw-bold'>Name</span>:{name}</h5>
                        <p className="card-text">{description}</p>

                        <p className="card-text"><span className='fw-bold'>Price</span>:{price}</p>
                        <p className="card-text"><span className='fw-bold'>Quantity</span>:{quantity}</p>
                        {/*       <p className="card-text">supplierEmail:{supplierEmail}</p> */}
                        <p className="card-text"><span className='fw-bold'>supplierName</span>:{supplierName}</p>
                        {/*  <p className="card-text">sold:{sold}</p> */}
                        <Link to={'/inventory/' + _id} className='buttonUpdate'>Update</Link>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default InventoryCard;