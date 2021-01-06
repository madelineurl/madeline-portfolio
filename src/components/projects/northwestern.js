import React from "react";

const Northwestern = ({ selected }) => {
  const selectedClass = selected === 'northwestern'? 'project-page selected flex' : 'project-page flex';

  return (
  <div className={selectedClass}>
    <div className='flex'>
      <h3>NU: school of communication</h3>
      <a
        className='project-link flex'
        target="_blank"
        rel="noreferrer"
        href='https://communication.northwestern.edu/'
      >
        visit site
      </a>
      </div>
      <div><h4>I got my first professional job working on a website in 2016.</h4>I had a taste of web development when I overhauled the Northwestern radio <a href='wnur.org' className='link'>website</a> as the station's General Manager. This experience led to a position as a Web Assistant for the School of Communication website shortly after graduating, where I learned HTML and CSS on the fly and became interested in Javascript.</div>
    {/* <div className='project-right'>
      <h3>technology</h3>
      <div>The School of Communication website and all of its affiliated sites are built with a combination of Wordpress and raw HTML on the frontend and Drupal/PHP in the backend. </div>
      <h3>my role: assistant frontend developer</h3>
      <div>I helped modernize the site's frontend, working in Wordpress and writing raw HTML and CSS in Adobe Dreamweaver. I didn't get the chance to learn the backend, but the seeds of interest were planted.</div>
      <h3>key takeaways</h3>
      <div>This was my first real introduction to web development, and it was a whirlwind. I discovered the excitement of infinite learning that comes with coding, and the satisfaction of aligning elements carefully on a page using CSS.</div>
    </div> */}
  </div>
)
};

export default Northwestern;
