import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Navbar extends Component {
  render() {
    var dt = new Date();
    var tz = ((dt.getTimezoneOffset() / 60) * 100).toString();

    if (tz.length === 3) {
      tz = tz.substring(0,1) + ":" + tz.substring(1,);
    } else {
      tz = tz.substring(0,2) + ":" + tz.substring(2,);
    }
    
    return (
        <nav className="navbar is-black is-hidden-mobile" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start has-text-weight-semibold">

          <Link className="navbar-item" to="/my-web">
            Home
          </Link>

          <Link className="navbar-item" to="/blogs">
            Blogs
          </Link>

          <Link className="navbar-item" to="/projects">
            Projects
          </Link>

          <p>Version 2-17-2022 My GH Action worked!</p>
        </div>
        <div className="navbar-end has-text-weight-semibold">
          <p className="navbar-item">
            GMT {tz} &#8195; {this.state.hour}:{this.state.minute}
          </p>
        </div>

      </div>
      </nav>
      
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      minute:0,
      page: ""
    };
  }

  timeUpdate() {
    var dt = new Date();
    var hr = dt.getHours();
    var min = dt.getMinutes();
    //getMinutes() may return a 1 digit number so supplement with a '0' to look nicer on display
    if (min.toString().length === 1) {
      min = "0" + min;
    }
    if (hr.toString().length === 1 ) {
      hr = "0" + hr;
    }
    
    this.setState(state => ({
      hour: hr,
      minute: min
    }));
  }

  componentDidMount() {
    //Update upon component load
    this.timeUpdate();
    //Update this component every 30s
    this.interval = setInterval(() => this.timeUpdate(), 30000);
  }
  
  componentWillUnmount() {
    //As suggested on reactjs docs, clear it else you get memory leaks and other bugs
    clearInterval(this.interval);
  }
  
}

export default Navbar;
