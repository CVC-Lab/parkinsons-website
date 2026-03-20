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
        <section className="hero-section hero-stack">
          <div className="hero-text">
            <h1>How clinicians use multimodal insights</h1>
            <p>
              Our workflow takes multimodal patient data, discovers population-level
              subgroups, places each new patient into the nearest subgroup, and
              delivers interpretable decision support to the treating neurologist.
            </p>
          </div>
          <div className="hero-figure">
            <StaticImage
              src="../images/clinician-picture.png"
              alt="Clinical workflow: from large multimodal cohort to individual patient application"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
        </section>

        {/* Four content blocks */}
        <section className="section">
          <div className="content-blocks">
            <div className="content-block">
              <h3>Multimodal Fusion</h3>
              <p>
                Integrating genetics, imaging, clinical assessments, molecular
                bio-specimens, and wearable data from diverse populations to
                build comprehensive disease profiles.
              </p>
            </div>
            <div className="content-block">
              <h3>Cluster Identification</h3>
              <p>
                Generative population modeling uncovers latent biomarker
                associations, grouping patients into distinct mechanistic
                subtypes such as tremor-dominant (slow progression), PIGD
                (rapid progression), and cognitive-behavioral clusters.
              </p>
            </div>
            <div className="content-block">
              <h3>Patient Application</h3>
              <p>
                Population-level knowledge translates into individual care,
                providing the neurologist with differential diagnosis support,
                prognostic trajectory insights, and therapeutic trial
                stratification.
              </p>
            </div>
            <div className="content-block">
              <h3>The Twin Approach</h3>
              <p>
                Translational AI enables patient-level precision therapeutics
                and support without replacing clinical judgment, bridging the
                gap between large-scale population learning and individualized
                decision-making.
              </p>
            </div>
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
          </div>
          <div className="publication-section-figure">
            <StaticImage
              src="../images/fig_subgroup_landscape.png"
              alt="Parkinson's Subgroup Landscape: nearest-neighbor patient placement"
              placeholder="blurred"
            />
          </div>
        </section>

        {/* Pipeline */}
        <section className="section">
          <h2 className="section-title">The pipeline</h2>
          <PipelineSteps />
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
          </dl>
          <div className="publication-section-figure">
            <StaticImage
              src="../images/fig_dashboard.png"
              alt="Parkinson's Disease Decision Support Dashboard"
              placeholder="blurred"
            />
            <p className="figure-caption">
              Decision support dashboard concept: patient summary, subgroup
              classification, nearest-neighbor matches, and follow-up recommendations.
            </p>
          </div>
          <p className="workflow-inline-link">
            Explore the interactive workflow in the{" "}
            <a
              href="https://cvc-lab.github.io/parkinson-viz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Parkinson Viz dashboard
            </a>
            .
          </p>
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
