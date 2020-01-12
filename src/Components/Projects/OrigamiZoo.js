import React from 'react';

export class OrigamiZoo extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="origami-zoo">
          <h1>Origami Zoo</h1>
          <p>A BABY TREX, WHITE AS SNOW, STANDING THERE PATIENTLY. YOU REACH OUT YOUR HAND TO FEEL ITS SKIN... AND IT "BAAAA"S AT YOU?
              ​CREATED FOR CMU CARNIVAL 2015</p>
          <h2>Background</h2>
          <p>The Origami Club wanted to do something for CMU's yearly Spring Carnival, and someone thought that it would be great to make an origami petting zoo.</p>
          <h2>Project</h2>
          <p>We got giant paper (9 ft photo backdrop paper!) and folded giant animals out of them. We put aluminum foil into the animals and used the Capacitive Sense library for Arduino to have the animals make noise when petted. </p>
          <iframe width="80%" height="315" src="https://www.youtube.com/embed/WJp2PrS7NgM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <img src="../../assets/origamiZooSmall.png" alt="Poster of two origami penguins for CMU Carnival 2015."></img>
          <p>Poster designed by Chris Perry.
             Featuring two penguins, designed by Hadi Tahir, folded by Sean Yen.</p>
          <img src="../../assets/origamiZooAnimals.jpg" alt="Finished large scale origami animals."></img>
          <p>Finished large scale origami animals</p>
          <iframe width="80%" height="315" src="https://www.youtube.com/embed/0U3elwxlHDI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
  }
}
