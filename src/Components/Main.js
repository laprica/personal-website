import React from 'react';
import '../stylesheets/mystyles.css';
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


export class Main extends React.Component {

    constructor(props){
        super(props);
        this.handle_about_click = this.handle_about_click.bind(this);
        // this.handle_other_project_click = this.other_project_click.bind(this);
        this.state={
            displayItem: "Projects",
            leftButtonName: "About"
        }
    }

    handle_about_click =  () => {
        if(this.state.leftButtonName == "About"){
            this.setState({
                displayItem: "About",
                leftButtonName: "Projects"
            })
        }
        if(this.state.leftButtonName == "Projects"){
            this.setState({
                displayItem: "Projects",
                leftButtonName: "About"
            })
        }
    }

    handle_other_project_click = (itemName) => {
        this.setState({
            displayItem: itemName,
            leftButtonName: "Projects"
        });
    }

  render(){
      let toDisplay;

        switch(this.state.displayItem){
            case 'About': toDisplay = <About />; break;
            case 'Projects': toDisplay = <ProjectListDisplay cb={(e)=>{this.handle_other_project_click(e)}} />; break;
            case 'Street Pong': toDisplay = <StreetPong />; break;
            case 'Clapsr': toDisplay = <Clapsr />; break;
            case 'Computing in VR': toDisplay = <ComputingVR />; break;
            case 'Coursereqr': toDisplay = <CourseReqr />; break;
            case 'Folding into a new dimension': toDisplay = <FoldingDimension />; break;
            case 'Origami Zoo': toDisplay= <OrigamiZoo />; break;
            case 'Research Publications': toDisplay = <ResearchPublications />; break;
            case 'Salus': toDisplay = <Salus />; break;
            case 'Theremin': toDisplay = <Theremin />; break;
            case 'What is sound?': toDisplay = <WhatIsSound />; break;

        }
    //   if(this.state.displayItem){
    //       this.state.toDisplay = <About />;
    //       this.state.leftButtonName = "Projects";
    //   }
    //   else{
    //       this.state.toDisplay = <ProjectListDisplay />
    //       this.state.leftButtonName = "About";
    //   }
      return (
        <div className="App">
        <div className="w3-display-container profile-pic" style={{}}>
          {/* <img src={"/assets/profilePic.jpg"} alt="Leanna Pancoast" className="w3-image w3-circle"></img> */}
          {/* <div className="w3-display-bottomleft w3-container">
              <button className="w3-button w3-yellow">About</button></div>
          <div className="w3-display-bottomright w3-container">
              <button className="w3-button w3-yellow">Contact</button>
          </div> */}
        </div>
        <h1 className="mainTitle">Leanna Pancoast</h1>
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
            {toDisplay}
        </BigCardDisplay>
        {/* <BigCardDisplay>
          <ProjectListDisplay />
        </BigCardDisplay>
        
        <About /> */}
        <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>
      </div>
    );
  }
}
