import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import PipelineSteps from "../components/PipelineSteps";
import "../components/style.css";

export default function IndexPage({ data }) {
  const thrusts = React.useMemo(
    () => data?.thrusts?.edges?.slice(0, 4) ?? [],
    [data]
  );

  return (
    <Layout>
      <div className="page-container home-page">

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-text">
            <h1>Multimodal biomarkers for differential diagnosis and precision Parkinson's care</h1>
            <p>
              We integrate imaging, diffusion, wearable, and clinical data to
              differentiate Parkinson's disease from look-alikes and to identify
              patient subgroups that respond to different care strategies.
            </p>
            <p className="hero-subtext">
              Four domain thrusts extract features; a clinician-facing workflow
              places each patient within a population-level map and surfaces
              actionable monitoring priorities.
            </p>
            <div className="hero-cta">
              <Link className="button primary" to="/clinician-workflow">
                See the clinician workflow
              </Link>
              <Link className="button secondary" to="/thrusts">
                Explore domain thrusts
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <StaticImage
              src="../images/progressive_ai.jpg"
              alt="Multimodal biomarker pipeline for Parkinson's care"
              placeholder="blurred"
            />
          </div>
        </section>

        {/* What makes our approach different */}
        <section className="section">
          <h2 className="section-title">What makes our approach different</h2>
          <ul className="tight-list prose">
            <li>
              <strong>Multimodal:</strong> Imaging, diffusion, wearable sensors,
              biospecimens, and clinical scales fused in a shared representation
              rather than analyzed in isolation.
            </li>
            <li>
              <strong>Longitudinal:</strong> Time-aware modeling tracks disease
              progression rather than relying on single-visit snapshots.
            </li>
            <li>
              <strong>Subgroup-based:</strong> Population-level discovery identifies
              clusters of patients who share biology and trajectory, enabling
              precision stratification.
            </li>
            <li>
              <strong>Clinician-in-the-loop:</strong> Every inference surfaces in
              interactive tools designed with neurologists, not as a black-box
              prediction.
            </li>
          </ul>
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

        {/* Clinician workflow */}
        <section className="section">
          <h2 className="section-title">Clinician workflow</h2>
          <p className="prose">
            From data collection to decision support in four steps:
          </p>
          <PipelineSteps />
        </section>

        {/* What the clinician sees */}
        <section className="section">
          <h2 className="section-title">What the clinician sees</h2>
          <dl className="clinician-outputs">
            <dt>Subgroup</dt>
            <dd>
              A biomarker-defined subgroup label with population context,
              indicating which cluster the patient most closely resembles.
            </dd>
            <dt>Nearest neighbors</dt>
            <dd>
              The closest patients in the population map, with their
              trajectories and outcomes for clinical comparison.
            </dd>
            <dt>Pathway burden</dt>
            <dd>
              A profile of motor, cognitive, and autonomic pathway contributions
              weighted by the patient's multimodal signature.
            </dd>
            <dt>Monitoring priorities</dt>
            <dd>
              Domain-specific flags highlighting which motor, cognitive, or gait
              measures warrant closest follow-up.
            </dd>
          </dl>
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

        {/* Partner with us */}
        <section className="section final-callout">
          <h2 className="section-title">Partner with us</h2>
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
