import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Routes, Route, Link, redirect } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let LoggedIn = localStorage.getItem('LoggedIn');
console.log("Initial value: ", LoggedIn);

if(LoggedIn == undefined || LoggedIn == null)
{
localStorage.setItem('LoggedIn', false);
console.log("If block");
}
console.log("LoggedIn (index.js): ", localStorage.getItem('LoggedIn'));


root.render(
  <Router>
    <Routes> 
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/blog" element={ <Blog /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/about" element={ <About />} />
    </Routes>
  </Router>
);
