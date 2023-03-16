
function About() {
    return (  
        <main className="bg-img"> 
        
           <article>
              <h2 id="about"> My Story </h2>
              
                  <p className="about-me"><span>I</span> <span>was</span> <span>born</span> <span>and</span> <span>raised</span> <span>in</span> <span>Illinois</span> <span>where</span> <span>I</span> <span>completed</span> <span>my</span> <span>degree</span> <span>in</span> <span>International</span> <span>Relations</span> <span>at</span> <span>SIU</span> <span>Carbondale</span> <span>(Go Salukis!). &nbsp;</span> 
                  <span>I</span> <span>enjoy</span> <span>all</span> <span>things</span> <span>outdoors:</span> <span>hiking,</span> <span>climbing,</span> <span>rafting,</span> <span>fishing</span> <span>and</span> <span>off-roading. &nbsp;</span>
                  <span>My</span> <span>background</span> <span>is</span> <span>in</span> <span>the</span> <span>Financial</span> <span>Services</span> <span>Industy.</span> <span>I</span> <span>also</span> <span>spent</span> <span>many</span> <span>years</span> <span>as</span> <span>a</span> <span>professional</span> <span>poker</span> <span>player. &nbsp;</span><span>Software</span> <span>development</span> <span>has</span> <span>been&nbsp;</span> 
                  <span>my</span> <span>passion</span> <span>for</span> <span>many</span> <span>years</span> <span>and have</span> <span>turned</span> <span>my full</span><span>attention</span> <span>to pursuing it.</span></p>
                  <div className="centerpic" >
                  <img 
                  className="mtn hoff" 
                  alt='me'
                  src={require("./img-files/mtn-B.jpeg")}></img>
                  <img 
                  className="mtn hoff" 
                  src={require("./img-files/moab.jpeg")} 
                  alt='me'></img>
                  <img 
                  className="mtn hoff" 
                  src={require("./img-files/poker.jpeg")} 
                  alt='me'></img>
                  <img 
                  className="mtn hoff" 
                  src={require("./img-files/yelapa.jpeg")} 
                  alt='me'></img>
                </div>
          </article> 
      </main>
    );
  }
  
  export default About;