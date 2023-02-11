import React from 'react';
import '../stylesheets/mystyles.css';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import {ProjectListDisplay} from './ProjectListDisplay';
import {BigCardDisplay} from './BigCardDisplay';
import {About} from './About';
import {StreetPong} from './Projects/StreetPong';
import {Clapsr} from './Projects/Clapsr';
import {ComputingVR} from './Projects/ComputingVR';
import {CourseReqr} from './Projects/CourseReqr';
import {FoldingDimension} from './Projects/FoldingDimension';
import {OrigamiZoo} from './Projects/OrigamiZoo';
import {ResearchPublications} from './Projects/ResearchPublications';
import {Salus} from './Projects/Salus';
import {Theremin} from './Projects/Theremin';
import {WhatIsSound} from './Projects/WhatIsSound';
import {Website} from './Projects/Website';
import {MEMS} from './Projects/MEMS';
import {IBM} from './Projects/IBM';
import { BrokenLink } from './BrokenLink';


export class Main extends React.Component {
    componentDidMount() {
        window.onpopstate = (event) => {
          this.set_left_button()
        };
      }

    constructor(props){
        super(props);
        this.set_left_button = this.set_left_button.bind(this);
        this.state={
            leftButtonName: "About",
            leftButtonPath: "/about"
        };        

    }

    set_left_button =  () => {
        if(this.state.leftButtonName === "About"){
            this.setState({
                leftButtonName: "Projects",
                leftButtonPath: "/"
            });
        }
        if(this.state.leftButtonName === "Projects"){
            this.setState({
                leftButtonName: "About",
                leftButtonPath: "/about"
            });
        }
    }

  render(){
      return (
        <BrowserRouter>
            <div className="App">
                <Link to="/">
                    <div className="main-title" onClick={()=>this.set_left_button()}>
                        <h1>Leanna Pancoast</h1>
                    </div>
                </Link>
                <div className="nav-bar-container">
                    <div className="w3-container nav-bar">
                        <div className="w3-container nav-item" id="left-button">
                        <Link to={this.state.leftButtonPath}><button onClick={()=>{this.set_left_button()}} className='w3-button nav-button'>{this.state.leftButtonName}</button></Link>
                        </div>        
                        <div className="w3-container nav-item" id="contact" >
                            <a href='https://www.linkedin.com/in/lpancoast/' className='w3-button nav-button'>Contact</a>
                        </div>
                    </div>
                </div>
                <BigCardDisplay>
                    <div>
                        <Switch>
                            <Route path="/clapsr">  <Clapsr/> </Route>
                            <Route path="/computingvr"> <ComputingVR /> </Route>
                            <Route path="/coursereqr"> <CourseReqr /> </Route>
                            <Route path="/foldingdimensions"> <FoldingDimension /> </Route>
                            <Route path="/IBM"> <IBM /> </Route>
                            <Route path ="/MEMS"> <MEMS /> </Route>
                            <Route path="/origamizoo"> <OrigamiZoo /> </Route>
                            <Route path="/researchpublications"> <ResearchPublications /> </Route>
                            <Route path="/salus"> <Salus /> </Route>
                            <Route path="/streetpong"> <StreetPong /> </Route>
                            <Route path ="/theremin"> <Theremin /> </Route>
                            <Route path="/website"> <Website /> </Route>
                            <Route path="/whatissound"> <WhatIsSound /> </Route>
                            <Route path="/about"> <About/> </Route>
                            <Route path="/projects">
                                <ProjectListDisplay cb={(e)=>{this.set_left_button(e)}} />
                            </Route>
                            <Route path="/">
                                <ProjectListDisplay cb={(e)=>{this.set_left_button(e)}} />
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
