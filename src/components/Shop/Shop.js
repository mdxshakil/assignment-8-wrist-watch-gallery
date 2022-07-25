import React, { useEffect, useState } from 'react';
import Watches from '../Watches/Watches';
import './Shop.css';

const Shop = () => {
    const [ watches , setWatches ] = useState([]);
    useEffect(()=>{
        fetch('watches.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])
    
    return (
        <div className='shop-container'>
            <div className='watches-container'>
                {
                    watches.map(watch => <Watches
                    key={watch._id}
                    watch={watch}></Watches>)
                }
            </div>
            <div className='cart-container'>
                <h3>this is cart</h3>
            </div>
        </div>
    );
};



export default Shop;