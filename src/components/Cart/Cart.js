import React from 'react';
import "./Cart.css";
const Cart = (props) => {
    const {selectedItem} = props;
    const { picture,name } = selectedItem;
    return (
        <div className='cart-container'>
            <div className='image-container'>
                <img src={picture} alt="" />
            </div>
            <div className='name-container'>
                <h3>{name}</h3>
            </div>
        </div>
    );
};
export default Cart;