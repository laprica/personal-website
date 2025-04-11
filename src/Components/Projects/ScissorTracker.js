import React from 'react';

export class ScissorTracker extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="scissortracker">
          <h1>Scissor Tracker</h1>
          <p>When marrying my husband, I joined his friend's traditions, one of which is a type of 'Secret Santa' that they've spun up to be 'Secret Satan' where they give each other fun (sometimes spooky) gifts.</p>
          <p>When I first joined in, the person we got assigned had complained about his sister moving the kitchen scissors to other parts of the house. I fully understood the concern (though later found some other friends think all scissors are the same!)</p>
          <p>Ended up making a fun 'scissor tracker' that used a pair of ESP32s that used Bluetooth strength to see if they got too far apart. One acted as a 'becaon' and should stay in one spot, connected to the internet. When the other one (put onto a pair of scissors) got too far away, then the beacon would ping to IFTTT and then send an email to my friend letting him know that the kitchen scissors have run away again so he can take appropriate action before they are lost forever.</p>
          <p>The 'spooky' part was making a letter in the format of a design doc at work.</p>
        </div>
    );
  }
}
