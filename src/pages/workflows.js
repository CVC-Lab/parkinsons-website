import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "../components/style.css";

export default function WorkflowsPage({ data }) {
  const workflows = React.useMemo(() => data?.allMarkdownRemark?.edges ?? [], [data]);

  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Progressive AI Workflows</h1>
            <p>
              Our program operationalizes two complementary workflows: generative latent-space
              modeling that unifies multimodal biomarkers, and clinician-centered deployment that
              translates those inferences into case-ready insight. Together they provide an
              end-to-end path from data harmonization to decision support.
            </p>
            <p className="hero-subtext">
              Explore the workflows to see how data flows, quality checks, and clinician tooling
              lock together.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Workflow briefs</h2>
          <div className="dense-section two-column">
            {workflows.map(({ node }) => (
              <article key={node.id} className="dense-brief">
                <h3>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </h3>
                {node.frontmatter.summary && <p>{node.frontmatter.summary}</p>}
                <p>
                  <Link to={node.frontmatter.slug}>Dive into the workflow →</Link>
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
  query WorkflowsPage {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "workflow" } } }
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
