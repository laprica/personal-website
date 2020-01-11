import React from 'react';
import {ProjectDisplay} from './ProjectDisplay.js'
import data from "../assets/projects.json";

export class ProjectListDisplay extends React.Component {
  render(){
      return (
        <div className="row">
            {
                data.Projects.map((project, i) => {
                    return (
                        <div className="column" key={'project_'+i}><ProjectDisplay title={project.title} desc={project.description} img={project.picture} url={project.url} /></div>
                    );
                })
            }
        </div>
    );
  }
}
