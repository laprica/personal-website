import React from 'react';

export class Clapsr extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="clapsr">
          <h1>Clapsr</h1>
          <p>COMBINE ORIGAMI AND ELECTRONICS <br/>​CMU BUILD18 2015</p>

          <h2>Background</h2>
          <p>This is a project which combines my love of origami with my desire to put LEDs on things. I wanted to make a foldable LED screen. Exploring this lead me to discover a vastly unexplored frontier of thick origami. It started as a Build18 2014 project and grown to be so much more.</p>
          <img src="../assets/clapsr_cardboard.gif" alt="Gif of folding cardboard with a modified miura ori crease pattern cut into it, showing how it can expand and contract."></img>
          <br/><br/><br/>
          <img src="../../assets/clapsr_clear_acrylic.gif" alt="Gif of acrylic parallelograms held together with masking tape. One corner is taped to
            the table and a single hand is used to expand and collapse the acrylic parallelograms."></img>

          <h2>Project</h2>
          <p>Folding paper is easy when compared to folding cardboard. New rules about folding have to be considered when taking the thickness of the material you are working with into account. I had to find these new rules if I wanted to be able to fold LED screens, and found quickly that there is not much literature out there.</p>
          <p>There are several papers by Lang and Tomohiro Tachi and some other guys talking about different ways to take this thickness into account. </p>

          <img src="../../assets/clapsr_led_pcb.gif" alt="Gif of leds flashing on a collection of pcbs connected together with conductive thread."></img>
        </div>
    );
  }
}
