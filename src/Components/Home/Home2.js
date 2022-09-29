import React, { useEffect, useState } from 'react';
import photo from '../../image.png';

import Cart from '../Cart/Cart'
import Information from '../Information/Information';
import fakedb from '../../../public/fakedb.json'



const Home = () => {
    const [carts, setCart] = useState([])
    const [newCart, setNewCart] = useState([])
    useEffect(()=>{
        fetch(fakedb)

        .then(res=>res.json())
        .then(data=>setCart(data))
    },[])

    const handdleAddToList=(cart)=>{
        const addNewCart=[...newCart, cart]
        setNewCart(addNewCart)
    } 

    return (
        <div className='home'>
            
            <div className="cart-container">
               <div className='header'>
               <img src={photo} alt="" />
                <h1 className='name'>Fitness And Strength</h1>
               </div>
                <h2 className='select'>Select today's Exercise :</h2>
                <div className='cart-list'>
                {
                    carts.map(cart=> <Cart
                    cart={cart} 
                        KEY={cart._id}
                        handdleAddToList={handdleAddToList}
                        ></Cart>
                        )  
                }
                </div>
                
                
            </div>
            <div className="information-container">
               <Information
               newCarts={newCart}
               >

               </Information>
            </div>
        </div>
    );
};

export default Home;