import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css'
const AddItem = () => {
    const [user] = useAuthState(auth);
    const submitButtonHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const img = e.target.image.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;
        const sold = 0;
        const supplierEmail = user?.email;
        const supplierName = user?.displayName;

        const data = { name, price, img, quantity, description, sold, supplierEmail, supplierName }

        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => alert('successfully data added'))

        e.target.reset();
    }




    return (
        <div className='dataContainer'>
            <h1 className='addItemTitle'>Add a new product</h1>
            <div className='dataForm'>
                <form onSubmit={submitButtonHandler}>
                    <input type="text" placeholder='image url' name='image' required />
                    <br />
                    <input type="text" placeholder='name' name='name' required />
                    <br />
                    <input type="number" placeholder='price' name='price' required />
                    <br />
                    <input type="number" placeholder='quantity' name='quantity' required />
                    <br />
                    <input type="text" placeholder='description' name='description' required />
                    <br />
                    <button className='addCarButton' type="submit">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;