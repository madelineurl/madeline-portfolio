import React from "react";
import { Layout, SEO, Project } from "../components";

const Xibis = () => (
  <Layout>
    <SEO title='xibis' />
    <div className='container'>
      <div>
        <h3>xibis: a galactic voyage</h3>
        <div className='project-blurb'>In this 2D, single-player escapade inspired by the 90s computer game Zoombinis, users guide space creatures through a series of puzzles on a journey to find a new home planet. This is a group project that I built with two other software engineers, Tori Weaver and Simone Pinscak. Our goal was to reinforce emotional intelligence and community accountability through the design of various mini puzzles. We hoped to provide users with some COVID-19 escapism while challenging ourselves build a game, which was a first for everyone on the team.</div>
        <Project
          seoTitle='xibis'
          videoTitle="Xibis: A Galactic Voyage"
          videoURL="https://www.youtube.com/embed/8HAfJqLG-sg"
          gitHub="https://github.com/zelda-capstone/xibis"
          siteURL="https://zapstone-bc2fe.web.app/"
          link="/xibis/"
        />
      </div>
      <div>
      <h3>technology</h3>
        <div className='project-blurb'>My teammates and I employed the NERD stack, along with Redux for state management, Firestore's noSQL database, pixel art SVGs for nostalgic graphics, and Howler.js for game audio.</div>
        <h3>role: fullstack engineer</h3>
        <div className='project-blurb'>I spearheaded the integration of Redux for state management, designed and implemented the puzzle on Planet Aguilera, and composed and implemented all the game sound effects. Additionally, I had a hand in much of the overall styling, user interface, and animations.</div>
        <h3>key takeaways</h3>
        <div className='project-blurb'>One of our key discussions when picking technologies was how much to challenge ourselves. Since we were diving into Firestore on the backend, we opted to stick with React rather than learning a new game framework on the frontend. We quickly realized we'd need Redux to help us manage our ever-growing game state and keep the user experience free of state-mutation bugs.</div>
      </div>
    </div>
  </Layout>
);

export default Xibis;
