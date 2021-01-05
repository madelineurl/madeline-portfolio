import React from "react";
import { ProjectLinks } from "..";

const Shiftpitch = ({ selected }) => {
  const selectedClass = selected === 'shiftpitch'? 'project-page selected' : 'project-page';

  return (
  <div className={selectedClass}>
      <div className='project-left'>
        <h3>shiftpitch</h3>
        <div>Shiftpitch is a tool for improving rhythm by learning beatmatching. In the early days of DJing, matching tempos with your ears was the only way to blend tracks together seamlessly. Today, there are online tools, computer programs, and digital DJ equipment that teach people how to DJ, but most of them teach DJs to rely on visual cues like waveforms or BPM (beats per minute) counters. Learning to beatmatch with your ears is an invaluable skill as a DJ, and a great way to improve your rhythm more generally -- but learning is difficult without access to turntables. I built Shiftpitch in an effort to make beatmatching more accessible to everyone. </div>
        <ProjectLinks
          videoTitle="Shiftpitch"
          videoURL="https://www.youtube.com/embed/AAS2sIXPpY4"
          github="https://github.com/zelda-capstone/xibis"
          siteURL="https://shiftpitch.herokuapp.com/"
        />
      </div>
      <div className='project-right'>
        <h3>technology</h3>
        <div>This was a solo exploration of the Howler.js audio library, built over four days during my time at Grace Hopper. I used React to write controlled front-end components that manipulated audio volume and pitch/speed rates in response to user input.</div>
        <h3>key takeaway</h3>
        <div>Pick the right tool for the job. This project required multiple audio sources being controlled <em>independently</em> of one another. I initially tried to build this tool using the Tone.js library, but soon realized that Tone lends itself more to creating sounds within a <em>single</em> timeline (i.e. music production).</div>
        <h3>up next</h3>
        <div>Implementing a way to measure success, and enabling players to log in and store data from various sessions in a database.</div>
        </div>
    </div>
  );
};

export default Shiftpitch;