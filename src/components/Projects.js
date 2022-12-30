
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


function Projects() {

  let works = [
    {
      img: require('./img-files/mythic.jpg'),
      alt:"WOW Team Builder",
      link: "https://mythic-plus-team.herokuapp.com/",
      name: 'WOW Team Builder',
      gitlink: ' https://github.com/Hoffalypse/mythic-plus-team',
      desc: 'This App creates teams for World of Warcraft Mythic+ battles. <br /> Full Stack application using handlebars on the frontend<br /> Node, Express, MySQL on Backend utilizing multiple APIs', 
      tool: 'tip2'
    },
    {
      img: require('./img-files/bando.jpg'),
      alt:"Band Search App",
      link: "https://joseeenrique.github.io/Music-App/",
      name: 'Band Search App',
      gitlink: 'https://github.com/joseeenrique/Music-App',
      desc: 'This App is a one stop shop for all band information.<br /> Frontend application using Javascript, CSS and HTML. <br />Recieves API data from Ticketmsater and theAudioDB ',
      tool: 'tip1'

    },
   
    {
      img: require('./img-files/weather.jpg'),
      alt:"Weather App",
      link: "https://hoffalypse.github.io/Current-Weather/",
      name: 'Current Weather',
      gitlink: 'https://github.com/Hoffalypse/Current-Weather',
      desc: 'This add gives Current Weather Data World Wide!<br />Uses Javascript, CSS and HTML for a clean UI/UX<br/> API data from OpenWeatherMap also utilizes local storage',
      tool: 'tip3'
    },
    {
      img: require('./img-files/comment.jpg'),
      alt:"Tech Blog",
      link: "https://stormy-mesa-72944.herokuapp.com/",
      name: 'The Tech Blog',
      gitlink: 'https://github.com/Hoffalypse/Tech-Blog',
      desc: 'Lost in a field of bugs? The Tech blog has Answers<br/> Full stack application using Javascript on the Frontend <br/>Node, Express and MySQL on the backend <br/>Clean Interface with encrypted logins   ',
      tool: 'tip4'
    },
    {
      img: require('./img-files/03-javascript-homework-demo.png'),
      alt:"Password Generator",
      link: "https://hoffalypse.github.io/Password-Generator/",
      name: 'Password Generator',
      gitlink: 'https://github.com/Hoffalypse/Password-Generator',
      desc: 'This is the password desc',
      tool: 'tip5'

    },
    {
      img: require("./img-files/smokeys.jpg"),
      alt:"Fire-Fighter App",
      link: "https://smokeys-helpers.herokuapp.com/",
      name: 'Fire-fighter App',
      gitlink: 'https://github.com/moyuh/fire-fighter-tracking',
      desc: 'This is the fire fighter desc',
      tool: 'tip6'
    },
  
  ]


    return (  
      
<main className="bg-img"> 

    <section className="pad-img">
      <div className="row">
        <p className="head">My Work</p>
        <p className='error-text'>Hover on name for Description</p>
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
          <a className='text-on-image' id={result.tool}> {result.name} </a>

        <Tooltip anchorId={result.tool} html={result.desc} />
     
          
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