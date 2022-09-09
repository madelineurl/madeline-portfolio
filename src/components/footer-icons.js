import React from "react";
import { Link } from "gatsby";
import Icon from "./icon";
import contact from "./icons/mail-grey.png";
import github from "./icons/github-grey.png";
import bandcamp from "./icons/bandcamp-button-circle-grey-512.png";
import soundcloud from "./icons/soundcloud-grey.png"
import ra from './icons/residentadviser.png';

const FooterIcons = () => {
  return (
    <div id='icons-container' className='flex'>
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
            id="github"
          />
        <Icon
          url='https://soundcloud.com/madeline-url'
          image={soundcloud}
        />
        <Icon
            url='https://madelineurl.bandcamp.com/releases'
            image={bandcamp}
          />
        <Icon
            url='https://ra.co/madelinechi'
            image={ra}
          />
        {/* <Icon
        image={linkedin}
        url='https://www.linkedin.com/in/madeline-url/'
      />
        <Icon
        image={medium}
        url='https://madeline-url.medium.com'
      /> */}
    </div>
  );
};

export default FooterIcons;
