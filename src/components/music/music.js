import React, { useState } from "react";
import { SoundcloudPlayer, Modal } from '..';

const MusicPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openMusicWindow = () => {
    setShowModal(true);
  };

  const closeMusicWindow = () => {
    setShowModal(false);
  };


  return (
    <div className='music-page flex'>
      <div id='music-container'>
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1138010866&color=%238cbc84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="xibis-soundcloud"
      />
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/789666967&color=%238cbc84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="doubtful baby clip"
      />
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/396390183&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="highlight mix"
      />
    </div>
    <Modal
        show={showModal}
        handleClose={closeMusicWindow}
      />
      <button
        onClick={openMusicWindow}
        className='btn'
        >
          about my music
      </button>
    </div>
  );
};

export default MusicPage;
