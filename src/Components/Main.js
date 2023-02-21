import React from 'react';
import '../stylesheets/mystyles.css';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { ProjectListDisplay } from './ProjectListDisplay';
import { BigCardDisplay } from './BigCardDisplay';
import { About } from './About';
import { StreetPong } from './Projects/StreetPong';
import { Clapsr } from './Projects/Clapsr';
import { ComputingVR } from './Projects/ComputingVR';
import { CourseReqr } from './Projects/CourseReqr';
import { FoldingDimension } from './Projects/FoldingDimension';
import { OrigamiZoo } from './Projects/OrigamiZoo';
import { ResearchPublications } from './Projects/ResearchPublications';
import { Salus } from './Projects/Salus';
import { Theremin } from './Projects/Theremin';
import { WhatIsSound } from './Projects/WhatIsSound';
import { Website } from './Projects/Website';
import { MEMS } from './Projects/MEMS';
import { IBM } from './Projects/IBM';
import { BrokenLink } from './BrokenLink';

// const location = useParams();
// let leftButtonName = 'About';
// let leftButtonPath = '/about';

export class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Link className="main-title" to="/">
                        <div className="main-title">
                            <h1>Leanna Pancoast</h1>
                        </div>
                    </Link>
                    <div className="nav-bar-container">
                        <div className="w3-container nav-bar">
                            <div className="w3-container nav-item" id="left-button">
                                <Switch>
                                    <Route exact path='/'>
                                        <Link to='/about'><button className='w3-button nav-button'>About</button></Link>
                                    </Route>
                                    <Route path='/'>
                                        <Link to='/'><button className='w3-button nav-button'>Projects</button></Link>
                                    </Route>
                                </Switch>
                            </div>
                            <div className="w3-container nav-item" id="contact" >
                                <a href='https://www.linkedin.com/in/lpancoast/' className='w3-button nav-button'>Contact</a>
                            </div>
                        </div>
                    </div>
                    <BigCardDisplay>
                        <div>
                            <Switch>
                                <Route exact path="/clapsr">  <Clapsr /> </Route>
                                <Route exact path="/computingvr"> <ComputingVR /> </Route>
                                <Route exact path="/coursereqr"> <CourseReqr /> </Route>
                                <Route exact path="/foldingdimensions"> <FoldingDimension /> </Route>
                                <Route exact path="/IBM"> <IBM /> </Route>
                                <Route exact path="/MEMS"> <MEMS /> </Route>
                                <Route exact path="/origamizoo"> <OrigamiZoo /> </Route>
                                <Route exact path="/researchpublications"> <ResearchPublications /> </Route>
                                <Route exact path="/salus"> <Salus /> </Route>
                                <Route exact path="/streetpong"> <StreetPong /> </Route>
                                <Route exact path="/theremin"> <Theremin /> </Route>
                                <Route exact path="/website"> <Website /> </Route>
                                <Route exact path="/whatissound"> <WhatIsSound /> </Route>
                                <Route exact path="/about"> <About /> </Route>
                                <Route exact path="/projects">
                                    <ProjectListDisplay />
                                </Route>
                                <Route exact path="/">
                                    <ProjectListDisplay />
                                </Route>
                                <Route> <BrokenLink /> </Route>
                            </Switch>
                        </div>
                    </BigCardDisplay>
                    <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>
                </div>
            </BrowserRouter>
        );
    }
}
