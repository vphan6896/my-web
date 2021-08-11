import pvd_image from './phonevideodoctor.png'
import {Link, Switch, useRouteMatch, Route} from "react-router-dom";
import Pvd from './Pvd.js'
import Card from '../Cards/Card'
import dz_image from './dangerzone.png'
import al_image from './Apex-Legends-Stats.png'
import '../Home/Home.css'


function Projects() {
    var { path, url } = useRouteMatch();
    //Need to make that first route scale with multiple projects, else we have to make multiple routes
    return (
        <Switch>
            <Route path="/projects/pvd" component={Pvd}></Route>
            <Route exact path="/projects" exact render={ () => {
                return(
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
                )
            }}></Route>
            <Route path="*" ><h1 className="has-text-white title">This appears to be an invalid page.</h1></Route>
        </Switch>
    )
}

export default Projects;