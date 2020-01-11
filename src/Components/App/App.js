import React from 'react';
import './App.css';
import '../../stylesheets/mystyles.css';
import {ProjectListDisplay} from '../ProjectListDisplay';
import {BigCardDisplay} from '../BigCardDisplay';

function App() {

  
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
            <div className="w3-container nav-item" id="about">
                <button className="w3-button w3-yellow nav-button">About</button>
            </div>        
            <div className="w3-container nav-item" id="contact" >
                <a href='https://www.linkedin.com/in/lpancoast/' className='w3-button nav-button'>Contact</a>
            </div>
        </div>
      </div>
      <BigCardDisplay>
        <ProjectListDisplay />
      </BigCardDisplay>
      
      <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>
    </div>
  );
}

export default App;
