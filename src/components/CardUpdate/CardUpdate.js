import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CardUpdate.css'

const CardUpdate = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])
    const [changedQuantity, setChangedQuantity] = useState('')
    useEffect(() => {
        fetch(`https://evening-crag-89379.herokuapp.com/myitem/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id, changedQuantity])
    console.log(id);

    let amount = item?.quantity * 1

    const deliverHandler = () => {
        amount = amount - 1;

        fetch(`https://evening-crag-89379.herokuapp.com/item/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ amount }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setChangedQuantity(json));
    }


    const submitHandler = (e) => {
        e.preventDefault()
        let restack = e.target.restock.value;
        restack = parseInt(restack)
        amount = amount + restack;


        fetch(`https://evening-crag-89379.herokuapp.com/item/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ amount }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setChangedQuantity(json));


        e.target.reset();
    }
    return (
        <div className='itemUpdateBox'>
            <div className='updatePageContainer'>
                <img src={item.img} alt="" />
                <div className='productInfoBox'>
                    <p className='name'>{item.name}</p>
                    <div className='suplierInfoBox'>
                        <p className='price'>${item.price}</p>
                        <p className='stock'> <span >Stock:</span> {item.quantity}</p>
                        <p className='suplierName'><span >Suplier:</span> {item.supplierName}</p>
                        <p className='supplierEmail'><span >Suplier-Email:</span> {item.supplierEmail}</p>
                        <p className='des'>{item.description}</p>
                        <div className='btnBox'>
                            <button className='deliverBtn' onClick={deliverHandler}>Deliver</button>
                            <form className='updateBox' onSubmit={submitHandler}>
                                <input type="number" name='restock' />
                                <button type="submit" className='restockBtn'>Restock</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CardUpdate;