import React from 'react';
import '../stylesheets/mystyles.css';
import { Switch, Route, NavLink, BrowserRouter, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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

    constructor(props){
        super(props);
        this.handle_about_click = this.handle_about_click.bind(this);
        // this.handle_other_project_click = this.other_project_click.bind(this);
        console.log("location is: " + window.location.pathname);
        if(window.location.pathname=='/' || window.location.pathname=="/projects"){
            this.state={
                displayItem: <Redirect to="/" push />,
                leftButtonName: "About"
            }
        }
        else{
            this.state={
                displayItem: <Redirect to={window.location.pathname} push />,
                leftButtonName: "Projects"
            }
        }
        
    }
    
    handle_title_click = () => {
        this.setState({
            displayItem: <Redirect to="/" push />,
            leftButtonName: "About"
        })
    }

    handle_about_click =  () => {
        if(this.state.leftButtonName == "About"){
            this.setState({
                // displayItem: "About",
                displayItem: <Redirect to="/about" push />,
                leftButtonName: "Projects"
            });
        }
        if(this.state.leftButtonName == "Projects"){
            this.setState({
                // displayItem: "Projects",
                displayItem: <Redirect to="/projects" push />,
                leftButtonName: "About"
            });
        }
    }

    handle_other_project_click = (itemName) => {
        // let history = useHistory();
        this.setState({
            // displayItem: itemName,
            displayItem: <Redirect to={itemName} push />,
            leftButtonName: "Projects"
        });
        // props.history.push("/foo");
    }

  render(){
      let toDisplay;

        // switch(this.state.displayItem){
        //     case 'About': toDisplay = <About />; break;
        //     // case 'Projects': toDisplay = <ProjectListDisplay cb={(e)=>{this.handle_other_project_click(e)}} />; break;
        //     case 'Projects': toDisplay = <Redirect to="/projects"/>; break;
        // // case 'Projects': toDisplay = <Route path="/projectlist" render={(props) => <ProjectListDisplay cb={(e,props)=>{this.handle_other_project_click(e,props)}} />} />; break;
        //     // case 'Street Pong': toDisplay = <Route exact path="/streetpong" component={StreetPong} />; break;
        //     case 'Street Pong': toDisplay = <StreetPong/>; break;
        //     // case 'Clapsr': toDisplay = <Route exact path="/clapsr" component={Clapsr} />; break;
        //     // case 'Clapsr': toDisplay = <Clapsr />; break;
        //     case 'Clapsr':  toDisplay= <Redirect to="/clapsr" />; break;
        //     case 'Computing in VR': toDisplay = <ComputingVR />; break;
        //     case 'Coursereqr': toDisplay = <CourseReqr />; break;
        //     case 'Folding into a new dimension': toDisplay = <FoldingDimension />; break;
        //     case 'Origami Zoo': toDisplay= <OrigamiZoo />; break;
        //     case 'Research Publications': toDisplay = <ResearchPublications />; break;
        //     case 'Salus': toDisplay = <Salus />; break;
        //     case 'Theremin': toDisplay = <Theremin />; break;
        //     case 'What is sound?': toDisplay = <WhatIsSound />; break;
        //     case 'This Website': toDisplay = <Website />; break;
        //     case 'MEMS Fabrication': toDisplay = <MEMS />; break;
        //     case 'IBM Work': toDisplay = <IBM />; break;

        // }
      return (
        <BrowserRouter>
            <div className="App">
            <div className="w3-display-container profile-pic" style={{}}>
              {/* <img src={"/assets/profilePic.jpg"} alt="Leanna Pancoast" className="w3-image w3-circle"></img> */}
              {/* <div className="w3-display-bottomleft w3-container">
                  <button className="w3-button w3-yellow">About</button></div>
              <div className="w3-display-bottomright w3-container">
                  <button className="w3-button w3-yellow">Contact</button>
              </div> */}
            </div>
            <div className="main-title" onClick={()=>this.handle_title_click()}>
                <h1>Leanna Pancoast</h1>
            </div>
            <div className="nav-bar-container">
              <div className="w3-container nav-bar">
                  <div className="w3-container nav-item" id="left-button">
                  <button onClick={()=>{this.handle_about_click()}} className='w3-button nav-button'>{this.state.leftButtonName}</button>
                  </div>        
                  <div className="w3-container nav-item" id="contact" >
                      <a href='https://www.linkedin.com/in/lpancoast/' className='w3-button nav-button'>Contact</a>
                  </div>
              </div>
            </div>
            <BigCardDisplay>
                {this.state.displayItem}
                <div>
                    <Switch>
                        <Route path="/clapsr"> <Clapsr/> </Route>
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
                            <ProjectListDisplay cb={(e)=>{this.handle_other_project_click(e)}} />;
                        </Route>
                        <Route path="/">
                            <ProjectListDisplay cb={(e)=>{this.handle_other_project_click(e)}} />;
                        </Route>
                        <Route><BrokenLink /> </Route>
                    </Switch>
                </div>
            </BigCardDisplay>
            <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>
          </div>
        </BrowserRouter>
    );
  }
}
