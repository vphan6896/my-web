import profile_picture from './profile_picture-removebg.png'
import sunny_anim from './sunny_joypixels.gif'
import sunset_anim from './sunset.gif'
import sunrise_anim from './sunrise.gif'
import resume from './VyResume2021.pdf'

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
    "marginTop": "10px",
    "marginLeft": "0px",
    "marginRight": "0px"
  }
  
  var titleStyle= {
    "marginTop": "0px",
    "marginBottom": "0px",
    "background": "-webkit-linear-gradient(#08cf90, #d5e9f5)",
    "WebkitBackgroundClip": "text",
    "WebkitTextFillColor": "transparent"
  }

  return (
      <div>
        <div className="hero">
          <div className="hero-body">
            <h1 className="title has-text-white is-1" style={titleStyle}>
              {greeting}
            </h1>
            <img height="200" width="200" alt="sun shining on water" style={imageStyle} src={gifOfTime}></img>
          </div>
        </div>

        
        
        <div className="columns">
          <div className="column">
            <img alt="Vy Phan's front profile"  src={profile_picture}/>
          </div>

          <div className="column">
            <article className="message is-info is-size-4">
              <div className="message-header" >
                Vy Phan
              </div>
              
              <div className="message-body is-size-4 has-text-weight-medium">
                <ul>
                  <li>
                    <a href={resume}>Resume</a> | <a href="https://www.linkedin.com/in/vy-phan-ut2020/"> LinkedIn </a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                  <a href="/projects">Projects</a>
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
