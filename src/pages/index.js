import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import Img from "gatsby-image"
const Home = ({ data }) => {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Gatsby Test</h2>
          <h3>lorem ipsum dolor sit amet</h3>
          <Link className={btn} to="/projects">
            View Portfolio
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}
export default Home

export const query = graphql`
  query ImageBanner {
    file(relativePath: { eq: "web.jpg" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
