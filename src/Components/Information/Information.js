import React from 'react';
import pic from '../images/profile.jpg'
import './Information.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Information = (props) => {
    const notify = () => toast("Congratulations! You have Completed the task.");
    
    const {newCarts}=props
    let totalTime=0
    for(const newCart of newCarts){
        console.log(newCart)
        totalTime= totalTime + newCart.time

    }
    return (
        <div className='info'>
             <div className='persona-owner'>
                <img className='persona-pic' src={pic} alt="" />
                <div>
                    <h2>Mostafizur Dahman</h2>
                    <p>Dhaka, Bangladesh</p>
                </div>
           </div>
           <div className='owner-info'>
                <div>
                    <h1>75 <small className='gray'>kg</small></h1>
                    <p className='gray'> Weight</p>
                </div>
                <div>
                        <h1>25 <small className='gray'>yrs</small></h1>
                        <p className='gray'>Age</p>
                </div>
                <div>
                    <h1>6.5 </h1>
                    <p className='gray'>Height </p>
                </div>
            </div>
            <div className='exercise'>
            <h1>Add A Break</h1>

        </div>
             <div className='exercise'>
            <h1>Exercise Details</h1>
            <div  className='exercise-area1'>
            <p>Exercise Time:{totalTime} <small>Minutes</small></p>
            </div>
            <div className='exercise-area2'>
                <p>Break Time:  <small>Minutes</small></p>
            </div>
            
        </div>
           


            <div className='btn-completed'>
                <button onClick={notify} className='btn-activity'>
                    <p>Activity Completed</p>
                </button>
                <ToastContainer/>
        </div>

        </div>
            
    
    );
};

export default Information;