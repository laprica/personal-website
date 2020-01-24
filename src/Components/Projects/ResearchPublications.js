import React from 'react';

export class ResearchPublications extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="research-publications">
          <h1>Research Publications</h1>
          <p>Patent and future publications currently in progress based on work done at IBM. In the meantime, you can check out other things I have worked on.</p>
          <a href="https://ieeexplore.ieee.org/abstract/document/8811094">Novel Packaging Structure and Processes for Micro-TFB (Thin Film Battery) to Enable Miniaturized Healthcare Internet-of-Things (IoT) Devices</a>
          <br/>
          <a href="https://ieeexplore.ieee.org/abstract/document/8870800">NEMS Electrostatic Resonant Near-Zero Power Resistive Contact RF Wake-Up Switch with PT FIB Contact</a>
          <br/>
          <a href="https://ieeexplore.ieee.org/abstract/document/7863640">Zero-power sensors with near-zero-power wakeup switches for reliable sensor platforms</a>
          <br/>
          <a href="https://www.researchgate.net/publication/327764446_Clinical_Validation_of_the_Program_for_Improving_and_Managing_the_Environment_Sleep_Monitoring_System">Clinical Validation of the Program for Improving and Managing the Environment Sleep Monitoring System</a>

        </div>
    );
  }
}
