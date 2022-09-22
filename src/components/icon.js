import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ url, image, id }) => (
  <a
    href={url}
    target='_blank'
    rel='noreferrer'
    className='flex'
  >
    <img
      src={image}
      id={id ?? null}
      alt='social media icon'
      className='icon enlarge'
    />
  </a>
);

Icon.propTypes = {
  image: PropTypes.string.isRequired
};

export default Icon;
