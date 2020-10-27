import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const Landing = () => (
  <>
    <SEO title="landing" />
    <div style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          textAlign: `center`,
          marginTop: `35vh`
        }}>
      <Link
        to="/home/"
        style={{
          textDecoration: `none`,
          color: `black`
        }}
      >
          <h1 style={{
            display: `inline-block`,
            fontSize: `3rem`
          }}>
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
