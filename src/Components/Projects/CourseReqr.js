import React from 'react';

export class CourseReqr extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="coursereqr">
          <h1>CourseReqr</h1>
          <p>VISUALIZE CLASS PRE-REQUISITE TREES  ​CMU TARTANHACKS 2014</p>
          
          <h2>Background</h2>
          <p><a href="http://tartanhacks.com/">TartanHacks</a> is a student run software hackathon at CMU. It's 24 hours of coding with a group to make something cool or interesting.
            I enjoyed taking this class, what can I take after this? I want to take this capstone, what classes do I need for it?
            Coursereqr can help out by visualizing class requirements in a visual tree.</p>
          
          <h2>Project</h2>
          <p>The goal of this project is to create a visualization of what route of classes someone is able to take. When looking at courses to make a 4 year plan, it's really easy to see the pre-requisites (courses you need before the current one), but it's very difficult to see what the "post-requisites" (courses that the course you are looking at is a pre-requisite to) are. We combed through CMU's course schedule to get a list of the prereqs, and mapped them properly to the postreqs. We used d3.js to make the pretty visualization of the tree hierarchy of classes.</p>

          <img src="../../assets/coursereqr_image.png"></img>
          <p>Screenshot of our final project. The orange bubble is the currently selected class. The blue bubbles indicate what you can take after you have taken the selected class, or post-requisites as we called them. The orange bubbles indicate the pre-requisites for the selected class.</p>
        </div>
    );
  }
}
