import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './custom.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import CI1 from './images/carousel_image_1.jpg';
import CI2 from './images/carousel_image_2.jpg';
import CI3 from './images/carousel_image_3.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { send } from 'emailjs-com';


function NB()
{
  let LI = localStorage.getItem('LoggedIn')

  let validity_r = undefined;



  let token_a = localStorage.getItem('token_a')



  setInterval(sendToken, 10000)



  function checkToken()
  {
    if((localStorage.getItem('token_a') == 'true') && validity_r.data.message === 'jwt expired')
    {
      alert('Expired!')
      console.log("Expired")

      localStorage.setItem('token_a', false)
      LogOut()
    }


    
  }



  


  async function sendToken()
  {
    await axios.get('http://localhost:3001/receive_token')
    .then(result => {
    validity_r = result
    console.log(validity_r)
    checkToken()
    return
    })
  }



  console.log("LoggedIn retrieved from localstorage: ", LI)

  let LoggedIn;

  if(LI == 'true')
  LoggedIn = true;
  else
  LoggedIn = false;

  
  console.log("LoggedIn (final): ", LoggedIn)


  function LogOut()
  {
  localStorage.setItem('LoggedIn', false);
  window.location.assign('/')
  }


  


  




  return(
  <>
  <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="fs-3">Games Today</Navbar.Brand>
          <Nav className="me-auto px-3">
            <Nav.Link href="/" className="px-3 fs-5">Home</Nav.Link>
            <Nav.Link href="/blog" className="px-3 fs-5">Blog</Nav.Link> 
            <Nav.Link href="/contact" className="px-3 fs-5">Contact</Nav.Link>
            <Nav.Link href="/about" className="px-3 fs-5">About</Nav.Link>
          </Nav>
        </Container>
                  

        
        { LoggedIn ?
          <>
          <div className="text-white fs-5 mx-auto px-4 text-nowrap">Welcome, {localStorage.getItem('u_name')} </div>
        <Link to="/register"><Button variant="primary text-nowrap me-2">Register</Button></Link>
        <Button variant="danger text-nowrap me-2" onClick={LogOut}>Log out</Button>
          </>
        :
        <>
        <Link to="/register"><Button variant="primary text-nowrap me-2">Register</Button></Link> 
        <Link to="/login"><Button variant="primary text-nowrap me-2">Log In</Button></Link>
        </> }
      </Navbar>

    
  </>
);

}


export default NB;