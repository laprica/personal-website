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
          Leanna is currently looking for a new job opportunity.

          Her previous work experience includes working at IBM Research in Yorktown Heights, NY advancing healthcare devices. Papers and patent pending.

          Most projects showcased on this site come from her side projects done at Carnegie Mellon University (CMU) and Cornell University.
          She graduated with a Bachelor of Science from Carnegie Mellon University in Electrical and Computer Engineering with a Biomedical Engineering minor. She continued academia at Cornell University with a Master's of Science from Cornell University working under Amit Lal on MEMS devices.

          She comes from Houston, TX, from which she misses the delicious BBQ and Whataburger.
          ​
          She explores hobby electronics with an Arduino and a plethora of LEDs as well as different aspects of the ancient Japanese art, origami.
          Leanna loves to find unique solutions with her diverse background.

          Outside of research and tinkering, Leanna can be found dancing with the local swing, salsa, or ballroom community.

          </div>
         
        </div>
    );
  }
}
