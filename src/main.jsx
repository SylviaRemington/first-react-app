// main.jsx - linked to index.html

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// App.jsx is being imported in here cause using ESM modules
import App from './App.jsx'

// The root of our application is created here (and referenced in html - line 16)
// createRoot is a function from React DOM (the library that connects React to the browser). It tells react "hey see this div, this is where my app should live. take control of it."
// The App component below on line 13 is the App.jsx //The App.jsx then renders on the webpage.
// So this is the function for creating a root and rendering inside of it the App.jsx.
createRoot(document.getElementById('root')).render(
  // Below are COMPONENTS that we render inside the app.
  <StrictMode>
    {/* This app component below is from the index.html page & has been imported in as per line 7 above. */}
    <App />
  </StrictMode>,
)













/*
ADDTL INFO ABOUT REACT:
1. index.html
Has <div id="root"></div>
This is just an empty placeholder
You never touch this file after creating it

2. main.jsx
Does one job: Takes your App and connects it to the root div
This is automatic - you set it once and forget it

3. App.jsx
This is where ALL your work happens
You write 100% of your content here.

"The main HTML file (index.html) runs the main JavaScript file (main.jsx) first, 
and then that JavaScript file puts your entire app on the screen."
*/


/*
INFO ABOUT REACT AND THE DIFFERENT FILES:

1. main.jsx – The "Starter File"
What it does:

Finds the empty <div id="root"> in your HTML (like finding a blank picture frame)
Tells React: "Use this empty space to show my app"
Points to App.jsx and says: "Put whatever is in this file into that empty space!"

Do you change this file?
No. You set it up once, then never touch it again.

2. App.jsx – The "What Shows Up On Screen" File

Its job: Controls everything you see on the webpage.

What it actually does:
It's a set of instructions that says what should appear on screen
You write what you want to show - like text, buttons, pictures - inside this file
Example of what you might write:

--jsx--
function App() {
  return (
    <div>
      <h1>Look at my cool website!</h1>
      <button>Press this button</button>
    </div>
  );
}
When you save changes to this file, your webpage updates immediately to show them

Do you change this file?
Yes, all the time! This is where you actually build your website.

The Big Difference:
File	What It Does	Do You Change It?
main.jsx	Starts React, connects to webpage	Almost never
App.jsx	Controls what appears on screen	Constantly
*/

/*
REACT INFORMATION:
When you start a React app, you need to tell React where on the webpage 
it should render your app. This is done using createRoot().

What is the "element" they're talking about?
- The "element" is usually a <div> in your HTML file (like <div id="root"></div>).
- This <div> is like an empty container where your entire React app will live.

How does it work?
1. You pick an HTML element (like <div id="root">) and pass it to createRoot().
2. React takes control of that element—everything inside it will be managed by React.
3. No other JavaScript code (like jQuery or vanilla JS) should modify anything inside 
this <div>—only React should touch it.

What does root.render() do?
- The root (your <div>) gets a special method called render().
- You use root.render() to display your React components inside that <div>.

Key takeaway:
- The "element" is just the HTML container (usually a <div>) where your React app lives.
- React takes over that element completely.

Simple analogy:
Think of your webpage as a whiteboard.
You draw a box (the <div>) and tell React: "You own this box—draw your stuff here."
React then fills the box with your app, and you don’t scribble in it with other tools.

*/