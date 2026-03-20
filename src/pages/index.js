import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../components/style.css";

export default function IndexPage({ data }) {
  const thrusts = React.useMemo(
    () => data?.thrusts?.edges?.slice(0, 4) ?? [],
    [data]
  );
  const donors = data?.site?.siteMetadata?.donors ?? [];

  return (
    <Layout>
      <div className="page-container home-page home-page-landing">

        {/* Hero */}
        <section className="hero-section hero-stack hero-centered">
          <div className="hero-text">
            <h1>Precision Neurology for Parkinson's Disease</h1>
            <p>From population patterns to individual care</p>
          </div>
          <div className="hero-figure">
            <StaticImage
              src="../images/precision-neurology.png"
              alt="Precision Neurology for Parkinson's Disease: From population patterns to individual care"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
          <div className="hero-cta hero-cta-centered">
            <Link className="button primary" to="/clinician-workflow">
              See the clinician workflow
            </Link>
            <Link className="button secondary" to="/thrusts">
              Explore domain thrusts
            </Link>
          </div>
        </section>

        {/* Core content blocks */}
        <section className="section">
          <div className="content-blocks">
            <div className="content-block">
              <h3>Multimodal Data Integration</h3>
              <p>
                We integrate four core data domains — clinical assessments, brain
                imaging, genetic profiles, and wearable sensor data — from
                large-scale cohorts to build a comprehensive baseline.
              </p>
            </div>
            <div className="content-block">
              <h3>Subgroup Discovery</h3>
              <p>
                An advanced AI framework analyzes this integrated data to reveal
                latent markers, differentiating Parkinson's disease from look-alikes
                and discovering meaningful patient subgroups.
              </p>
            </div>
            <div className="content-block">
              <h3>Actionable Precision</h3>
              <p>
                Population-informed models surface patient-specific risk
                stratifications, subgroup context, and targeted therapeutic
                priorities.
              </p>
            </div>
          </div>
        </section>

        {/* What we differentiate */}
        <section className="section">
          <h2 className="section-title">What we differentiate</h2>
          <ul className="tight-list prose">
            <li>
              <strong>Differential diagnosis:</strong> Molecular evidence such as
              CSF alpha-synuclein seed amplification helps disambiguate Parkinson's
              disease from look-alikes including MSA, PSP, and DLB.
            </li>
            <li>
              <strong>Precision stratification:</strong> Pathway-weighted profiles
              define subgroups within Parkinson's disease, each with distinct
              biology and clinical trajectory.
            </li>
            <li>
              <strong>Nearest-neighbor comparison:</strong> New patients are placed
              against the closest population subgroup, surfacing comparable cases
              and their longitudinal outcomes.
            </li>
          </ul>
        </section>

        {/* Evidence highlights */}
        <section className="section">
          <h2 className="section-title">Evidence highlights</h2>
          <ul className="evidence-list">
            <li>
              Circuit-level imaging signatures reveal patient subtypes with
              distinct motor and cognitive profiles across six neuroanatomical
              pathways.
              <span className="evidence-label">Vinod et al.</span>
            </li>
            <li>
              Wearable arm-swing asymmetry and dual-task gait cost detect
              motor-cognitive network involvement non-invasively.
              <span className="evidence-label">Tirhekar et al.</span>
            </li>
            <li>
              LRRK2 G2019S carriers show measurably higher motor severity,
              enabling genetic risk stratification and personalized counseling.
              <span className="evidence-label">Tirhekar et al.</span>
            </li>
            <li>
              Bayesian clustering identifies four motor phenotypes with
              transparent model selection via Evidence Lower Bound.
              <span className="evidence-label">Tirhekar et al.</span>
            </li>
          </ul>
        </section>

        {/* Four domain thrusts */}
        <section className="section">
          <h2 className="section-title">Four domain thrusts</h2>
          <div className="dense-section two-column">
            {thrusts.map(({ node }) => (
              <article key={node.id} className="dense-brief">
                <h3>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </h3>
                {node.frontmatter.summary && <p>{node.frontmatter.summary}</p>}
              </article>
            ))}
          </div>
          <p className="text-block centered">
            See all thrusts on the{" "}
            <Link to="/thrusts">Domain Thrusts page</Link>.
          </p>
        </section>

        {/* Sponsors */}
        <section className="section final-callout">
          <h2 className="section-title">Sponsors and Funding Partners</h2>
          <ul className="tight-list donor-links">
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
          <p>
            Strategic philanthropy, industry collaborations, and clinical trial
            partnerships accelerate translation of multimodal biomarkers into
            care. Visit the{" "}
            <Link to="/partners">partners page</Link> to learn how funding and
            clinical collaborators engage, or connect through the{" "}
            <Link to="/resources">resources portal</Link>.
          </p>
        </section>

      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        donors {
          name
          link
        }
      }
    }
    thrusts: allMarkdownRemark(
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
