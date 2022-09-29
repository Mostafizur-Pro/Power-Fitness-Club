import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    const{handdleAddToList,cart}=props
    const{about,age,name,picture,time}=cart
    return (
        <div className='cart'>
            <div>
                <img className='cart-image' src={picture} alt="" />
            </div>
            <div className='cart-info'>
                <h2> {name}</h2>
                <p> {about.slice(0,100)}</p>
                <p>Age: <strong>{age}</strong> </p>
                <p>Time spent: <strong>{time} min</strong></p>
              
            </div>
            <button onClick={()=>handdleAddToList(cart)} className='btn-add'>
                <h3>Add To List</h3>
                </button>
            
        </div>
    );
};

export default Cart;