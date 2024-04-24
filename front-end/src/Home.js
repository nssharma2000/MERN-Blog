import React from 'react';
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
import NB from './NB';



function Home()
{

return(
    <>
    <Helmet>
            <title>Home</title>
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

      <h1 className="fs-1 fw-medium" align="center">Games Today</h1>
      <br />
      <br />
      
      <div className="d-flex flex-wrap justify-content-evenly">
      
      <Card className="mx-auto shadow" style={{ width: "25rem", height: "33rem", border: "2px solid teal"}}>
      <Card.Img variant="top" src={CI1} style={{height: "15rem"}} />
      <Card.Body>
        <Card.Title className="fs-3">Enjoy Games!</Card.Title>
        <Card.Text className="fs-5 lh-base">
        Dive into the latest reviews, tips, and updates from the gaming world. Whether you're a hardcore gamer or just looking to level up your skills, we've got you covered.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="mx-auto shadow" style={{ width: "25rem", height: "33rem", border: "2px solid teal"}}>
      <Card.Img variant="top" src={CI2} style={{height: "15rem"}} />
      <Card.Body>
        <Card.Title className="fs-3">Get better!</Card.Title>
        <Card.Text className="fs-5 lh-base">
        Explore thrilling reviews, captivating stories, and expert tips to enhance your gaming experience. Our curated content covers a wide array of genres, from action-packed adventures to mind-bending puzzles!
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="mx-auto shadow" style={{ width: "25rem", height: "33rem", border: "2px solid teal"}}>
      <Card.Img variant="top" src={CI3} style={{height: "15rem"}} />
      <Card.Body>
        <Card.Title className="fs-3">Immerse yourself!</Card.Title>
        <Card.Text className="fs-5 lh-base">
        Prepare to embark on an epic journey where the only limit is your imagination! Delve into immersive reviews, insightful analyses, and exclusive interviews with industry insiders.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <br />
    <br />
    <br />
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

export default Home;