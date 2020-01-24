import React from 'react';
import { Redirect } from 'react-router-dom';

export class ProjectDisplay extends React.Component {

    sendDatax = (itemName)=>  {
        this.props.cb(itemName);
    }

    render(){
        return(
            <div onClick={() => {this.sendDatax(this.props.title)}} className="w3-card card card-button" >
                <div className="card-left">
                    <img className="project-picture" src={this.props.img} alt={this.props.desc} />
                </div>
                <div className="card-right">
                    <h3 className="project-title">{this.props.title}</h3>
                    <div className="project-desc">{this.props.desc}</div>
                </div>                
            </div>
        )
    }
}