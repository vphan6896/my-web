import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Projects from "../Projects/Projects"
import Pvd from "../Projects/Pvd"

function Routing() {
    //Have to make this a section to make gradient work everywhere. Else would have to assign class to the route component in app.js
    //Then for every component, need to repeat the class
    return (
        <div className="container">
            <Switch>
                <Route path="/projects/pvd" component={Pvd} />
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={Blog} />
                <Route path="/home" component={Home} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
        
    )
}
export default Routing;