import React from 'react';

export class ProjectDisplay extends React.Component {
    render(){
        return(
            <div class="w3-card card" >
                <div class="card-left">
                    <img class="w3-circle project-picture" src={require("./assets/profilePic.jpg")} />
                </div>
                <div class="card-right">
                    <h3 class="project-title">title</h3>
                    <div class="project-desc">Sit est ad tempor nostrud ut labore ea commodo minim aute. Ipsum cillum commodo nisi qui nostrud deserunt ipsum laborum. Anim ipsum exercitation fugiat consectetur.</div>
                </div>
                
                
            </div>
        )
    }
}