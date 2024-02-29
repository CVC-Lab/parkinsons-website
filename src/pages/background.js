import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../components/style.css"
import { StaticImage } from "gatsby-plugin-image";

export default function BackgroundPage({ data }) {
  const sortedEdges = data.allMarkdownRemark.edges.sort((a, b) => {
    return a.node.frontmatter.id - b.node.frontmatter.id;
  });

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Background</h1>
        <div className="background-flex">
          <div className="text-content">
            <section className="section">
              <h2 className="section-title">Documentation:</h2>
              <ul className="research-links">
                {sortedEdges.map(({ node }) => (
                  <li key={node.id}>
                    <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="section">
          <h2 className="section-title">Detailed work:</h2>
          <ul className="research-links">
            <li><a href="https://hackmd.io/XG3ITA8iR2S8A2M-0O6GfA" target="_blank" rel="noopener noreferrer">PPMI Overview</a></li>
            <li><a href="https://hackmd.io/rs2D-YBjR3WG_xCnCjC6EA" target="_blank" rel="noopener noreferrer">DaTscan Imaging Overview</a></li>
            <li><a href="https://hackmd.io/CUwJaR4nRhG1VVT7zivVQA" target="_blank" rel="noopener noreferrer">Segmantation for Biomarker Extraction</a></li>
            <li><a href="https://hackmd.io/bSbn-rF1RMyA4jial75-oA" target="_blank" rel="noopener noreferrer">PPMI DTI</a></li>
            <li><a href="https://hackmd.io/a4ZKxOy8SCeICVYtpF3sow" target="_blank" rel="noopener noreferrer">Results per Dataset</a></li>
            <li><a href="https://drive.google.com/file/d/1rocVQaC-FittJwJotOPZBB4ftf_Gjjlb/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Final Report Summer 2023</a></li>
          </ul>
        </section>
        </div>
          <StaticImage
            className="section-image"
            src="../images/md_image.png"
            alt="MD image overlaid on a T1 Weighted MRI"
            placeholder="blurred"
          />
        </div>
      </div>
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
