import React from 'react';

export class Outward extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="outward">
          <h1>Outward - Aperture Platform</h1>
          <ul>
          <li>Wrote bare-metal C firmware for WTM32 ARM Cortex-M4 microcontrollers coordinated LEDs, sensors, motors, and cameras with I2C, SPI, USB protocols to automate pictures of furuniture.</li>
          <li>Created a bootloader to allow remote udates in the field.</li>
          <li>Wrote drivers from datasheets to talk to sensors over I2C, SPI.</li>
          <li>Debugged new PCBoards with voltumeters, oscilloscopes, logic analyzers.</li>
          <li>Coordinated software, mechanical, and electrical engineers to make a new camera zoom controller.</li>
          </ul>
          
          <p>It was a fun time until they <a href="https://www.furnituretoday.com/technology/outward-closes-aperture-platform-and-services/">let us all go.</a></p>
          <p>You can see below the light panels that are distributed around the 'rig', or mini room that is setup with a bunch of aluminum posts.</p>
          <p>There are two cameras at the front attached to motors that let them go really high and really low, as well as tilt up/down.</p>
          <p>On the right there is a preview TV with guidelines so that there can be consistent placement of furniture for consistent photos to show on the client's website, magazines, etc.</p>
          <p>One of the lower pictures shows a PC on the outside that is used to interface with the camera and all of the motors.</p>
          <p>Fun thing was debugging the rigs out in the field with the amazing field team.</p>
          <p>Maybe will put photos from that up later.(last updated 4/10/2025)</p>
          <h2>Pictures</h2>
          <img src="../../assets/insideRig.jpg" alt="A four chair dining table is inside of a gray room with light panels all around and camera in the front of the room"></img>
          <img src="../../assets/outwardRig1.webp" alt="Image of Aperture rig"></img>
          <img src="../../assets/outwardRig2.webp" alt="Image of Aperture rig with a piece of furniture inside."></img>
          
        </div>
    );
  }
}
