import React from "react";
import { MixesPage, Layout, SEO } from '../components';

const Music = () =>  (
    <Layout>
      <SEO title="music" />
      <ul className='venues flex'>
          <a
            href='https://www.smartbarchicago.com/'
            alt='smartbar-website'
            target="_blank"
            rel="noreferrer"
          >
            <li>Smartbar</li>
          </a>
          <a href='https://www.berlinchicago.com/index.html' alt='smartbar-website'  target="_blank"
            rel="noreferrer">
            <li>Berlin</li>
          </a>
          <a href='https://www.punchhousechicago.com/' alt='punch-house-website'  target="_blank"
            rel="noreferrer">
            <li>Punch House</li>
          </a>
          <a href='http://www.aragonballroom.org/' alt='aragon-website' target="_blank"
            rel="noreferrer">
            <li>The Aragon</li>
          </a>
          <a href='https://blockclubchicago.org/2020/11/13/dannys-tavern-closed-coronavirus-bucktown-bar-1935-dickens/' alt='dannys-closing-article'  target="_blank"
            rel="noreferrer">
            <li>Danny's Tavern</li>
          </a>
          <a href='https://hideoutchicago.com/' alt='hideout-website'  target="_blank"
            rel="noreferrer">
            <li>The Hideout</li>
          </a>
          <a href='http://cafemustache.com/' alt='mustache-website'  target="_blank"
            rel="noreferrer">
            <li>Cafe Mustache</li>
          </a>
        </ul>
    </Layout>
);

export default Music;
