import Card from '../Cards/Card';
import {Link, Switch, Route} from "react-router-dom";
import Pvd from '../Projects/Pvd.js'
import pvd_image from '../Projects/phonevideodoctor.png'

const routes = [
  { path: '/projects/pvd', name: 'Pvd', Component: Pvd }
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
              <section class="columns section hero ">
                            <h1 className="title has-text-grey-darker is-1">
                                Blogs
                            </h1>
                        </section>
              <div className="columns section has-text-weight-medium">
                <Card image={<Link to='/projects/pvd' ><img src={pvd_image} alt="Project Page for PhoneVideoDoctor"/></Link>}
                    headliner={<a href="https://github.com/vphan6896/telemedicine-app">PhoneVideoDoctor</a>}
                    descrip={<div>Telemedicine platform for geriatrics
                    <br></br><br></br>
                    <a href="https://www.youtube.com/watch?v=n_Xggqjipbk">Video Link</a>
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