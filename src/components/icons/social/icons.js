import React from "react";
import { Link } from "gatsby";
import Icon from "./icon";
import contact from "./images/contact-circle.png";
import github from "./images/github-circle.png";
import linkedin from "./images/LI-circle.png";
import medium from "./images/medium-circle.webp";

const Icons = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     icons: allFile(filter: { relativeDirectory: {eq: "social-icons"} }) {
  //       edges {
  //         node {
  //           name
  //           relativePath
  //           childImageSharp {
  //             id
  //             fluid(maxWidth: 1600) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`
  // );

  return (
    <div className='flex'>
       <Link to='/contact/' >
          <img
            src={contact}
            alt="contact"
            className='footer-icon'
          />
        </Link>
        <Icon
            url='https://github.com/madelineurl'
            image={github}
          />
        <Icon
        image={linkedin}
        url='https://www.linkedin.com/in/madeline-url/'
      />
        <Icon
        image={medium}
        url='https://madeline-url.medium.com'
      />
    </div>
  );
};


  export default Icons;
