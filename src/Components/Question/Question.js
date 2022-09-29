import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'> 
        <h1 className='blog'>Blog</h1>
            <div className='question-tag'>
              <h2 className='question-title'>How does react work?</h2>
              
               <p><strong>ReactJS divides the UI into isolated reusable pieces of code known as components.</strong> React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
               <p>

                   It’s possible to have as many components as necessary without cluttering your code.

               </p>
            </div>

            <div className='question-tag'>
                <h2 className='question-title'>What is the difference between props and state? </h2>
               
                <p><strong>State : </strong>
The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
<p> <strong>Props : </strong>
    Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
</p>
            </div>
            <div className='question-tag'>
            <h2 className='question-title'>What does UseEffect do other than load data?</h2>
            
            <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.</p>
            <p>Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too)</p>
            <p>All this power comes with a tradeoff: useEffect can be confusing until you understand how it works.</p>
            <p>In this post, we’re going to look at lots of useEffect examples so that you understand the mental model and can use it effectively in your own code.</p>
            </div>
        </div>
    );
};

export default Question;