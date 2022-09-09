import React from "react";
import { Link } from "gatsby";
import { SEO, FooterIcons, Particles } from "../components";

// TO-DO: Add links to bandcamp, soundcloud, resident advisor
// Upcoming gigs?
// Add Synth Hack, shiftpitch to site?

const IndexPage = () => (
  <>
    <SEO title="home" />
    <Particles />
      <div className='landing-container flex'>
        <div>
          <Link to="/mixes/">
            <h1 id='landing-link'>
              madeline
            </h1>
          </Link>
          <h1 id='landing-header'>url</h1>
        </div>
      </div>
    <footer style={{ background: `transparent` }} className='footer'>
      <FooterIcons />
    </footer>
  </>
);

export default IndexPage;
