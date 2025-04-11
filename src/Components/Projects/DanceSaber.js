import React from 'react';

export class DanceSaber extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="dancesaber">
          <h1>DanceSaber</h1>

          <h2>Background</h2>
          <p>Beat Saber is a VR rhythm game where you have to slash colored blocks in time to music. It's a very popular game and is probably the main reason why I got a VR headset.</p>
          <p>There are many people that enjoy the game due to the fast-techincal accomplishments people can do, but there is also a cohort of people that like dancing while they play, using the songs and beatmaps as guides to dancing along.</p>
          <p>Back a few years ago there was a website called dancesaber.com (unfortunately it isn't run anymore) that compiled a list of BeatSaber songs that had a particularly dance-y vibe and pattern to them.</p>
          <p>It was a little similar to the <a href="https://bsaber.com/">BeastSaber website but with a focus on dance-y maps, while the moderators of Beast Saber seemed to focus more on techincal maps - where the notes come at you very quickly.</a></p>
          <p>They wanted a way to label each of the songs with the genres in order to create better playlists of music. The original goal was to have a list of volunteers give labels for each of the songs manually, which would have worked well. However I knew Spotify had an API with search functionality and a lot of metadata around each song, so I ended up making a little Python script to go through a list provided by the website makers and give an initial population of the list.</p>
          <p>You can check out the code <a href="https://github.com/lapricap/beatsaber_spotipy/tree/main">on my Github</a></p>
          <br/><br/><br/>
          <img src="../../assets/dancesaber.png" alt="neon logo with words 'Dance Saber' of colors matching BeatSaber logo"></img>
        </div>
    );
  }
}
