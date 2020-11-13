import React from 'react'
import Image from './image'
import ResumeIcon from '../icons/resume'
import styles from './modal.module.css'

const About = () => (
  <div className={styles.about}>
    <div className={styles.headshotContainer}>
      <Image />
      <ResumeIcon />
    </div>
    {/* <hr style={{color: `black`, backgroundColor: `black` }}/> */}
    <div>
      <div>I'm a nonbinary software engineer and radio host + DJ. I never thought I could learn to code until I did it, but it makes a lot of sense in retrospect. </div>
      <div>
      I've always loved carefully following recipes and instruction manuals, planning out projects and delivering thorough, organized results. I'm driven by the excitement of learning and sharing that excitement with others. I love how creatively fulfilling coding is; especially when I get to incorporate music and explore new types of art. My favorite thing about programming is how much I learn about myself in the process.
      </div>
      <div>When I'm not writing code, you can find me selling vinyl at <a href='https://www.gramaphonerecords.com/'>Gramaphone Records</a>, microsoldering analog synths, talking progressive politics, or boxing in the park.
      </div>
    </div>
  </div>
)

export default About;
