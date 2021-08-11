import profile_picture from './profile_picture-removebg.png';
import sunny_anim from './sunny_joypixels.gif';
import sunset_anim from './sunset.gif';
import sunrise_anim from './sunrise.gif';
import {Link} from 'react-router-dom';
import linkedin_logo from './linkedin-logo-png-1840.png';
import './Home.css';


function Home() {
  var dt = new Date();
  var hour = dt.getHours();
  var greeting = "";
  var gifOfTime = sunny_anim;

  if (hour < 12) {
    greeting = "Good Morning"
    gifOfTime = sunrise_anim;
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon"
  } else {
    greeting = "Good Evening"
    gifOfTime = sunset_anim;
  }

  var imageStyle = {
    "marginTop": "0px",
    "marginLeft": "0px",
    "marginRight": "0px"
  }


  return (
      <div>
          <div className="hero">
            <div className="hero-body">
              <h1 className="title has-text-white is-1 intro">
                {greeting}
              </h1>
              <img id="GreetingID" className="intro" alt="sun shining on water" style={imageStyle} src={gifOfTime}></img>
            </div>
          </div>
        

        <div className={"columns profile"}>
          <div className="column">
            <img alt="Vy Phan's front"  src={profile_picture}/>
          </div>

          <div className="column">
            <article className="message is-info is-size-3">
              <div className="message-header" >
                Vy Phan
              </div>
              
              <div className="message-body is-size-3 has-text-weight-medium">
                <ul className="has-text-left">
                  <li className="mb-2">
                    <a href="resume">Resume</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vy-phan-ut2020/" > <img alt="LinkedIn logo" style={{height:"45px", width:"160px"}} src={linkedin_logo}/>  </a>
                  </li>
                  <li className="mb-1">
                  <Link to="/blog">
                    Blog
                  </Link>
                  </li>
                  <li>
                  <Link to="/projects">
                    Projects
                  </Link>
                  </li>
                </ul>
              </div>
            </article>
            <article className=" message is-info is-size-4 has-text-weight-medium">
              <div className="message-body">
                Welcome to my site. I am a University of Texas Austin Computer Science B.S. Graduate with a certificate in Applied Statistics.
              </div>
            </article>
          </div>

        </div>
                
        
      </div>
  );
}

export default Home;
