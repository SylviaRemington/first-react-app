// main.jsx - linked to index.html

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// The root of our application is created here (and referenced in html - line 16)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



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