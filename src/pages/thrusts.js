import * as React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../components/style.css";

function ThrustThumbnail({ order, title }) {
  if (order === 1) {
    return (
      <StaticImage
        src="../images/thrust-imaging-thumbnail.jpg"
        alt={`${title} thumbnail`}
        className="thrust-card-thumb-media"
        imgClassName="thrust-card-thumb"
        placeholder="blurred"
        layout="fullWidth"
        aspectRatio={1}
      />
    );
  }

  if (order === 2) {
    return (
      <StaticImage
        src="../images/thrust-diffusion-thumbnail.jpg"
        alt={`${title} thumbnail`}
        className="thrust-card-thumb-media"
        imgClassName="thrust-card-thumb"
        placeholder="blurred"
        layout="fullWidth"
        aspectRatio={1}
      />
    );
  }

  if (order === 3) {
    return (
      <StaticImage
        src="../images/thrust-wearable-thumbnail.jpg"
        alt={`${title} thumbnail`}
        className="thrust-card-thumb-media"
        imgClassName="thrust-card-thumb"
        placeholder="blurred"
        layout="fullWidth"
        aspectRatio={1}
      />
    );
  }

  return (
    <StaticImage
      src="../images/thrust-mechanism-thumbnail.jpg"
      alt={`${title} thumbnail`}
      className="thrust-card-thumb-media"
      imgClassName="thrust-card-thumb"
      placeholder="blurred"
      layout="fullWidth"
      aspectRatio={1}
    />
  );
}

export default function ThrustsPage({ data }) {
  const thrusts = React.useMemo(() => {
    return data?.allMarkdownRemark?.edges ?? [];
  }, [data]);

  return (
    <Layout>
      <div className="page-container home-page compact-page-shell">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Domain Thrusts</h1>
            <p>
              Four coordinated thrusts extract, harmonize, and interpret multimodal
              biomarkers. Each thrust tackles a distinct modality -- imaging, diffusion-clinical
              integration, wearable-cognitive phenotyping, and mechanistic inference -- while
              sharing common quality controls and translational goals.
            </p>
            <p className="hero-subtext">
              Dive into the thrusts below for deeper technical walkthroughs,
              figures, and validated findings.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Explore the thrusts</h2>
          <div className="thrust-list">
            {thrusts.map(({ node }) => (
              <article key={node.id} className="dense-brief thrust-card">
                <div className="thrust-card-thumb-frame">
                  <ThrustThumbnail
                    order={node.frontmatter.order}
                    title={node.frontmatter.title}
                  />
                </div>
                <div className="thrust-card-copy">
                  <h3>
                    <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                  </h3>
                  {node.frontmatter.summary && <p>{node.frontmatter.summary}</p>}
                  <p>
                    <Link to={node.frontmatter.slug} className="button secondary button-compact">
                      Read full thrust brief &rarr;
                    </Link>
                  </p>
                </div>
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
