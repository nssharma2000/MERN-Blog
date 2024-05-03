import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './custom.css';
import Form from 'react-bootstrap/Form';
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
import axios, { all } from 'axios';
import { useEffect } from 'react';



function Blog()
{

let LoggedIn;
let username;
let c_content;


let c_response;

const [commentsFetched, setCF] = useState(false);
const [all_comments, setComments] = useState([])

useEffect(() => { get_comments_response(); get_comments(); }, [])



function get_comments()
{
  console.log("All comments: ", JSON.stringify(all_comments))
  setComments(all_comments)
  console.log(commentsFetched)
}



if(localStorage.getItem('LoggedIn') == 'true')
{
LoggedIn = true
username = localStorage.getItem('u_name')
console.log("username: ", username)
}
else
LoggedIn = false


function set_c(cc)
{
  c_content = cc;
  console.log("set_c")
}


async function get_comments_response()

{
try
{
c_response = await axios.get('https://mern-blog-9kb0.onrender.com/get_comments')
console.log("c_response: ", c_response.data)
setComments(c_response.data)
setCF(true)
console.log("commentsFetched (final): ", commentsFetched)
console.log("All comments", all_comments)
}

catch(error)
{
  console.log("Error fetching comments: ", error)
}
}

const add_comment = (e) =>
{
    e.preventDefault();

    let cBoxContent = document.getElementById("comment_box").value
    console.log("box: ", cBoxContent)

    if(cBoxContent.trim().length === 0)
    {
      alert("Type something!")
    }
    else
    {
    axios.post('https://mern-blog-9kb0.onrender.com/add_comment', {username, c_content})
    .then(result => {
      console.log(result);
      console.log(c_content)
      if(result.status == 200)
      {
        console.log("Comment added!")
        document.getElementById("comment_box").value="";
        window.location.assign('')
      }
    })

    .catch(err => console.log(err))
   }}




return(
    <>
    <Helmet>
            <title>Blog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            
            
            
    </Helmet>



<div className="container text-center">

<div id="BG_CONTAINER" className="m-0 p-0" style={{backgroundColor: "#DDFAFF"}} > 
<NB  />
      <br />
      <br />
      <br />
      <br />

      <h1>Blog</h1>
      <br />
      <br />
      


      <h2 className="mx-auto">Super Mario Sunshine</h2>
      <div className="img-container mx-auto">
      <Image src={sms} rounded className="img-fluid mx-auto" style={{borderRadius: "5%", border: "3px solid blue"}} />
      </div>
      <br />
      <p className="mx-auto" style={{width: "80%", fontSize: "1.5em"}}>
      Dive into a vibrant world of sun-drenched adventure with Super Mario Sunshine, the beloved GameCube classic that continues to captivate players with its sunny disposition and imaginative gameplay. Released in 2002, this colorful installment in the Mario series takes our beloved plumber on a tropical vacation to the picturesque Isle Delfino, where he trades his traditional red and blue attire for a snazzy white jumpsuit and water-powered backpack known as FLUDD (Flash Liquidizer Ultra Dousing Device).

From the moment Mario sets foot on the sun-kissed shores of Isle Delfino, players are immersed in a tropical paradise brimming with charm and personality. The island's diverse locales, from bustling harbors to tranquil beaches and lush jungles, serve as the backdrop for Mario's quest to clean up the island and restore its natural beauty.
</p>
<br />
      <br />
      <br />


<h2 className="mx-auto">Super Mario Odyssey</h2>
      <div className="img-container mx-auto">
      <Image src={smo} rounded className="img-fluid mx-auto" style={{borderRadius: "5%", border: "3px solid blue", objectFit: "cover"}} />
      </div>
      <br />
      <p className="mx-auto" style={{width: "80%", fontSize: "1.5em"}}>
      Prepare to embark on a journey like no other with Super Mario Odyssey, the enchanting adventure that takes our favorite plumber to new heights—and depths—in a quest to save Princess Peach from the clutches of the dastardly Bowser. Released for the Nintendo Switch in 2017, Super Mario Odyssey captured the hearts and imaginations of players worldwide with its expansive worlds, innovative gameplay, and charming characters.

At the heart of Super Mario Odyssey lies the magical Odyssey itself, a globe-trotting airship powered by Power Moons that serves as Mario's trusty steed throughout his quest. From the bustling streets of New Donk City to the sandy dunes of the Sand Kingdom and beyond, the Odyssey whisks players away on a whirlwind tour of diverse and imaginative locales, each more vibrant and captivating than the last.
        </p>

        <br />
      <br />
      <br />


<h2 className="mx-auto">Super Mario 64</h2>
      <div className="img-container mx-auto">
      <Image src={sm64} rounded className="img-fluid mx-auto" style={{borderRadius: "5%", border: "3px solid blue", objectFit: "cover"}} />
      </div>
      <br />
      <p className="mx-auto" style={{width: "80%", fontSize: "1.5em"}}>
      Step back in time to the golden age of 3D platforming with Super Mario 64, the groundbreaking masterpiece that revolutionized the world of video games upon its release for the Nintendo 64 in 1996. Join Mario on a thrilling journey through Princess Peach's castle and beyond as he races against the clock to rescue her from the clutches of the villainous Bowser.

Super Mario 64 is a timeless classic that continues to captivate players with its innovative gameplay, charming characters, and imaginative worlds. From the moment Mario leaps into the iconic painting of Princess Peach's castle, players are transported to a magical realm filled with secrets, surprises, and countless challenges waiting to be conquered.
</p>
<br />
<br />
<br />

<div id="comments_container" className="mx-auto p-2 shadow rounded">
      <h3>Comments</h3>
      <br />
      { (commentsFetched && all_comments.length > 0) ? 
       all_comments.map((c, index) => {
      return(
      <>
      <div id="comment" class="mx-auto p-2 rounded" style={{ width: "80%" }}>

        <h6 align="left" style={{ marginLeft: "2%" }}> { c.username } </h6>
        <p className="fs-5" align="left" style={{ marginLeft: "4%" }}> { c.c_content } </p>
      </div>
      <br />
      </>)})
        :
      (<div>No comments</div>)}






      
      
      {LoggedIn ?
      (<Form onSubmit={add_comment}>
      <Form.Control id="comment_box" as="textarea" rows={3} className="form-control mx-auto" placeholder="Add comment" onChange={(e) => {c_content = e.target.value}} style={{width: "85%"}}></Form.Control>
      <br />
      <button type="submit" className="btn btn-primary mx-auto">Add comment</button>
      </Form>
      )
      :
      (
      <h4>Login to comment.</h4>
      )
      }

      </div>


      
      


























  


        
      
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
)}

export default Blog;
