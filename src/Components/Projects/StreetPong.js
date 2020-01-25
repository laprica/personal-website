import React from 'react';

export class StreetPong extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="street-pong">
          <h1>Street Pong</h1>
          <p>INSTEAD OF WAITING IDLY TO CROSS THE STREET, WHY NOT PLAY PONG WITH A FELLOW PEDESTRIAN?<br/>
          BUILD 18 2015</p>
          <h2>Background</h2>
          <p>This was a project for Build18 2015. Build18 is a student run hardware hackathon at CMU. </p>
          <h2>Project</h2>
          <p>This idea stems from this German group's project to make a game on the crosswalk to try to prevent accidents. This year Build18 got funding from pcDuino, which we used to make the project. We used the LVDS screen made specifically for pcDuino as well as retro game buttons from Adafruit. The boxes they are in were designed using MakerCase and made of laser cut cardboard. The communication protocol used was ZigBee and the game was programmed in Python. This was really cool because we were able to do a git pull at the Morewood crosswalk.</p>
          <div className="video-container">
            <iframe className="video" src="https://www.youtube.com/embed/SbqVh33VOEU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
          </div>
          <h2>Collaborators</h2>
          <p>I worked with <a href="https://www.linkedin.com/in/justinfrye">Justin Frye</a> and <a href="https://www.linkedin.com/in/spencer-barton-32070540">Spencer Barton</a></p>
        </div>
    );
  }
}
