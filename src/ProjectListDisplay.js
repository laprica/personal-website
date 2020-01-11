import React from 'react';
import {ProjectDisplay} from './ProjectDisplay.js'

export class ProjectListDisplay extends React.Component {
  render(){
      return (
        <div className="ProjectListDisplay">
            <div class="w3-card big-card w3-animate-bottom">
                <div class="row"><div class="column">
                    <ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                    <div class="column"><ProjectDisplay /></div>
                </div>                
            </div>
        </div>
    );
  }
}
