import profile_picture from './profile_picture-removebg.png';
import {Link} from 'react-router-dom';
import linkedin_logo from './linkedin-logo-png-1840.png';
import github_logo from './github-logo.png'
import './Home.css';
import Greeting from './Greeting'
import Resume from './Vy_Phan.pdf'


function Home() {

  var profilePicStyle = {
    width: "80%",
    height: "100%"
  }


  return (
    //Home page has whitebox otherwise without this individual page. Otherwise the css background-size:cover covers the full page.
      <div style={{"height":"100vh"}}>
        <div>
          <Greeting></Greeting>
        </div>

        <div className="columns profile" style={{paddingTop:"100px"}}>
          <div className="column">
            <img style={profilePicStyle} alt="Vy Phan posing"  src={profile_picture}/>
          </div>
          <div className="column">
            <article className="message is-info is-size-3">
              <div className="message-header" >
                Vy Phan
              </div>
              
              <div className="message-body">
                Welcome to my site. I am a University of Texas Austin Computer Science B.S. Graduate interested in fullstack development.
                <br/>
                
              </div>
              
            </article>
            <article className="message is-info is-size-4 has-text-weight-medium">
              
              <div className="is-size-3 has-text-weight-medium">
                <ul className="has-text-centered">
                  <li>
                    <a href={Resume} without rel="noreferrer" target="_blank">Resume</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vy-phan-ut2020/" > <img alt="LinkedIn logo" style={{height:"45px", width:"160px"}} src={linkedin_logo}/>  </a>
                  </li>
                  <li>
                    <a href="https://github.com/vphan6896/" > <img alt="GitHub logo" style={{height:"31px", width:"140px"}} src={github_logo}/>  </a>
                  </li>
                  <li>
                    <Link to="/projects">
                      Projects
                    </Link>
                  <li className="mb-1">
                    <Link to="/blog">
                      Blog
                    </Link>
                  </li>
                  </li>
                </ul>
              </div>
            </article>
          </div>
          
        </div>
                
        
      </div>
  );
}

export default Home;
