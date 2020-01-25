import React from 'react';

export class FoldingDimension extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="folding-dimension">
          <h1>Folding Into A New Dimension</h1>
          <p>A 5 MINUTE TALK ON THE WONDERS OF ORIGAMI CORNELL SPARK TALKS 2015</p>

          <h2>Background</h2>
          <p>In my first year at Cornell, I participated in Cornell library's <a href="https://www.library.cornell.edu/sparktalks">SPARK (Scholars Presenting About Research and Knowledge) talks</a>, a series of 5 minute talks from current graduate students and postdocs. The theme of the inaugural session was Intersections, and origami fits the theme perfectly, combining both math and art, as well as requiring the use of many intersections of folds in paper.</p>
          <div className="video-container">
            <iframe className="video" src="https://www.youtube.com/embed/esQJQq_f2tY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
    );
  }
}
