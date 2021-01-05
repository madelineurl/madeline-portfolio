import React from "react";

const Northwestern = () => (
  <div className='project-page'>
    <div className='project-left'>
      <h3>NU: school of communication</h3>
      <div>I moved from California to Chicago for undergrad at Northwestern University. I got my first taste of web development when I overhauled the Northwestern radio <a href='wnur.org' className='link'>website</a> as the station's General Manager. This experience got me a job as a Web Assistant for the School of Communication website shortly after graduating, where I learned HTML and CSS on the fly and first discovered Javascript.</div>
      <a
        className='link'
        target="_blank"
        rel="noreferrer"
        href='https://communication.northwestern.edu/'
      >
        visit site
      </a>
    </div>
    <div className='project-right'>
      <h3>technology</h3>
      <div>The School of Communication website and all of its affiliated sites are built with a combination of Wordpress and raw HTML on the frontend and Drupal/PHP in the backend. </div>
      <h3>my role: assistant frontend developer</h3>
      <div>I helped modernize the site's frontend, working in Wordpress and writing raw HTML and CSS in Adobe Dreamweaver. I didn't get the chance to learn the backend, but the seeds of interest were planted.</div>
      <h3>key takeaways</h3>
      <div>This was my first real introduction to web development, and it was a whirlwind. I discovered the excitement of infinite learning that comes with coding, and the satisfaction of aligning elements carefully on a page using CSS.</div>
    </div>
  </div>
);

export default Northwestern;