import React from 'react';
import Image from './image';
import resume from './images/resume.png';
import styles from './modal.module.css';

const About = () => (
  <div className={styles.about}  id='about' >
    <div className={styles.headshotContainer}>
      <Image className={styles.headshot} />
      <img src={resume} alt='resume icon' />
    </div>
    <div>
      <div>I'm Madeline Higgins, a software engineer and radio host + DJ based in Chicago. I design accessible applications that help people connect to their creativity and to each other. </div>
      <div>
      I never thought I could learn to code until I did it, but it makes a lot of sense in retrospect. I've always loved carefully following recipes and instruction manuals, planning out projects and delivering thorough, organized results. I'm driven by the excitement of learning and sharing that excitement with others. And I love how creatively fulfilling coding is, especially when I get to incorporate music and explore new types of art. My favorite thing about programming is how much I learn about myself in the process.
      </div>
      <div>I'm currently a Senior Teaching Fellow at the Grace Hopper program at Fullstack Academy. When I'm not writing code, you can find me selling vinyl at <a href='https://www.gramaphonerecords.com/' className={styles.link}>Gramaphone Records</a>, microsoldering analog synths, talking progressive politics, or boxing in the park.
      </div>
    </div>
  </div>
)

export default About;
