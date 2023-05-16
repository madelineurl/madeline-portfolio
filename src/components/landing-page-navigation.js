import React from 'react';
import caretDown from '../assets/icons/svg/caret_down.svg'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const LandingPageNavigation = () => {
  return (
    <div id="landing-image">
      <AnchorLink to="/#bio" title="Read Madeline's Bio">
      <div>
        <h1
          id='madeline'>
            madeline
        </h1>
        <img id="caret" src={caretDown} alt="down arrow to view the bio below the fold"/>
      </div>
      </AnchorLink>
    </div>
  );
};

export default LandingPageNavigation;
