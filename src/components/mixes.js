import React from "react";
import { SoundcloudPlayer } from './music/soundcloud-player';

const MixesPage = () => {
  return (
    <div className='music-page flex'>
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1331403412&color=%236e5eae&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="smart mix"
      />
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1325348092&color=%236e5eae&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="chronicles mix"
      />
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/396390183&color=%236e5eae&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="highlight mix"
      />
    </div>
  );
};


export default MixesPage;
