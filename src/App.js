import React from 'react';
import './App.css';
import './stylesheets/mystyles.css';
import {ProjectListDisplay} from './ProjectListDisplay.js';

function App() {
  return (
    <div className="App">
      <h1 className="mainTitle">Leanna Pancoast</h1>
      <div className="w3-display-container w3-center" style={{width:"50%", transform:"translateX(50%)"}}>
        <img src={"/assets/profilePic.jpg"} alt="Leanna Pancoast" className="w3-image w3-circle"></img>
        {/* <div className="w3-display-bottomleft w3-container">
            <button className="w3-button w3-yellow">About</button></div>
        <div className="w3-display-bottomright w3-container">
            <button className="w3-button w3-yellow">Contact</button>
        </div> */}
      </div>
      <div className="w3-container nav-bar">
          <div className="w3-container nav-item" id="about">
              <button className="w3-button w3-yellow ">About</button>
          </div>        
          <div className="w3-container nav-item" id="contact">
              <button className="w3-button w3-yellow">Contact</button>
          </div>
      </div>
      
      <ProjectListDisplay />
    </div>
  );
}

export default App;
