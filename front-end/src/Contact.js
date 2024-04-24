import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './custom.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NB from './NB';
import emailjs from 'emailjs-com';




function Contact()
{

let email;


function handleSubmit(e)
{
  e.preventDefault();    
  emailjs.sendForm('service_bfz4fmt', 'template_7cl8tij', e.target, 'ggaY9XntoJ6H_aYb2')
    .then((result) => {
        console.log(result)  
    }, (error) => {
        console.log(error.text);
    });

}

return(
    <>
    <Helmet>
            <title>Contact Us</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            
            
            
    </Helmet>



<div className="container text-center">

<div id="BG_CONTAINER" className="m-0 p-0" style={{backgroundColor: "#DDFAFF"}} > 
<NB />
      <br />
      <br />
      <br />
      <br />

      <h1>Contact Us</h1>
      <br />
      <br />

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fs-4">Email address</Form.Label>
        <Form.Control id="email_box" type="email" style={{width: "70%", marginRight: "auto", marginLeft: "auto"}} placeholder="Enter email" onChange={() => { email = document.getElementById("email_box").value; console.log(email);}} />
        <br />
        <Form.Text className="text-muted fs-5">
          We'll never share your email with anyone else.
        </Form.Text>
        <br />
        <br />
        <Button type="submit" className="bg-primary">Submit</Button>
      </Form.Group>
      </Form>
      


      <br />
      <br />
      <br />
      <br/>
      <br />
      <div className="bg-dark bg-gradient w-100 h-8">
      <p className="fs-4 text-light lh-small pt-4">Games Today <span>&copy;</span> 2024 </p>
      <div className="fs-5 text-light lh-small pt-2">Phone number: +91 223 450 2198</div>
      <div className="fs-5 text-light lh-small pb-4">E-mail: support@blog.gamestoday.com</div>

    </div>

    
  


  

      </div>
      </div>


  </>
);
}

export default Contact;