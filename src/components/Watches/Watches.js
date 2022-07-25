import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Watches.css";

const Watches = (props) => {
    const { addToCart, watch } = props;
    const { name, price, picture} = watch;
    return (
        <div className='watch-container'>
            <div className='watch-image'>
                <img src={picture} alt="" />
            </div>
            <div className='watch-info'>
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
            </div>
            <button className='add-to-cart-btn' onClick={()=>addToCart(watch)}>
                <h3>Add to Cart</h3>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Watches;