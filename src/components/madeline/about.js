import React from 'react'
import Image from './image'
import styles from './modal.module.css'

const About = () => (
  <div className={styles.about}>
    <div className={styles.headshot}>
      <Image />
     </div>
      <div>I'm a nonbinary software engineer and radio host + DJ based in Chicago. I like building accessible applications that help people connect to their creativity and each other.</div>
      <div>
      I never thought myself capable of learning to code until I did it, but it feels so natural now that I'm here. I've always loved carefully following recipes and instruction manuals, planning out projects and delivering thorough, organized results. I'm driven by the excitement of learning and sharing that excitement with others. There are endless opportunities to explore in coding, and I love how creatively fulfilling it is--especially when I get to incorporate music and explore new types of art. My favorite thing about programming is how much I learn about myself in the process.
      </div>
      <div>When I'm not writing code, you can find me selling vinyl at <a href='https://www.gramaphonerecords.com/'>Gramaphone Records</a>, microsoldering analog synths, talking progressive politics, or boxing in the park.
      </div>
  </div>
)

export default About;
