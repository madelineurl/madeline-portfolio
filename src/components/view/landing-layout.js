import React from "react";
import { Icons, Particles } from '..';
import "../layout.css";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Particles />
      {/* <Navbar /> */}
      <div className='main'>
        <main>{children}</main>
        <footer style={{ backgroundColor: `transparent` }} className='footer'>
          <Icons />
        </footer>
      </div>
    </>
  );
};

export default LandingLayout;
