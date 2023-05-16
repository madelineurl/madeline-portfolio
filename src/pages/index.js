import React from 'react';
import { Layout } from '../components';
import { LandingPageNavigation } from '../components';

const IndexPage = () => {
  return (
   <Layout pageTitle='home'>
        <div className='madeline-container'>
          <LandingPageNavigation />
        </div>
        <div id="bio">Madeline may be one of @smartbarchicago's newest residents, but their vocal-forward club sets have been rousing Chicago dance floors for almost a decade. Sensual vocals and thundering toms imbue the @gramaphonerecords alum's sound with a characteristic warmth during peak-time sets at Smartbar's iconic weekly party Queen! and beyond. A seasoned radio host, disciplined student of music history, and skilled DJ in both vinyl and digital formats, Madeline's club-and techno-tinged house selections weave the genre-defining sounds of Chicago into the varied sonic fabric of the future.</div>
   </Layout>
  )
};

export default IndexPage;
