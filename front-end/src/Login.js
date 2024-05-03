import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useLocation } from 'react-router-dom';




import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NB from './NB';



function Login()
{
  let username;
  let password;

 
 

  const handleSubmit = (e) => {

  e.preventDefault();
  axios.post('http://localhost:3001/login', {username, password})
  .then(result => {
    console.log(result);
    setU(username)
    setP(password)
    
    if(result.data === "Success!" || result.status == 200 )
    {
      {
        localStorage.setItem('LoggedIn', 'true')
        localStorage.setItem('u_name', String(username))
        localStorage.setItem('pw', String(password))

        localStorage.setItem('token_a', true)
        
        console.log("Username (localstorage): ", localStorage.getItem('u_name'));
        console.log("Password (localstorage): ", localStorage.getItem('pw'));
       

        alert("Logged In!");
       console.log(result)

        
       
       
       
       
       
       window.location.assign('/')

 

        


        

        

      }
    }
  })

  .catch(err => console.log(err))

}



function setU(u)
{
  username = u;
}

function setP(p)
{
  password = p;
}

return(
    <>
    <Helmet>
            <title>Login</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            
            
            
    </Helmet>




  <div className="container text-center m-0 p-0">
    <div id="other_container">
    <NB /> 
    <br />
    <br />
    <br />
    <br />
    <br />
    <Card className="mx-auto shadow" style={{ width: "25rem", height: "28rem"}}>
      <Card.Body>
        <Card.Title className="fs-3 pt-3">Log In</Card.Title>
        <Card.Text className="fs-5 lh-base pt-3">
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={(e) => setU(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="mt-3">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setP(e.target.value)} />
      </Form.Group>
      <br />
      <Button variant="primary mt-2" type="submit">
        Submit
      </Button>
    </Form>
        
        
        
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>

    
    
  </>
);
}

export default Login;