import sunny_anim from './sunny_joypixels.gif';
import sunset_anim from './sunset.gif';
import sunrise_anim from './sunrise.gif';
import React, {Component} from 'react'

class Greeting extends Component {
    


    constructor(props) {
        super(props);
        this.state = {
          show: true
        };
    }


    showUpdate() {
        this.setState(state => ({
            show: false
        }));
    }

    componentDidMount() {
        //Update this component after 5 seconds
        this.interval = setInterval(() => this.showUpdate(), 4000);
    }
      
    componentWillUnmount() {
        //As suggested on reactjs docs, clear it else you get memory leaks and other bugs
        clearInterval(this.interval);
    }

    render() {
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
            "marginRight": "0px",
            "marginBottom": "0px"
        }

        return(
        <div className="is-flex-desktop-only">
            {this.state.show ? 
            <div className="hero">
                <div className="hero-body">
                    <h1 className="greeting title has-text-grey-darker is-1">
                        {greeting}
                    </h1>
                        <img className="greeting" id="GreetingID" alt="sun shining on water" style={imageStyle} src={gifOfTime}/>
                </div>
            </div>
            : ""}
            
        </div>
        )
    }

}

export default Greeting;