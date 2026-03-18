import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import PipelineSteps from "../components/PipelineSteps";
import "../components/style.css";

export default function ClinicianWorkflowPage({ data }) {
  const thrusts = data?.thrusts?.edges ?? [];

  return (
    <Layout>
      <div className="page-container home-page">

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-text">
            <h1>How clinicians use multimodal insights</h1>
            <p>
              Our workflow takes multimodal patient data, discovers population-level
              subgroups, places each new patient into the nearest subgroup, and
              delivers interpretable decision support to the treating neurologist.
            </p>
            <p className="hero-subtext">
              Every step is designed for transparency: the clinician sees which
              subgroup, which neighbors, and which pathways drive each recommendation.
            </p>
          </div>
          <div className="hero-visual">
            <StaticImage
              src="../images/training.png"
              alt="Clinician workflow pipeline overview"
              placeholder="blurred"
            />
          </div>
        </section>

        {/* The clinical challenge */}
        <section className="section">
          <h2 className="section-title">The clinical challenge</h2>
          <div className="prose">
            <p>
              Parkinson's disease shares motor and non-motor features with
              multiple system atrophy (MSA), progressive supranuclear palsy (PSP),
              and dementia with Lewy bodies (DLB). Clinical scales alone often
              cannot distinguish them early.
            </p>
            <p>
              Clinic visits capture only a snapshot. Day-to-day variation in gait,
              tremor, and cognition goes unmeasured. Imaging, wearable, and
              molecular data fill these gaps with quantitative, longitudinal
              evidence. Yet these modalities are typically analyzed in isolation.
              Coordinated inference across modalities unlocks individualized
              trajectories and intervention planning.
            </p>
          </div>
        </section>

        {/* Subgroup discovery + patient placement */}
        <section className="section">
          <h2 className="section-title">Population subgroup discovery and patient placement</h2>
          <div className="prose">
            <p>
              Rather than treating every Parkinson's patient identically, we use
              multimodal data to discover population-level subgroups: clusters of
              patients who share biology and disease trajectory.
            </p>
            <p>
              When a new patient arrives, their multimodal features are projected
              into this population map. The system identifies the nearest subgroup
              and retrieves comparable patients, providing the clinician with
              outcome context drawn from real cases.
            </p>
            <p>
              This reframes traditional latent-space modeling into a practical
              clinical tool: subgroup labels, nearest-neighbor comparisons, and
              pathway-level explanations that neurologists can audit and act on.
            </p>
          </div>
          <div className="image-container">
            <StaticImage
              src="../images/clustering_patientdata.png"
              alt="Patient subgroup discovery through multimodal clustering"
              placeholder="blurred"
            />
          </div>
        </section>

        {/* Pipeline */}
        <section className="section">
          <h2 className="section-title">The pipeline</h2>
          <PipelineSteps />
          <div className="image-container" style={{ marginTop: '2rem' }}>
            <StaticImage
              src="../images/NewProcess.png"
              alt="Multimodal processing pipeline"
              placeholder="blurred"
            />
          </div>
        </section>

        {/* What the clinician sees */}
        <section className="section">
          <h2 className="section-title">What the clinician sees</h2>
          <dl className="clinician-outputs">
            <dt>Subgroup label</dt>
            <dd>
              A biomarker-defined cluster assignment with population context,
              indicating which patient group the individual most closely resembles.
            </dd>
            <dt>Nearest neighbors</dt>
            <dd>
              The closest patients in the population map with their longitudinal
              trajectories and treatment outcomes.
            </dd>
            <dt>Pathway burden</dt>
            <dd>
              Motor, cognitive, and autonomic pathway contributions weighted by
              the patient's multimodal signature.
            </dd>
            <dt>Monitoring priorities</dt>
            <dd>
              Domain-specific flags highlighting which measures warrant closest
              follow-up and suggested assessment intervals.
            </dd>
            <dt>Research and trial flags</dt>
            <dd>
              When the patient's profile aligns with active research cohorts or
              clinical trials, the system surfaces potential enrollment matches.
            </dd>
          </dl>
        </section>

        {/* Domain thrusts feeding the workflow */}
        <section className="section">
          <h2 className="section-title">Domain thrusts feeding the workflow</h2>
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
            Full briefs on the{" "}
            <Link to="/thrusts">Domain Thrusts page</Link>.
          </p>
        </section>

      </div>
    </Layout>
  );
}

export const query = graphql`
  query ClinicianWorkflowPage {
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
