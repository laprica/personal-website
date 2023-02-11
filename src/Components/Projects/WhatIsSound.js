import React from 'react';

export class WhatIsSound extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="what-is-sound">
          <h1>What is Sound?</h1>
          <p>EXPLAIN SOUND TO 11 YEAR OLDS ALAN ALDA FLAME CHALLENGE 2016</p>

          <h2>Background</h2>
          <p>​The Alan Alda Center for Communicating Science at Stony Brook University poses a different question each year for scientists around the world to explain to 11-year-olds. The 2016 question for the Flame Challenge was "What is sound?" I found out about this contest about a month before the deadline, conveniently during winter break. I taught myself Adobe After Effects and made the video below.</p>
          <div className="video-container">
            <iframe className="video" src="https://www.youtube.com/embed/kK7dW7eVAHE" title='WhatIsSoundVideo' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
    );
  }
}
