import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'react-tooltip'

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function Projects() {
  // const [show, setShow] = useState(false);
  // const target = useRef(null);

  let works = [
    {
      img: require('./img-files/bando.jpg'),
      alt:"Band Search App",
      link: "https://joseeenrique.github.io/Music-App/",
      name: 'Band Search App',
      gitlink: 'https://github.com/joseeenrique/Music-App',
      desc: 'This is the fire fighter desc'
    },
    {
      img: require('./img-files/mythic.jpg'),
      alt:"WOW Team Builder",
      link: "https://mythic-plus-team.herokuapp.com/",
      name: 'WOW Team Builder',
      gitlink: ' https://github.com/Hoffalypse/mythic-plus-team',
      desc: 'This is the fire fighter desc'
    },
    {
      img: require('./img-files/weather.jpg'),
      alt:"Weather App",
      link: "https://hoffalypse.github.io/Current-Weather/",
      name: 'Current Weather',
      gitlink: 'https://github.com/Hoffalypse/Current-Weather',
      desc: 'This is the fire fighter desc'
    },
    {
      img: require('./img-files/comment.jpg'),
      alt:"Tech Blog",
      link: "https://stormy-mesa-72944.herokuapp.com/",
      name: 'The Tech Blog',
      gitlink: 'https://github.com/Hoffalypse/Tech-Blog',
      desc: 'This is the fire fighter desc'
    },
    {
      img: require('./img-files/03-javascript-homework-demo.png'),
      alt:"Password Generator",
      link: "https://hoffalypse.github.io/Password-Generator/",
      name: 'Password Generator',
      gitlink: 'https://github.com/Hoffalypse/Password-Generator',
      desc: 'This is the password desc'

    },
    {
      img: require("./img-files/smokeys.jpg"),
      alt:"Fire-Fighter App",
      link: "https://smokeys-helpers.herokuapp.com/",
      name: 'Fire-fighter App',
      gitlink: 'https://github.com/moyuh/fire-fighter-tracking',
      desc: 'This is the fire fighter desc'
    },
  
  ]


    return (  
      
<main className="bg-img"> 

    <section className="pad-img">
      <div className="row">
        <p className="head">My Work</p>
        { works.map((result) => (
        <div className="col-xxl-4 col-lg-6">
        
          <div>
          <a href={result.link} 
          target="_blank" rel="noreferrer">
          <img 
          src={result.img} 
          className="box together" 
          
          alt={result.alt}></img></a>
          </div>
          <button 
          // onClick={() => <ClickModal/>} 
          className = 'text-on-image'
          data-bs-toggle="tooltip" data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables."
          >
          {result.name}</button>
          
          <a 
          href= {result.gitlink} 
          target="_blank"rel='noreferrer'>
          <img className = "cat" src= {require("./img-files/icons8-github.gif")} alt='github cat'></img></a>
          
          </div>
         ))}
      </div>
   
  </section>
</main>
        
      )}
  
  export default Projects;