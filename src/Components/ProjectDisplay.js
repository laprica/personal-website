import React from 'react';

export class ProjectDisplay extends React.Component {
    

    render(){
        return(
            <div onClick={() => window.open(this.props.url, "_blank")} className="w3-card card card-button" >
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