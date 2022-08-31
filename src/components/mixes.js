import React from "react";
import { SoundcloudPlayer } from './music/soundcloud-player';

const MixesPage = () => {
  return (
    <div className='music-page flex'>
      <SoundcloudPlayer
        url="https://soundcloud.com/smartbarchicago/smart-mix-67-madeline"
        title="smart mix"
      />
      <SoundcloudPlayer
        url="https://soundcloud.com/chroniclesofcogu/chronicles-commends-madeline"
        title="chronicles mix"
      />
      <SoundcloudPlayer
        url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/396390183&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title="highlight mix"
      />
    </div>
  );
};

export default MixesPage;
