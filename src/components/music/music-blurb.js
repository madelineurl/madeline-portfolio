import React from "react";

const MusicBlurb = () => {
  return (
    <>
    <div className='music-blurb flex'>
      <h3>madeline - dj/producer/radio-host </h3>
      <div>I taught myself to DJ after getting involved with the radio station at Northwestern, and have been DJing for seven years since. Learning to DJ and set up equipment helped me get familiar with music technology and gain confidence in my technical abilities. After a failed attempt to become the station engineer upon graduation, I got an unexpected role as an electronics repair technician. I worked part-time as a freelance DJ and at <a href='https://www.gramaphonerecords.com/' alt='link to gramaphone records website' className='link'>Gramaphone Records</a> on the weekends while repairing electronics during the week. </div>
      <div>I was the General Manager at WNUR for almost two years. I got my first taste of web development overhauling the station's website during that time. I've hosted many shows there over the years, and continue to play music on the station as a community DJ.
      </div>
      <div>I've played guitar on and off since I was twelve, and I recently committed to teaching myself music theory on piano. I've since been producing more original work in the form of ambient synth pieces, deep vocal house EPs, and upcoming post-punk drum machine projects.
      </div>
      <div>
        <h4 className='flex'>Some venues I've played around Chicago: </h4>
        <ul className='venues flex'>
          <a
            href='https://www.smartbarchicago.com/'
            alt='smartbar-website'
            target="_blank"
            rel="noreferrer"
          >
            <li>Smartbar</li>
          </a>
          <a href='https://www.berlinchicago.com/index.html' alt='smartbar-website'  target="_blank"
            rel="noreferrer">
            <li>Berlin</li>
          </a>
          <a href='https://www.punchhousechicago.com/' alt='punch-house-website'  target="_blank"
            rel="noreferrer">
            <li>Punch House</li>
          </a>
          <a href='http://www.aragonballroom.org/' alt='aragon-website' target="_blank"
            rel="noreferrer">
            <li>The Aragon</li>
          </a>
          <a href='https://blockclubchicago.org/2020/11/13/dannys-tavern-closed-coronavirus-bucktown-bar-1935-dickens/' alt='dannys-closing-article'  target="_blank"
            rel="noreferrer">
            <li>Danny's Tavern</li>
          </a>
          <a href='https://hideoutchicago.com/' alt='hideout-website'  target="_blank"
            rel="noreferrer">
            <li>The Hideout</li>
          </a>
          <a href='http://cafemustache.com/' alt='mustache-website'  target="_blank"
            rel="noreferrer">
            <li>Cafe Mustache</li>
          </a>
        </ul>
      </div>
    </div>
    </>
  );
};

export default MusicBlurb;
