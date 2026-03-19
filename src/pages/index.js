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
        <section className="hero-section" style={{ flexDirection: 'column', textAlign: 'center' }}>
          <div className="hero-text" style={{ textAlign: 'center' }}>
            <h1>Precision Neurology for Parkinson's Disease</h1>
            <p>From population patterns to individual care</p>
          </div>
          <div className="hero-figure">
            <StaticImage
              src="../images/fig_hero_workflow.png"
              alt="Precision Neurology for Parkinson's Disease: From population patterns to individual care"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link className="button primary" to="/clinician-workflow">
              See the clinician workflow
            </Link>
            <Link className="button secondary" to="/thrusts">
              Explore domain thrusts
            </Link>
          </div>
        </section>

        {/* Four content blocks */}
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
              <h3>Clinician-Guided Workflow</h3>
              <p>
                Extracted features place each individual within a population-level
                map, translating group-level knowledge into highly personalized
                patient profiles.
              </p>
            </div>
            <div className="content-block">
              <h3>Actionable Precision</h3>
              <p>
                By learning from the population, this workflow equips clinicians
                with individual-level decision support, surfacing patient-specific
                risk stratifications and targeted therapeutic priorities.
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
