import React from 'react';
import { Layout } from '../components';
import { Navigation } from '../components';

const IndexPage = () => {
  return (
   <Layout pageTitle='home'>
        <Navigation />
        <div id="press">
         </div>
         <div id="music">
         </div>
        <div id="about">
          <div>Bay Area transplant Madeline may be one of Smartbar's newest residents, but their vocal-forward club sets have been rousing Chicago dance floors for almost a decade. Sensual vocals and thundering toms imbue the Gramaphone Records alum's sound with a characteristic warmth during peak-time sets at Smartbar's iconic weekly party Queen! and beyond. A seasoned radio host, disciplined student of music history, and skilled DJ in both vinyl and digital formats, Madeline's club-and techno-tinged house selections weave the genre-defining sounds of Chicago into the varied sonic fabric of the future.</div>
          <div>As a producer, Madeline layers sultry vocals over a dance backbone, infusing pop songwriting structures with a deep house sensibility. Their debut EP, unlearning, was released independently in September 2022.</div>
          <div>Madeline hosts the Statement Piece segment on WNUR 89.3 FM from 10-11pm every other Thursday, and curates a residency of the same name at Smartbar.</div>
        </div>
        <div id="contact">
         </div>
   </Layout>
  )
};

export default IndexPage;
