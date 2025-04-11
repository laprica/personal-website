import React from 'react';

export class Rondo extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="rondo">
          <h1>Rondo</h1>
          <ul>
          <li>Electrical, firmware, and software consultant for a complex motor system to bend heater wire.</li>
          <li>Designed and tested PCBs for motor control and serial communication.</li>
          <li>Instructed on software best-practices for C code readability and management</li>
          <li>Developed C/Arduino code for Teensy microcontroller to control motors and read analog sensors.</li>
          <li>Made Python GUI to let technicians run system without command line interface.</li>
          <li>The second picture below is from <a href="https://www.youtube.com/watch?v=JVPXkruXZg8">Rondo's Youtube Channel</a>. I worked on automating the bending of the "toaster wire" to fit into the slots in the bricks.</li>
          </ul>
          
          <img src="../../assets/rondoBrick1.png" alt=""></img>
          <img src="../../assets/rondoBrick2.png" alt=""></img>
          
        </div>
    );
  }
}
