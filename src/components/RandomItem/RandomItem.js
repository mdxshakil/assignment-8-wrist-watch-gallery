import React from 'react';
import './RandomItem.css'

const RandomItem = (props) => {
    const {randomItem} = props;
    const {name,picture} = randomItem;
    return (
        <div>
            <h2>Your lucky selection is:</h2>
            <div className='random-cart-container'>
            <div className='random-image-container'>
                <img src={picture} alt="" />
            </div>
            <div className='random-name-container'>
                <h3>{name}</h3>
            </div>
        </div>
        </div>
    );
};

export default RandomItem;