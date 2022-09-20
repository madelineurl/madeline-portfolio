import React from 'react';
import { Link } from 'gatsby';

export const BackToHomeLink = () => {
  return (
    <Link to='/' className='link'>
      <h1
        id="back-home"
        className="enlarge flex">
          Home
      </h1>
    </Link>
  )
}

export default BackToHomeLink;
