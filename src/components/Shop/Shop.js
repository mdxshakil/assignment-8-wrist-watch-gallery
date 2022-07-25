import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [watches,setWatches] = useState([]);
    useEffect(()=>{
        fetch('watches.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])
    
    const style = {
        width: '100px'
    }
    return (
        <div className='shop-container'>
            <div className='watches-container'>
                {
                    watches.map(watch => <Watch
                    watch={watch}
                    key={watch._id}></Watch>)
                }
            </div>
            <div className='cart-container'>
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

const Watch = (props) => {
    return(
        <div className='watch-container'>
            <img src={props.watch.picture} alt="" />
            <h3>{props.watch.name}</h3>
            <h4>Price: ${props.watch.price}</h4>
        </div>
    );
}

export default Shop;