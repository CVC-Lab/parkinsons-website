import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../components/style.css"

export default function BackgroundPage({ data }) {
  const sortedEdges = data.allMarkdownRemark.edges.sort((a, b) => {
    return a.node.frontmatter.id - b.node.frontmatter.id;
  });
  console.log('sorted', sortedEdges)

  return (
    <Layout>
      <h1 className="page-title">Quick and Efficient Extraction of Patient Specific SBR ratios for Parkinson’s Disease</h1>
      <p>Explore our documentation:</p>
      <ul className="documentation-links">
        {sortedEdges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            id
          }
        }
      }
    }
  }
`
