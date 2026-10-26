import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navigation = () => {
  return (
      <div id="navigation">
        <AnchorLink to='/#press'>
          <h3>Press</h3>
        </AnchorLink>
        <AnchorLink to='/#music'>
          <h3>Music</h3>
        </AnchorLink>
        <AnchorLink to='/#about'>
          <h3>About</h3>    
        </AnchorLink>
        <AnchorLink to='/#contact'>
          <h3>Contact</h3>    
        </AnchorLink>
      </div>
  );
};

export default Navigation;
