import React from "react"
import { Link } from "gatsby"

const NavbarLink = (props) => {
  return (
    <Link
        to={`/${props.name}/`}
        style={{
          color: `grey`,
          textDecoration: `none`,
          //margin: `.5rem 1rem 2rem 1rem`
        }}>
        {props.name}
    </Link>
  )
}

export default NavbarLink;
