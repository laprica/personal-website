import React from 'react';

export class Website extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="clapsr">
          <h1>This Website</h1>
          <p>Hey, I made this website from scratch using React. Still working on it, but it exists!</p>
          <p>Last updated 24 Jan 2020.</p>
          
          {/* <div className="w3-display-container">
            <div className="w3-card to-do-list">
            <h3>Website to-do list:</h3>
                <ul>
                    <li>Improve the copy/descriptions of projects. Will take a few iterations until I'm satisfied. Wonder if it'll follow Brikeman's <a href="https://www.ybrikman.com/writing/2018/08/12/the-10-to-1-rule-of-writing-and-programming/">10:1 rule</a>.</li>
                </ul>
            <h3>Website to-done list and how:</h3>
            <ul>
                <li>Fix the YouTube video embed heights. Old question, old answer. <a href="https://stackoverflow.com/questions/24157940/iframe-height-auto-css">The StackOverflow question I found</a> and <a href="https://www.h3xed.com/web-development/how-to-make-a-responsive-100-width-youtube-iframe-embed">the solution</a> referenced in the answer</li>
                <li>Made the back button <em>mostly</em> work to navigate through different projects.</li>
            </ul>
            </div>
          </div>           */}
        </div>
    );
  }
}
