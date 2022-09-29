import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'> 
            <div>
              <h1>Question One: How does react work?</h1>
              <h3>Answer:</h3>
               <p>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.Users can create a representation of a DOM node by declaring the Element function in React.The syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.</p>
            </div>

            <div>
                <h1>Question two: What is the difference between props and state? </h1>
                <h3>Answer:</h3>
                <p>In a props the Data is passed from one component to another.And in a state the Data is passed within the component only.Props are  Immutable but The state is Mutable.Props can be used with state and functional components but State can be used only with the state components or class component</p>
            </div>
            <div>
            <h1>Question three: What does UseEffect do other than load data?</h1>
            <h3>Answer:</h3>
            <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.useEffect code blocks are clear indicators of asynchronous tasks. Of course, it is possible to write asynchronous code without useEffect, but it is not the “React way,” and it increases both complexity and the likelihood of introducing errors.</p>
            </div>
        </div>
    );
};

export default Question;