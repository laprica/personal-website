import React from 'react';

export class LaundryDetector extends React.Component {
  render(){
      return (
        <div className="w3-card w3-animate-bottom full-project-card" id="laundrydetector">
          <h1>Laundry Detector</h1>

          <p>Wow, what a great picture. There's a reason why I'm an engineer and not a professional photographer haha</p>
          <p>I am using an ESP32 microcontroller board with a microphone and a button to be able to connect to cloud services to let my husband and I know that the laundry is done.</p>
          <p>Once the laundry is loaded (either into the washer or the dryer), the person who put the clothes in presses the yellow button. The button press lets the microcontroller know to start 'listening' for silence that indicates that the laundry is done and something needs to happen - either the clothes move from washer to dryer, the dry clothes need to be picked up, or both.</p>
          <p>It started with connecting to AdafruitIO's service which connected to IFTTT to send emails and notifications to our phones.</p>
          <p>Since then, my husband took an old laptop and started up a Home Assistant server. I changed the microcontroller to push to our local Home Assistant server instead.</p>
          <p>Through some more my husband did up on HomeAssistant, our Google Home speaker in our bedroom lets us know that the laundry is done in addition to getting a notification on our phones through the Home Assistant app.</p>
          <p>Slowly making our home smarter and smarter, just in time to be searching for a house of our own...</p>

          <img src="../../assets/laundryDetector1.jpg" alt="microcontroller board inside of a plastic bag being held next to a computer."></img>
        </div>
    );
  }
}
