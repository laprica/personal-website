import React from 'react';

export class Theremin extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="theremin">
          <h1>Theremin</h1>
          <p>WAVE YOUR HAND NEAR THIS WONDROUS INSTRUMENT TO MAKE MUSIC IN AIR ​BUILD18 2012</p>

          <h2>Background</h2>
          <p>This was my first Build18 project. I had heard of the mysterious, touchless instrument and wanted to make one. As sophomore Electrical and Computer Engineering students at CMU, my team and I did not really know what we were doing for that week.</p>

          <h2>Project</h2>
          <p>I worked closely with Charles Chong, David Lu, and Bailey Forrest, all fellow sophomore ECE's to make a theremin.
            We attempted to make a pure analog theremin, but were unable to do so within the week. Halfway through we were able to switch gears and make an Arduino based theremin instead. 

            This links closely to the origami zoo project that I worked on, though by that time someone else was smart enough to write a Capacitive sense library for the Arduino community to use.</p>
          
            <div className="video-container">
              <iframe className="video" src="https://www.youtube.com/embed/Wqgt1ztL9Oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <p>Here is our work in progress with an Arduino based theremin based off <a href="http://interface.khm.de/index.php/lab/interfaces-advanced/theremin-as-a-capacitive-sensing-device/">this work.</a></p>

        </div>
    );
  }
}
