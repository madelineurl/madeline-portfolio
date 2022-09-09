import React from "react";
import { Layout, SEO } from "../components";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    headshot:
      file(relativePath: {
        eq: "artist-photo.jpg"
      }){
        childImageSharp {
        fixed(width: 1000, height: 1000, quality: 100) {
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
    {/*  */}
  </Layout>
  )
};

export default About;

// <div id='about' >
//       <div className='headshot-container'>
//         {/* <img src={headshot} id="headshot" alt="Madeline smiling in a maroon mockneck shirt against a periwinkle wall"/> */}
//         <Img fixed={data.headshot.childImageSharp.fixed} alt="Madeline in a brown satin corset against a black and white patterned wall" id="headshot" />
//         {/* <div className='info flex'>
//           <h3>Madeline</h3>
//           <h4>Software Engineer</h4>
//           <h4>DJ + Producer</h4>
//           <h4>Radio Host</h4>
//         </div> */}
//       </div>
//       <div id='about-text'>
//         {/* <div>Software engineer and radio host + DJ based in Chicago. I'm excited by designing and building tools that help people connect to their creativity. about music, </div>
//          */}
//         <div>I'm a senior frontend engineer at <a href="https://splice.com">Splice</a> by day and an active DJ in Chicago's LGBTQ+ and underground dance music scene by night. When I'm not building software or DJing on the radio and in clubs, you can find me selling vinyl at <a href='https://www.gramaphonerecords.com/' className='link'>Gramaphone Records</a>, microsoldering analog synths, or boxing in the park.
//         </div>
//         {/* <a href='/resume/' target="_blank" rel="noreferrer">
//           <button className='btn'>
//             Resume
//           </button>
//         </a> */}
//       </div>
//     </div>
