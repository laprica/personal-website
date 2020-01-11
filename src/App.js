import React from 'react';
import './App.css';
import './stylesheets/mystyles.css';
import {ProjectListDisplay} from './ProjectListDisplay.js';

function App() {
  return (
    <div className="App">
      <div className="w3-display-container w3-center" style={{width:"50%", transform:"translateX(50%)"}}>
        <img src={"/assets/profilePic.jpg"} alt="Leanna Pancoast" className="w3-image w3-circle"></img>
        {/* <div className="w3-display-bottomleft w3-container">
            <button className="w3-button w3-yellow">About</button></div>
        <div className="w3-display-bottomright w3-container">
            <button className="w3-button w3-yellow">Contact</button>
        </div> */}
      </div>
      <div className="w3-container nav-bar w3-display-container">
          
          <div className="w3-container nav-item nav-item-about">
              <button className="w3-button w3-yellow ">About</button>
          </div>        
          <div className="w3-center nav-item nav-item-name">Leanna Pancoast</div>
          <div className="w3-container nav-item nav-item-contact">
              <button className="w3-button w3-yellow">Contact</button>
          </div>
      </div>
      
      <ProjectListDisplay />
    </div>
  );
}

export default App;
