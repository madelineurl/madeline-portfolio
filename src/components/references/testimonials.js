import React, { useState } from "react"
import styles from "./testimonials.module.css"

const Testimonials = () => {
  const [annOpen, setAnnOpen] = useState(false);
  const [mattOpen, setMattOpen] = useState(false);
  const showAnn = annOpen ? styles.show : styles.hide;
  const showMatt = mattOpen ? styles.show : styles.hide;

  const handleAnn = () => {
    setAnnOpen(true);
  }

  const hideAnn = () => {
    setAnnOpen(false);
  }

  const handleMatt = () => {
    setMattOpen(true);
  }

  const hideMatt = () => {
    setMattOpen(false);
  }

  return (
  <div className={styles.container}>
    <div className={styles.testimonial} onClick={handleAnn}>
      <h3>Ann Knauth</h3>
      <h4><strong>Web Administrator</strong></h4><h4><em>Northwestern University</em></h4>
      <div className={showAnn}>Maddie worked for me as a web assistant at Northwestern University. They did a tremendous job! They were extremely dedicated and focused on their work and determined to produce a great final product. Their attention to detail was off the charts. Maddie also asked the right the questions and kept wanting to learn more. I truly enjoyed working with them. I highly recommend Maddie.
      <button onClick={hideAnn}>collapse</button>
      </div>
    </div>
    <div className={styles.testimonial} onClick={handleMatt}>
      <h3>Matt McCormick</h3>
      <h4>Software Developer, Business Owner</h4>
      <h4><em>Jet City Device Repair</em></h4>
        <div className={showMatt}>Maddie is awesome. In case you don't have time to read the rest of this recommendation, let's get that out there right away. They are not just great at the work - though they were a spectacular repair technician - but also great with customers and an amazing coworker.<br></br>

        Being a technician at our company isn't easy. There's the repair part of the job: troubleshooting broken devices, being able to fix dozens of different models, needing to figure out new models, etc. Being good at doing repairs is not simple but it's probably the easiest part of the job.<br></br>

        Much harder is troubleshooting and helping people. While most of our customers are wonderful people and things usually go smoothly, that's not always the case. The sign of a great customer service person is not whether or not they can be great when things go well, it's how they respond when things go wrong. It is here that Maddie really differentiated themself.<br></br>

        Patient and kind with customers (even when they weren't in return) and always willing to help - not just because it was their job but because they genuinely care about helping people.<br></br>

        I was sad the day Maddie put in their notice to leave JCD, but happy to see the new career they have chosen - software development. I've been doing software development for over 20 years and have worked with some amazing developers. Maddie will definitely be one of those amazing developers some day.
        <button onClick={hideMatt}>collapse</button>
      </div>
    </div>
  </div>
)
}

export default Testimonials;
