// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

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
// THIS BELOW HOLDS THE MAJORITY OF OUR APP LOGIC IN APP.JSX
// Most of what we are building will be an app or components loaded inside our app.
// This below from lines 43-51 below are the app component.
const App = () => {

  return (
    // This is jsx below (even though it looks like html. We are returning html into the app to be rendered on the page.)
    <h1>Hello, world!</h1>
  );
};

export default App;

