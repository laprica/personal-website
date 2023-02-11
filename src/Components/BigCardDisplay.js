import React from 'react';

export class BigCardDisplay extends React.Component {
  render(){
      return (
            <div className="w3-card w3-animate-bottom big-card">
                {this.props.children}
            </div>
    );
  }
}
