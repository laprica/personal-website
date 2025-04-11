import React from 'react';

export class SeatingChart extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="clapsr">
          <h1>RFID Seating Chart</h1>
          <p>As part of my wedding, I created an RFID interactive seating chart. Each guest has a card with their name and table number on it. When they press the card upon a particular spot, a path along a floor map shows the way to their seat.</p>
          <p>I used an RFID breakout board and starter code from Adafruit. I changed between using C and python to program each of the people's seats.</p>
          <p>It was a fun challenge to create the mappings of the lights laid out to each person in a repeatable way.</p>
          <p>I used 'christmas tree' light addressable LED 'seeds' that have become fairly popular. They're like LED strips but much more robust.</p>
          <p>I would love to make them for other people - share <a href="https://solidmirage.store/products/glowing-interactive-seating-chart">my store</a> with others!</p>
          <img src="../assets/seatingChart.png"></img>
        </div>
    );
  }
}
