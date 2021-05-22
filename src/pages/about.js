import React from "react";
import Img from "gatsby-image";
import { Layout, SEO } from "../components";
// import headshot from "../images/headshot-2021.webp";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot-2021.png" }) {
      childImageSharp {
        fixed(width: 200, height: 200, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;

const About = ({ data }) => {
  return (
 <Layout>
    <SEO title='about me' />
    <div id='about' >
      <div className='headshot-container'>
        {/* <img src={headshot} id="headshot" alt="Madeline smiling in a maroon mockneck shirt against a periwinkle wall"/> */}
        <Img fixed={data.headshot.childImageSharp.fixed} alt="Madeline smiling in a maroon mockneck shirt against a periwinkle wall" id="headshot" />
        <div className='info flex'>
          <h3>Madeline Higgins</h3>
          <h4>Software Engineer</h4>
        </div>
      </div>
      <div id='about-text'>
        <div>I'm a software engineer and radio host + DJ based in Chicago. I like designing and building tools - software and hardware - that help people connect to their creativity. </div>
        <div>
       I'm driven by the excitement of learning and sharing that excitement with others. I appreciate the creative satisfaction that I get from coding, especially when I get to incorporate music and explore new types of art. My favorite thing about programming is what I learn in the process of challenging myself.
        </div>
        <div>I'm currently the Software Engineer - Test Infrastructure for Strategic Financial Solutions, where I'm an advocate for testing, clean code, and quality design across the company codebase. When I'm not building applications, you can find me selling vinyl at <a href='https://www.gramaphonerecords.com/' className='link'>Gramaphone Records</a>, microsoldering analog synths, discussing progressive politics, or boxing in the park.
        </div>
        <a href='/resume/' target="_blank" rel="noreferrer">
          <button className='btn'>
            Resume
          </button>
        </a>
      </div>
    </div>
  </Layout>
  )
};

export default About;
