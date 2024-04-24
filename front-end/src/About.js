import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './custom.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import sms from './images/blog/sms.jpg';
import smo from './images/blog/smo.jpg';
import sm64 from './images/blog/sm64.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NB from './NB';



function About()
{

return(
    <>
    <Helmet>
            <title>About</title>
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

      <h1>About Us</h1>
      <br />
      <br />
      <div id="about_container" className="mx-auto">
      <p className="fs-3 mx-auto">
      This is a gaming blog where you can find out what makes Mario games fun and even create an account! You can discover new games and get information about their gameplay, so that you can decide what game you want to buy!










      </p>
      </div>
      <br />
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

export default About;