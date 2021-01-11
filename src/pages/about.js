import React from "react";
import { Layout, SEO } from "../components";
import headshot from "../images/headshot-2021.webp";

const About = () => (
  <Layout>
    <SEO title='about me' />
      <div id='about' >
        <div className='headshot-container'>
          <img src={headshot} id="headshot" alt="Madeline smiling against a periwinkle background in a maroon mockneck shirt." />
          <div className='info flex'>
            <h3>Madeline Higgins</h3>
            <h4>Fullstack Engineer</h4>
          </div>
        </div>
        <div id='about-text'>
          <div>I'm a fullstack engineer and radio host + DJ based in Chicago. I design and build accessible applications that help people connect to their creativity and to each other. </div>
          <div>
          I never expected to end up in this field, but it makes a lot of sense in retrospect. I've always loved carefully following recipes and instruction manuals, planning out projects and delivering thorough, organized results. I'm driven by the excitement of learning and sharing that excitement with others. And I love how creatively fulfilling coding is, especially when I get to incorporate music and explore new types of art. My favorite thing about programming is how much I learn about myself in the process.
          </div>
          <div>I'm currently a Senior Teaching Fellow at the Grace Hopper program at Fullstack Academy. When I'm not writing code, you can find me selling vinyl at <a href='https://www.gramaphonerecords.com/' className='link'>Gramaphone Records</a>, microsoldering analog synths, talking progressive politics, or boxing in the park.
          </div>
          <a href='/resume/' target="_blank" rel="noreferrer">
            <button className='btn'>
              Resume
            </button>
          </a>
        </div>
    </div>
  </Layout>
);

export default About;
