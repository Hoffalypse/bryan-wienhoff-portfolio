
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


function Projects() {
// array of objects for all projects placed in order on screen 
  let works = [
    {
      img: require('./img-files/logo2.png'),
      alt:"Integral Solutions",
      link: "https://int-sol-dev.herokuapp.com/",
      name: 'Integral Solutions',
      gitlink: 'https://github.com/stevecalla/integral-solutions-dev',
      desc: 'Enterprise Application built for Integral Solutions,  Robust Employee <br/>and Admin Functionality managing all their bussiness needs.<br/><br/> Built on MERN stack incorporating GrapgQL, Google API, React Bootstrap, <br />JWT Decode and Full Calender NPM.',
      tool: 'tip5'
      
    },
    {
      img: require('./img-files/earth-port.png'),
      alt:"EathShip Packaging",
      link: "https://earthship-packaging.herokuapp.com/",
      name: 'Earthship Packaging',
      gitlink: 'https://github.com/Hoffalypse/earthship-packaging-dev',
      desc: 'Full Stack E-Commerce Application built for Earthship Packaging LLC<br/><br/> Frontend built with React and Redux <br/>Node, Express and MongoDB on the backend <br/>Full admin Login capability managing all users, products and orders.<br/> Checkout through Paypal',
      tool: 'tip4'
    },
    {
      img: require('./img-files/mythic.jpg'),
      alt:"WOW Team Builder",
      link: "https://mythic-plus-team.herokuapp.com/",
      name: 'WOW Team Builder',
      gitlink: ' https://github.com/Hoffalypse/mythic-plus-team',
      desc: 'This App creates teams for World of Warcraft Mythic+ battles. <br /> <br/>Full Stack application using handlebars on the frontend<br /> Node, Express, MySQL on Backend utilizing multiple APIs', 
      tool: 'tip2'
    },
    {
      img: require("./img-files/smokeys.jpg"),
      alt:"Fire-Fighter App",
      link: "https://smokeys-helpers.herokuapp.com/",
      name: 'Fire-fighter App',
      gitlink: 'https://github.com/moyuh/fire-fighter-tracking',
      desc: 'This App helps Forest Fire Fighters move into the 21st century.<br/>No more carrying around a satchel full of forms and calendars.<br/><br/> Full Stack Application Using React on the Frontend. GraphQL<br/>Node, Express, MongoDB on the Backend. This App utilizes <br/>Calender data, APIs, encrypted login and Geolocation ',
      tool: 'tip6'
    },
    {
      img: require('./img-files/bando.jpg'),
      alt:"Band Search App",
      link: "https://joseeenrique.github.io/Music-App/",
      name: 'Band Search App',
      gitlink: 'https://github.com/joseeenrique/Music-App',
      desc: 'This App is a one stop shop for all band information.<br/><br/> Frontend application using Javascript, CSS and HTML. <br />Recieves API data from Ticketmsater and theAudioDB ',
      tool: 'tip1'

    },
   
    {
      img: require('./img-files/Hoffai.png'),
      alt:"AI Photo Sharing",
      link: "https://www.hoffai.com",
      name: 'AI Photo Generator',
      gitlink: 'https://github.com/Hoffalypse/AI-Photo-Booth',
      desc: 'I developed this app due to a fascination with AI technology<br/> and wanting to gain some experience using OpenAI APIs.<br/><br/> App utilizes MERN stack with Tailwind CSS and Vite.<br/> Image storage is done on Cloudinary and deployed using<br/> Render and Hostinger',
      tool: 'tip3'
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