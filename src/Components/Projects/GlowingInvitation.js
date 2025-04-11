import React from 'react';

export class GlowingInvitation extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="clapsr">
          <h1>Glowing Invitations</h1>
          <p>As part of my wedding, I created PCB invitations. I used two ICs - a capactive sensor IC as well as a LED driver IC in order to make a board that lights up when you grab onto it.</p>
          <p>I took advantage of black solder mask with white silkscreen and ENIG gold to make (in my opinion... and a few others...) a very pretty printed circuit board that also served as a very beautiful wedding invitation.</p>
          <p>I would love to make them for other people - please share <a href="https://solidmirage.store/products/glowing-wedding-invitations">my store</a> with others that might be interested and not doing the layout themselves!</p>
        </div>
    );
  }
}
