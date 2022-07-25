import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import RandomItem from '../RandomItem/RandomItem';
import Watches from '../Watches/Watches';
import './Shop.css';

const Shop = () => {
    const [ watches , setWatches ] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomItem, setRandomItem] = useState([]);

    useEffect(()=>{
        fetch('watches.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])

    const addToCart = (watch) =>{
            const newCart = [...cart, watch];
            setCart(newCart);
    }
    const chooseRandom = (cart) =>{
        if (cart.length <= 0) {
            alert('Cart is empty!!! Choose atleast one item.');
        }
        else{
            const randomIndex = Math.floor(Math.random() * cart.length);
            const selectedRandomItem = cart[randomIndex];
            setRandomItem(selectedRandomItem);
        }
    }
    const resetSelection = (cart) =>{
        if (cart.length <= 0) {
            alert('There is nothing to reset from an empty cart!');
        }
        else{
            const resetCart = [];
            setCart(resetCart);
            setRandomItem(resetCart);
        }
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
                        <button onClick={()=>chooseRandom(cart)}>Choose One</button>
                        <button onClick={()=>resetSelection(cart)}>Reset Selection</button>
                    </div>
                    <div>
                        <RandomItem 
                        randomItem={randomItem}></RandomItem>
                    </div>
                </div>
                
            </div>
        </div>
    );
};



export default Shop;