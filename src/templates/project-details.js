import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { details, featured, htmll } from "../styles/project.module.css"
import { graphql } from "gatsby"
const ProjectDetails = (data) => {
  const { html, frontmatter: { stack, title, featuredImg } } = (data.data.markdownRemark)
  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={htmll} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetails


export const query = graphql`
query Projectspage($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`