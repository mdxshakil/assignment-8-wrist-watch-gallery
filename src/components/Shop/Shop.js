import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watches from '../Watches/Watches';
import './Shop.css';

const Shop = () => {
    const [ watches , setWatches ] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('watches.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])

    const addToCart = (watch) =>{
        const newCart = [...cart, watch];
        setCart(newCart);
    }
    const resetSelection = () =>{
        const resetCart = [];
        setCart(resetCart);
    }
    
    return (
        <div className='shop-container'>
            <div className='watches-container'>
                {
                    watches.map(watch => <Watches
                    key={watch._id}
                    watch={watch}
                    addToCart={addToCart}></Watches>)
                }
            </div>
            <div>
                <div className='cart'>
                <h2>Selected Items</h2>
                    {
                       cart.map(selectedItem => <Cart
                        key={selectedItem._id}
                        selectedItem={selectedItem}></Cart>)
                    } 
                    <div className='buttons-container'>
                        <button>Choose One</button>
                        <button onClick={()=>resetSelection()}>Reset Selection</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};



export default Shop;