
const ProjectData = {
  shiftpitch: {
    id: 'shiftpitch',
    name: 'shiftpitch',
    headerSentence: 'Shiftpitch is a tool for improving rhythm by learning to beatmatch.',
    overview: 'Many online tools, computer programs, and digital DJ equipment teach people how to DJ, but most of them teach DJs to rely on visual cues like waveforms or BPM (beats per minute) counters. Learning to beatmatch with your ears is an invaluable skill, and a great way to improve your rhythm--but learning is difficult without access to turntables. I built Shiftpitch in an effort to make beatmatching more accessible to everyone.',
    technology: 'This was a solo exploration of the Howler.js audio library, built over four days during my time at Grace Hopper. I used React to write controlled front-end components that manipulated audio volume and pitch/speed rates in response to user input.',
    keyTakeaways: 'Pick the right tool for the job. This project required multiple audio sources being controlled independently of one another. I initially tried to build this tool using the Tone.js library, but soon realized that Tone lends itself more to creating sounds within a single timeline (i.e. music production).',
    upNext: 'Adding more sounds, implementing a method for users to upload their own sounds, refactoring to optimize performance, and enabling players to log in and access data from various sessions in a database.',
    URLs: {
      videoTitle: 'shiftpitch',
      youTube: 'https://www.youtube.com/embed/AAS2sIXPpY4',
      github: 'https://github.com/madelineurl/shiftpitch',
      site: 'https://shiftpitch.herokuapp.com'
    }
  },
  xibis: {
    id: 'xibis',
    name: 'xibis: a galactic voyage',
    headerSentence: 'In this 2D, single-player escapade inspired by the 90s computer game Zoombinis, users guide space creatures through a series of puzzles on a journey to find a new home planet.',
    overview: 'This is a group project that I built with two other software engineers, Tori Weaver and Simone Pinscak. Our goal was to reinforce emotional intelligence and community accountability through the design of various mini puzzles. We challenged ourselves build a game, which was a first for everyone on the team.',
    technology: 'My teammates and I employed the NERD stack, along with Redux for state management, Firestore\'s noSQL database, pixel art SVGs for nostalgic graphics, and Howler.js for game audio.',
    keyTakeaways: 'One of our key discussions when picking technologies was how much to challenge ourselves. Since we were diving into Firestore on the backend, we opted to stick with React rather than learning a new game framework on the frontend. We quickly realized we\'d need Redux to help us manage our ever-growing game state and keep the user experience free of state-mutation bugs.',
    roleTitle: 'fullstack engineer',
    roleDescription: 'I spearheaded the integration of Redux for state management, designed and implemented the puzzle on Planet Aguilera, and composed and implemented all the game sound effects. Additionally, I had a hand in much of the overall styling, user interface, and animations.',
    URLs: {
      videoTitle: 'xibis: a galactic voyage',
      youTube: 'https://www.youtube.com/embed/8HAfJqLG-sg',
      github: 'https://github.com/zelda-capstone/xibis',
      site: 'https://zapstone-bc2fe.web.app/'
    }
  },
  northwestern: {
    id: 'northwestern',
    name: 'northwestern school of communication',
    headerSentence: 'I had my first professional experience working on a website in 2016.',
    overview: `I got a taste of web development when I overhauled the Northwestern radio website (wnur.org) as the station's General Manager. This experience led to a position as a Web Assistant for the School of Communication website shortly after graduating, where I learned HTML and CSS on the fly and became interested in Javascript.`,
    technology: 'The School of Communication website and all of its affiliated sites are built with a combination of Wordpress and raw HTML on the frontend and Drupal/PHP in the backend.',
    keyTakeaways: 'This was my first real introduction to web development, and it was a whirlwind. I discovered the excitement of infinite learning that comes with coding, and the satisfaction of aligning elements carefully on a page using CSS.',
    roleTitle: 'frontend assistant',
    roleDescription: 'I helped modernize the site\'s frontend, working in Wordpress and writing raw HTML and CSS in Adobe Dreamweaver. I didn\'t get the chance to learn the backend, but the seeds of interest were planted.',
    URLs: {
      site: 'https://communication.northwestern.edu'
    }
  }
};

export default ProjectData;
