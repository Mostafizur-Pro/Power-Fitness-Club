import React, { useEffect, useState } from 'react';
import pic from '../images/profile.jpg'
import './Information.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Information = (props) => {
    const notify = () => toast("Congratulations! You have Completed the task.");
    
    const [breakTime,setBreakTime]=useState('0')
    const clickHandler = event => {
    const newTime=event.target.innerText
    setBreakTime(newTime)
     localStorage.setItem('break-time', newTime)
     }
     
     useEffect(()=>{
        const localstorageData = localStorage.getItem('break-time')
        setBreakTime(localstorageData)
        },[])

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
                    <h2>Mostafizur Rahman</h2>
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
             <div className='btn-area'>
                <button onClick={clickHandler} ><h3>10s</h3> </button>
                <button onClick={clickHandler} ><h3>20s</h3></button>
                <button onClick={clickHandler} ><h3>30s</h3></button>
                <button onClick={clickHandler} ><h3>40s</h3></button>
                <button onClick={clickHandler} ><h3>50s</h3></button>
            </div>

        </div>
             <div className='exercise'>
            <h1>Exercise Details</h1>
            <div  className='exercise-area1'>
            <h4><strong>Exercise Time : </strong> <span className='gray'>{totalTime} <small>Minutes</small></span></h4>
            </div>
            <div className='exercise-area2'>
                <h4><strong>Break Time : </strong>  <small className='gray'>{breakTime}</small></h4>
            </div>
            
        </div>
           


            <div className='btn-completed'>
                <button onClick={notify} className='btn-activity'>
                    <h2>Activity Completed</h2>
                </button>
                <ToastContainer/>
        </div>

        </div>
            
    
    );
};

export default Information;