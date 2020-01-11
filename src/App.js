import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 class="w3-center">Leanna Pancoast</h1>
      <div class="w3-display-container w3-center" style={{width:"50%", transform:"translateX(50%)"}}>
        <img src={require("./assets/profilePic.jpg")} alt="picture of Leanna Pancoast" class="w3-image w3-circle"></img>
        <div class="w3-display-bottomleft w3-container">
            <button class="w3-button w3-yellow">About</button></div>
        <div class="w3-display-bottomright w3-container">
            <button class="w3-button w3-yellow">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default App;
