import React from 'react';
import "./Watches.css";

const Watches = (props) => {
    const {_id, name, price, picture} = props.watch;
    return (
        <div className='watch-container'>
            <div className='watch-image'>
                <img src={picture} alt="" />
            </div>
            <div className='watch-info'>
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
            </div>
            <button className='add-to-cart-btn'>
                <h3>Add to Cart</h3>
            </button>
        </div>
    );
};

export default Watches;