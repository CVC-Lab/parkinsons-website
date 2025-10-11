import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query donorQuery {
    site {
      siteMetadata {
        donors {
          name
          link
        }
      }
    }
  }
`;

export default function DonorsPage({ data }) {
  const donors = data.site.siteMetadata.donors;

  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Our Funding Partners</h1>
            <p>
              Philanthropic support accelerates our ability to build progressive
              AI agents, curate multimodal datasets, and deploy clinician-ready
              tools for Parkinson’s disease. Thank you for investing in precision
              neurology that puts patients first.
            </p>
          </div>
          <div className="hero-visual">
            <StaticImage
              src="../images/tagline.png"
              alt="What starts here starts with you"
              placeholder="blurred"
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Major supporters</h2>
          <ul className="tight-list">
            {donors.map((donor) => (
              <li key={donor.name}>
                {donor.link ? (
                  <a href={donor.link} target="_blank" rel="noopener noreferrer">
                    {donor.name}
                  </a>
                ) : (
                  donor.name
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">How contributions are used</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>Data collection &amp; curation</h3>
              <p>
                Philanthropy sustains secure acquisition of imaging, biospecimen, and wearable
                datasets across UT Austin and partner clinics—critical for training and validating
                our progressive agents.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Computing infrastructure</h3>
              <p>
                Gifts support GPU clusters, high-memory nodes, and privacy-preserving enclaves that
                enable large-scale model development under HIPAA-compliant controls.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Clinical translation</h3>
              <p>
                Investments fund usability studies, regulatory preparation, and pilot deployments
                with neurologists, ensuring the technology reaches patients responsibly.
              </p>
            </article>
          </div>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Partner with us</h2>
          <p>
            To discuss endowed gifts, corporate partnerships, or multi-year
            research sponsorships, please contact the Oden Institute development
            team via the{" "}
            <a
              href="https://www.oden.utexas.edu/contact/"
              target="_blank"
              rel="noopener noreferrer"
            >
              institute contact portal
            </a>{" "}
            or make a direct contribution through the{" "}
            <a
              href="https://give.utexas.edu/?utm_source=microsite&utm_medium=pages"
              target="_blank"
              rel="noopener noreferrer"
            >
              UT Austin giving page
            </a>
            .
          </p>
        </section>
      </div>
    </Layout>
  );
}
