import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Img from "gatsby-image"
const Projects = ({ data }) => {
  const projects = data.projects.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Project & Websites I've created</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            const {
              slug,
              stack,
              title,
              thumb: {
                childImageSharp: { fluid },
              },
            } = project.frontmatter
            return (
              <Link to={"/projects/" + slug} key={project.id}>
                <div>
                  <Img fluid={fluid} />
                  <h3>{title}</h3>
                  <p>{stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query MyQuery {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        title
        description
      }
    }
  }
`
