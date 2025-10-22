import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "../components/style.css";

export default function ThrustsPage({ data }) {
  const thrusts = React.useMemo(() => {
    return data?.allMarkdownRemark?.edges ?? [];
  }, [data]);

  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Domain Thrusts</h1>
            <p>
              Four coordinated thrusts extract, harmonize, and interpret multimodal
              biomarkers that fuel our progressive AI stack. Each thrust tackles a
              distinct vantage point—imaging, diffusion-clinical integration,
              wearable cognition, and mechanistic inference—while sharing common
              quality controls and translational goals.
            </p>
            <p className="hero-subtext">
              Dive into the thrusts below for deeper technical walkthroughs,
              figures, and validated findings.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Explore the thrusts</h2>
          <div className="dense-section two-column">
            {thrusts.map(({ node }) => (
              <article key={node.id} className="dense-brief">
                <h3>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </h3>
                {node.frontmatter.summary && <p>{node.frontmatter.summary}</p>}
                <p>
                  <Link to={node.frontmatter.slug}>Read the full thrust brief →</Link>
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ThrustsPage {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "thrust" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            summary
            order
          }
        }
      }
    }
  }
`;
