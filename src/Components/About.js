import React from 'react';

export class About extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom card-about" id="about-card">
          <h1>About Leanna</h1>
          <div className="card-left-about">
            <img className="about-picture" src="../assets/profilePic.jpg" alt="Leanna in front of Ithaca Falls"/>
          </div>
          <div className="card-right-about">
          Leanna is currently looking for a new job opportunity. You can <a href="../assets/LeannaPancoast_2024.pdf">download her resume</a> (last updated 10 April 2025).

          <p>Enjoy looking on this site for more information on projects on the resume, as well as those that didn't make it to the resume.</p>

          <p>She comes from Houston, TX, from which she misses the delicious BBQ and Whataburger.</p>

          <p>She explores hobby electronics with an Arduino and a plethora of LEDs as well as different aspects of the ancient Japanese art, origami.
          Leanna loves to find unique solutions with her diverse background.</p>

          <p>Outside of research and tinkering, Leanna can be found dancing with the local swing, salsa, or ballroom community.</p>

          </div>
         
        </div>
    );
  }
}
