import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form';
import axios from 'axios';




import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NB from './NB';



function Register()
{
  let username;
  let email;
  let password;



  const handleSubmit = (e) => {

    e.preventDefault();
    axios.post('https://mern-blog-9kb0.onrender.com/register', {username, email, password})
    .then(result => {
      console.log(result);
      if(result.status == 200)
      {
        alert("Registered successfully.")
        window.location.assign('/')

      }
    })

    .catch(err => console.log(err))

    
    console.log(username);
    console.log(email);
    console.log(password);
}

function setU(u)
  {
    username = u;
  }
  
  function setE(form_email)
  {
    email = form_email;
  }
  
  function setP(p)
  {
    password = p;
  }


return(
    <>
    <Helmet>
            <title>Register</title>
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
    
    <Card className="mx-auto shadow" style={{ width: "25rem", height: "30rem"}}>
      <Card.Body>
        <Card.Title className="fs-3 pt-3">Register</Card.Title>
        <Card.Text className="fs-5 lh-base pt-3">
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={(e) => setU(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="text" placeholder="Enter e-mail" onChange={(e) => setE(e.target.value)} />
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

export default Register;
