import { Switch, Route } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Projects from "../Projects/Projects"


function Routing() {
    //Have to make this a section to make gradient work everywhere. Else would have to assign class to the route component in app.js
    //Then for every component, need to repeat the class
    return (
        <div className="container">
            <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={Blog} />
                <Route path="/my-web" component={Home} />
                <Route exact path="/" component={Home} />
                <Route path="*" ><h1 className="has-text-white title">This appears to be an invalid page.</h1></Route>
            </Switch>
        </div>
        
    )
}
export default Routing;