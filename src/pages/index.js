import React from 'react';
import { ContactForm, Layout } from '../components';
import { Navigation } from '../components';

const IndexPage = () => {
  return (
   <Layout pageTitle='home'>
        <Navigation />
        <div id="press">
          <div class="container">
            <a href="https://djmag.com/features/eight-emerging-artists-you-need-hear-december-2023">Eight emerging artists you need to hear: DJ Mag December 2023</a>
            <a href="https://www.yohomo.ca/blog/get-to-know-our-promise-cherry-beach-headliner-madeline">Get to know our Promise Cherry Beach Headliner (Toronto, CA)</a>
            <a href="https://wgntv.com/music/arc-music-festival-celebrated-chicago-and-house-music-for-third-year/">Interview with WGN for ARC Music Festival</a>
          </div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-WEmhumEXj0?si=RWPz04c1vjRuK62D" title="Boiler Room Chicago: Madeline" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div>Custom latex garment by Daniella DeLuna</div>
          </div>  
         </div>
         <div id="music">
          <div class="container">
            <div>"From the super sexy ‘fantasy daddy’, through the off-kilter ‘hurt it’, to slo-mo cut ‘doubtful baby’, [unlearning is] a lush and varied release and has us eagerly awaiting what’s next." - DJ Mag</div>
            <div>LISTEN</div>
            <div>BOILER ROOM CHICAGO</div>
          </div>
         </div>
        <div id="about">
          <div class="container">
          <div>Bay Area transplant Madeline may be one of Smartbar's newest residents, but their vocal-forward club sets have been rousing Chicago dance floors for almost a decade. Sensual vocals and thundering toms imbue the Gramaphone Records alum's sound with a characteristic warmth during peak-time sets at Smartbar's iconic weekly party Queen! and beyond. A seasoned radio host, disciplined student of music history, and skilled DJ in both vinyl and digital formats, Madeline's club-and techno-tinged house selections weave the genre-defining sounds of Chicago into the varied sonic fabric of the future.</div>
          <div>As a producer, Madeline layers sultry vocals over a dance backbone, infusing pop songwriting structures with a deep house sensibility. Their debut EP, unlearning, was released independently in September 2022.</div>
          <div>Madeline hosts the Statement Piece segment on WNUR 89.3 FM from 10-11pm every other Thursday, and curates a residency of the same name at Smartbar.</div>
          </div>
        </div>
        <div id="contact">
          <ContactForm />
        </div>
   </Layout>
  )
};

export default IndexPage;
