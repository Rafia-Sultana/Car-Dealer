import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CarCard from '../CarCard/CarCard';
import './MyItem.css'

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([])


    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/myitem/?email=${email}`)
            .then(res => res.json())
            .then(data => setMyItem(data))
    }, [myItem, user]);
    const deleteItem = (id) => {
        const url = ` http://localhost:5000/item/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const restItem = myItem.filter(item => item._id != id)
                    setMyItem(restItem);
                }
            })

    }
    return (
        <div className='myItemContainer'>
            {
                myItem.length < 1 ? <h1>You dont added any product yet</h1> :
                    myItem.map(item => <CarCard key={item._id} item={item} deleteItem={deleteItem} />)
            }
        </div>
    );
};

export default MyItem;