import React from 'react';
import {ProjectDisplay} from './ProjectDisplay.js'
import data from "../assets/projects.json";
import {Link} from 'react-router-dom';

export class ProjectListDisplay extends React.Component {

  render(){
      return (
        <div className="row">
            {
                data.Projects.map((project, i) => {
                    return (
                        <Link to={project.url} key={'project_'+i}>
                            <div className="column"><ProjectDisplay title={project.title} desc={project.description} img={project.picture} url={project.url} /></div>
                        </Link>
                    );
                })
            }
        </div>
    );
  }
}
