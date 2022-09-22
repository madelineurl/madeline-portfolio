import React from 'react';
import { Link } from 'gatsby';
import { Icon } from './icon';
import contact from '../assets/icons/svg/mail-backup.svg';
import bandcamp from '../assets/icons/svg/bandcamp.svg';
import soundcloud from '../assets/icons/svg/soundcloud.svg'
import ra from '../assets/icons/svg/ra.svg';
import spotify from '../assets/icons/svg/spotify.svg';
import instagram from '../assets/icons/svg/instagram.svg';

const SocialMediaIcons = () => {
  return (
    <div id='icons-container' className='flex'>
       <Link to='/contact/' className='flex'>
          <img
            src={contact}
            alt='contact'
            className='icon enlarge'
          />
        </Link>
         <Icon
            url='https://open.spotify.com/artist/2eMwoPf6uvrCLcKEmrfmel'
            image={spotify}
            id='spotify'
          />
         <Icon
            url='https://madelineurl.bandcamp.com/releases'
            image={bandcamp}
          />
        <Icon
          url='https://soundcloud.com/madeline-url'
          image={soundcloud}
        />
         <Icon
            url='https://ra.co/dj/madelinechi'
            image={ra}
            id='ra'
          />
          <Icon
            url='https://www.instagram.com/soft.content'
            image={instagram}
            id='instagram'
          />
    </div>
  );
};

export default SocialMediaIcons;
