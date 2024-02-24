import Card from '../Cards/Card';
import {Link, Switch, Route} from "react-router-dom";
import blog0 from './Blog0/Blog0.js'
import blog1 from './Blog1/Blog1.js'
import blog2 from './Blog2/Blog2.js'
import kbd_gif from './keyboard.gif'
import pi_logo from './Blog1/Pi-hole_logo.png'

const routes = [
  { path: '/blogs/blog0', name: 'blog0', Component: blog0 },
  { path: '/blogs/blog1', name: 'blog0', Component: blog1 },
  { path: '/blogs/blog2', name: 'blog0', Component: blog2 }
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
            <div style={{"height":"100vh"}}>
              <section className="columns section hero">
                            <h1 className="title has-text-grey-darker is-1">
                                Blogs
                            </h1>
                            <h2 className="subtitle">
                                Documentation of my experiences in various hobbies which can range from programming to fitness.
                            </h2>
                        </section>
              <div className="columns section has-text-weight-medium">
                <Card image={<Link to='/blogs/blog0' ><img src={kbd_gif} alt="Keyboard glowing"/></Link>}
                    headliner={<Link to='/blogs/blog0' > Mechanical Keyboards </Link>}
                    descrip={<div>Why are there hobbyists who collect and build keyboards? Isn't my Apple Keyboard..
                    <br></br><br></br><br></br>
                    <button class="button is-link">#technology</button></div>}
                />
                <Card image={<Link to='/blogs/blog1' ><img src={pi_logo} alt="Raspberry Pi and Docker logos on top of a No Ads sign"/></Link>}
                    headliner={<Link to='/blogs/blog1' > Pi-hole </Link>}
                    descrip={<div>Ad blocking on the network level. Experimenting with Docker and a Raspberry Pi.
                    <br></br><br></br><br></br>
                    <button class="button is-link">#software</button></div>}
                />
                <Card image={<Link to='/blogs/blog2' ><img src={pi_logo} alt="Raspberry Pi and Docker logos on top of a No Ads sign"/></Link>}
                    headliner={<Link to='/blogs/blog2' > Pi-hole </Link>}
                    descrip={<div>Ad blocking on the network level. Experimenting with Docker and a Raspberry Pi.
                    <br></br><br></br><br></br>
                    <button class="button is-link">#software</button></div>}
                />
              </div>
            </div>
              )
          }}></Route>
      </Switch>
    )
}

export default Blogs;