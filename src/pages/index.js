import React from "react"
import { Link } from "gatsby"

import { SEO } from "../components"
import headerStyles from "../components/styling/header.module.css"

const Landing = () => (
  <>
    <SEO title="landing" />
    <div className={headerStyles.landingContainer}>
      <Link
        to="/home/"
        className={headerStyles.headerLink}
      >
          <h1 className={headerStyles.landingHeader}>
            madeline
          </h1>
        </Link>
      <h1 style={{
          display: `inline-block`,
          fontSize: `3rem`,
          color: `grey`
        }}>url</h1>
    </div>
  </>
)

export default Landing
