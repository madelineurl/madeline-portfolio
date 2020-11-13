import React from "react"
import { Icons, Navbar, Particles } from '../components'
import "./layout.css"

const LandingLayout = ({ children }) => {
  return (
    <>
      <Particles />
      <Navbar />
      <div className='main'>
        <main>{children}</main>
        <footer className='footer'>
          <Icons />
        </footer>
      </div>
    </>
  )
}

export default LandingLayout;
