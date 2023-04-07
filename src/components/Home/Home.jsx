import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    // const handleAddToCart = (_id) => {
    //     const newItem = tshirts.find(tshirt => tshirt._id == _id);
    //     const exist = cart.find(ts => ts._id === _id);
    //     if(exist){
    //          
    //     }
    //      else{
    //          setCart([...cart, newItem])
    //         }
    //     
    //     console.log(cart)
    // };

    const handleAddToCart = (tshirt) => {

        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
            toast("You have already added this!")
        }
        else{

            setCart([...cart, tshirt]);
        }
    }

    const handleRemoveFromCart = (_id) => {
            const remainingItems = cart.filter(item => item._id !== _id);
            setCart(remainingItems);
    }

    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                {/* <h1>This is cart section: {cart.length}</h1> */}
               <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
               ></Cart>
            </div>
        </div>
    );
};

export default Home;