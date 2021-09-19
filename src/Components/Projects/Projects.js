import pvd_image from './phonevideodoctor.png'
import {Link, Switch, useRouteMatch, Route} from "react-router-dom";
import Pvd from './Pvd.js'
import Abc from './Abc.js'
import Card from '../Cards/Card'
import dz_image from './dangerzone.png'
import al_image from './Apex-Legends-Stats.png'

const routes = [
    { path: '/projects/pvd', name: 'Pvd', Component: Pvd },
    { path: '/projects/abc', name: 'Abc', Component: Abc }
  ]

function Projects() {
    var { path, url } = useRouteMatch();
    //Need to make that first route scale with multiple projects, else we have to make multiple routes
    //Need unique key when doing a list map.
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
            <Route exact path="/projects" render={ () => {
                return(
                    <div style={{"height":"100vh"}}>
                        <section class="columns section hero">
                            <h1 className="title has-text-grey-darker is-1">
                                Projects
                            </h1>
                            <h2 class="subtitle">
                                Documentation of my projects. There may be a blog attached to them or links that will better describe the projects.
                            </h2>
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
                        <Card image={<a href={`https://gitlab.com/vphan6896/DangerZone/`} ><img src={dz_image} alt="Project Page for DangerZone"/></a>}
                            headliner={<a href="https://gitlab.com/vphan6896/DangerZone/">DangerZone</a>}
                            descrip={<div>Website consolidating health and danger statistics of many cities
                                <br></br><br></br>
                                <a href="https://www.youtube.com/watch?v=SyOgSfFRq1g">Video Link</a>
                                <br></br><br></br><br></br>
                                <a>#software</a></div>}
                        />
                        <Card image={<a href={`https://github.com/vphan6896/apex-stats-2-public`} ><img src={al_image} alt="Project Page for Apex Legends Stats"/></a>}
                            headliner={<a href="https://github.com/vphan6896/apex-stats-2-public">Apex Legends Stats</a>}
                            descrip={<div>Cloud focused solution utilizing Jenkins X on an Azure Kubernetes cluster
                                <br></br><br></br>
                                <a href="https://www.youtube.com/watch?v=g6l3LZFDMCE">Video Link</a>
                                <br></br><br></br>
                                <a>#software</a></div>}
                        />
                        </div>
                    </div>
                    
                )
            }}></Route>
            <Route path="*" ><h1 className="has-text-white title">This appears to be an invalid page.</h1></Route>
        </Switch>
    )
}

export default Projects;