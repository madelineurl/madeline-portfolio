import React from 'react'
import Image from './image'
import styles from './modal.module.css'

const About = () => (
  <div className={styles.about}>
    <div className={styles.headshot}>
      <Image />
     </div>
      <div>I'm a software engineer and radio host + DJ based in Chicago. I like building accessible applications that help people connect to their creativity and each other.</div>
      <div>
      I never thought myself capable of learning to code until I did it, but it makes so much sense now that I've arrived here. I've always loved carefully following recipes and instruction manuals, planning out projects and delivering thorough, organized results. I'm driven by the excitement of learning and sharing that excitement with others. There are endless opportunities to explore in coding, and I love how creatively fulfilling it is--especially when I get to incorporate music and explore new types of art.
      </div>
      <div>My favorite thing about programming is how much I learn about myself in the process. I'm so grateful I had the chance to discover that being a developer is the perfect fit for me.
      </div>
  </div>
)

export default About;
