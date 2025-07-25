// Original code generated below by Vite when setting up React App / Not using it so commented it out. For future, just can delete it. I wanted to see what Vite generated, so I kept the code.
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import { Linter } from "eslint";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// From the setup of the lesson "Building Your First React App"
// src/App.jsx

// -------------------------------------------------------------------------------

// APP.JSX CODE & PLETHORA OF NOTES BELOW FOR UNDERSTANDING/LEARNING JSX & LOGIC
// ALSO, PLEASE NOTE: FURTHER BELOW I HAVE ONLY CODE OF THIS LESSON ALL IN ONE PLACE AT LINE 138
// THIS BELOW HOLDS THE MAJORITY OF OUR APP LOGIC IN APP.JSX
// Most of what we are building will be an app or components loaded inside our app.
// This below from lines 43-51 below are the app component.

const App = () => {

  // Copying this object out of this lecture from video "JavaScript in JSX"
  // Adding todo data onto our page // Until we use this todo, this will look like an error.
  const todo = { text: 'A brand new task', done: true };

  // add the todos array below the existing todo object.
  const todos = [
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Master React', done: false},
  ];

  // Can also do this instead of what is below and create a variable todoList and then below in the code, add what is here with the ul:
  // const todoList = todos.map((todo, index) =>
  //   <li key={index}>{todo.text}</li>
  // );
  // Addtl that I can do below if I create a todoList variable above here:
  // <ul>{todoList}</ul>

  return (
    // This is jsx below (even though it looks like html. We are returning html into the app to be rendered on the page.)
    // Printing inside the p tag some todo text.
    // Curly braces inside of html indicate, "Hey, I'm going to write some JS in here."
    // Can write any JS expression we would like in between the curly braces.
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>

      {/* <br /> */}
      <hr /> 
      {/* <br /> */}
      <h2>Conditional Rendering</h2>
      <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text }</p>
      {/* This above is showing that the todo is done with a ternary operator. Can't use if else statements in JSX. */}

      <h2>Looping with JSX</h2>
      <ul>
        {/* “Inside of the <ul>, we map over the todos array to build a collection of <li> elements that have the text for a todo inside of them”. */}
        {todos.map((todo, index) =>
        // ! Don't fully understand key & how it works in the html part of an array.
        // ! Example of index in js and then putting it in the key? But lesson said for future will use most likely an Id for databases.
        // ! Located in lesson 'first-react-app' in LOOPING WITH JSX ELEMENTS 7:35 SECONDS INTO VIDEO.
        /*
        The importance of keys
          - React uses keys to help identify which items have been added, removed, or changed in an array. Keys must be given to the elements inside an array - if you forget, React will loudly remind you in the console!
          - Ideally, each key will be a string that uniquely identifies a list item - typically, this would be an ID generated by a database.
          - As we are using example data without IDs, we will use the index of each element (provided to us as the second parameter in the map() callback function) to simulate a unique key for each list item. 
          - Index is not ideal; for example, index order may change or contents of array may change.
          */
          <li key={index}>{todo.text}</li>
        )}
      </ul>

      <h2>Looping and Conditional Rendering</h2>
      <ul>
        {todos.map((todo, index) => 
          <li key={index}>
            {todo.done ? `Task Completed - ${todo.text}` : todo.text}
          </li>
        )}
      </ul>
    </>
  );
};

export default App;

// ! Also should I do this: Download the React DevTools for a better development experience: https://react.dev/link/react-devtools

// -------------------------------------------------------------------------------

// FOR ABOVE FUNCTION THIS IS WHAT IT SAYS & THIS IS WHAT IT IS ALL TOGETHER:
// “Inside of the <ul>, we map over the todos array to build a collection of 
// <li> elements that have the text for a todo inside of them”.

      // <h2>Looping with JSX</h2>
      // <ul>
      //   {todos.map((todo, index) =>
      //     <li key={index}>{todo.text}</li>
      //   )}
      // </ul>


// -------------------------------------------------------------------------------

// BELOW IS THE FULL CODE FROM THIS LESSON ALL TOGETHER WITHOUT NOTES:
/*
const App = () => {
  const todo = { text: 'A brand new task', done: true }
  const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];

  return (
    <>
      <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>

      <h2>Conditional Rendering</h2>
      <p>{todo.done ? `Task Completed - ${todo.text}` : todo.text }</p>

      <h2>Looping with JSX</h2>
      <ul>
        {todos.map((todo, index) =>
          <li key={index}>
            {todo.text}
          </li>
        )}
      </ul>

      <h2>Looping and Conditional Rendering</h2>
      <ul>
        {todos.map((todo, index) => 
          <li key={index}>
            {todo.done ? `Task Completed - ${todo.text}` : todo.text}
          </li>
        )}
      </ul>
    </>
  );
}

export default App
*/

// -------------------------------------------------------------------------------

/*
NOTES ON JSX FUNDAMENTALS:
1. Functions in JSX must return only 1 thing/element; thus, can use React Fragment wrapped around the html.
2. Tags must be explicitly closed like <hr />
3. If you are using classes, you need to write className.

ADDTL INFO ABOUT className:
camelCasing element attributes
As mentioned above, JSX turns into JavaScript. Any attributes written in JSX will become keys of JavaScript objects, which have the same limitations as any JavaScript variable name. For example, in JavaScript, class is a reserved word, so we have to account for that when composing JSX as well.

In HTML, we could write:
<div class="container"></div>

But in JSX, we would use className - camelCased - instead:
<div className="container"></div>
JavaScript also forbids dashes in variable names, so you’ll notice that 
any attributes that use a dash in HTML are written camelCased in JSX.

*/