import Card from '../Cards/Card';
import {Link, Switch, Route} from "react-router-dom";
import blog0 from './Blog0.js'
import kbd_gif from './keyboard.gif'

const routes = [
  { path: '/blogs/blog0', name: 'blog0', Component: blog0 }
]

function Blogs() {
    return (
      <Switch>
      {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.Component}
              >
              </Route>
            ))}
      <Route path="/blogs" exact render={ () => {
          return(
            <div>
              <section class="columns section hero">
                            <h1 className="title has-text-grey-darker is-1">
                                Blogs
                            </h1>
                            <h2 class="subtitle">
                                Documentation of my experiences in various hobbies which can range from programming to fitness.
                            </h2>
                        </section>
              <div className="columns section has-text-weight-medium">
                <Card image={<Link to='/blogs/blog0' ><img src={kbd_gif} alt="Keyboard glowing"/></Link>}
                    headliner={<Link to='/blogs/blog0' > Mechanical Keyboards </Link>}
                    descrip={<div>Why are there hobbyists who collect and build keyboards? Isn't my Apple
                    <br></br><br></br><br></br>
                    <a>#software</a></div>}
                />
              </div>
            </div>
              )
          }}></Route>
      </Switch>
    )
}

export default Blogs;