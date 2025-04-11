import React from 'react';

export class MRIMotionTracker extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="clapsr">
          <h1>MRI Motion Tracker System</h1>
          <p>I did some work with the Center for Biomedical Imaging at NYU Langone.</p>
          <p>Apparently if you remove the magnetic materials (Ni, Iron from batteries and capacitors mostly), then you can put electronics inside of the MRI machine.</p>
          <p>There's also a waveguide that lets stuff out of the MRI room. Was able to setup a Wi-Fi system to track patient motion with an accelerometer talking to a Raspberry Pi over MQTT.</p>
          <p>You can read more information <a href="https://www.opensourceimaging.org/project/mri-compatible-wireless-sensors/">here</a>.</p>
          <p>I presented at <a href="https://cds.ismrm.org/protected/21MProceedings/PDFfiles/0566.html">ISMRM</a>.</p>
          <p>And a PhD student wrote a paper <a href="https://nyuscholars.nyu.edu/en/publications/preliminary-experience-with-three-alternative-motion-sensors-for-">here</a>.</p>
          <img src="../assets/mriSystem.png"></img>
        </div>
    );
  }
}
