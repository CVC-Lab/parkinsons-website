import * as React from "react";
import { graphql, Link } from "gatsby";
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

const clinicalPartners = [
  {
    name: "Dr. Conor Fearon, MD PhD",
    affiliation: "Mater Misericordiae University Hospital, Dublin, Ireland",
  },
  {
    name: "Dr. Barbara Marebwa",
    affiliation: "Senior Scientist, Michael J. Fox Foundation",
  },
];

const infrastructurePartners = [
  {
    name: "Oden Institute for Computational Engineering and Sciences",
    detail:
      "Shared compute, secure enclaves, and administrative support for cross-campus deployments.",
  },
  {
    name: "Texas Advanced Computing Center (TACC)",
    detail:
      "High-performance GPU clusters for large-scale diffusion modeling and reinforcement learning.",
    link: "https://www.tacc.utexas.edu/use-tacc/allocations/",
  },
];

export default function PartnersPage({ data }) {
  const donors = data.site.siteMetadata.donors;

  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Partners powering progressive AI</h1>
            <p>
              Philanthropy, clinical collaborators, and infrastructure teams jointly enable
              our multimodal Parkinson’s program—from cohort acquisition and secure storage
              to validation and bedside translation.
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
          <h2 className="section-title">Funding partners</h2>
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
          <h2 className="section-title">Clinical collaborators</h2>
          <ul className="tight-list">
            {clinicalPartners.map((partner) => (
              <li key={partner.name}>
                <strong>{partner.name}</strong> — {partner.affiliation}
              </li>
            ))}
          </ul>
          <p className="text-block">
            Clinical design reviews with neurologists guide feature priorities, interpretation
            checks, and deployment protocols for ActionIntel and Free Motion tools.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Infrastructure and data partners</h2>
          <div className="dense-section two-column">
            {infrastructurePartners.map((partner) => (
              <article key={partner.name} className="dense-brief">
                <h3>{partner.name}</h3>
                <p>{partner.detail}</p>
                {partner.link && (
                  <p>
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </p>
                )}
              </article>
            ))}
            <article className="dense-brief">
              <h3>Data governance</h3>
              <p>
                We operate within UT Austin’s secure data enclaves with audited access logs,
                HIPAA-compliant storage, and sponsor-aligned governance. See the{" "}
                <Link to="/resources">resources page</Link> for intake forms and SOPs.
              </p>
            </article>
          </div>
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
          <h2 className="section-title">Join the collaboration network</h2>
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
          <p>
            Interested in clinical validation or data-sharing agreements? Introduce your project
            through the forms on our <Link to="/resources">resources page</Link>.
          </p>
        </section>
      </div>
    </Layout>
  );
}
