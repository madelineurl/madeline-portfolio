import React from "react";
import { Link } from "gatsby";
import Icon from "./icon";
import contact from "./icons/mail.webp";
import github from "./icons/github.webp";
import linkedin from "./icons/linkedin.webp";
import medium from "./icons/medium.webp";

const FooterIcons = () => {
  return (
    <div className='flex'>
       <Link to='/contact/' className="flex">
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


  export default FooterIcons;
