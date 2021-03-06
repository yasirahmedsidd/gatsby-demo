import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query Siteinfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <Link to="/" ><h1>{title}</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
