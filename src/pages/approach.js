import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";

export default function ApproachPage({ data }) {
  const thrusts = data?.thrusts?.edges ?? [];
  const workflows = data?.workflows?.edges ?? [];

  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Our methodology for progressive Parkinson’s intelligence</h1>
            <p>
              Progressive AI harmonizes imaging, diffusion, biospecimen, wearable, and
              clinical data into interpretable latent spaces and clinician-facing tools.
              Four domain thrusts build high-quality modality pipelines, while two workflows
              transform those signals into decision-ready intelligence.
            </p>
            <p className="hero-subtext">
              This page details how the program is structured, the workflows we operate,
              and how thrusts and workflows reinforce one another.
            </p>
          </div>
          <div className="hero-visual">
            <StaticImage
              src="../images/training.png"
              alt="Integrated progressive AI pipeline"
              placeholder="blurred"
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Why this approach</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>Heterogeneous disease</h3>
              <p>
                Parkinson’s manifests across dopaminergic, cholinergic, cognitive, and motor domains.
                Capturing heterogeneity demands multimodal evidence and robust harmonization.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Episodic clinical scales</h3>
              <p>
                Clinic visits miss day-to-day variation. Imaging, diffusion, and wearables fill the gaps
                and provide quantitative anchors for precision interventions.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Actionable translation</h3>
              <p>
                Insights must reach neurologists with context. Our workflows produce interpretable,
                auditable outputs that connect data science to bedside action.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Program architecture</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>Domain thrusts</h3>
              <p>
                Modality-focused teams deliver reliable feature extraction for imaging, diffusion,
                wearable-cognitive phenotyping, and mechanism inference. Each thrust enforces rigorous
                quality control, provenance tracking, and quantitative validation.
              </p>
              <p>
                Visit the <Link to="/thrusts">Domain Thrusts page</Link> for full briefs,
                figures, and cohort specifics.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Operational workflows</h3>
              <p>
                Workflow 1 builds generative latent spaces that align modalities; Workflow 2 delivers
                interpreted insight to clinicians via ActionIntel, Free Motion, and sensor-clinical
                correlation dashboards.
              </p>
              <p>
                Explore both on the <Link to="/workflows">Workflows page</Link>.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Workflow snapshots</h2>
          <div className="dense-section two-column">
            {workflows.map(({ node }) => (
              <article key={node.id} className="dense-brief">
                <h3>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </h3>
                {node.frontmatter.summary && <p>{node.frontmatter.summary}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Thrust contributions</h2>
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
        </section>

        <section className="section">
          <h2 className="section-title">Progressive pipeline overview</h2>
          <div className="content-flex">
            <div className="text-block">
              <ol className="tight-list">
                <li>
                  <strong>Signal harmonization:</strong> Align clinical timelines,
                  imaging acquisition dates, and sensor sampling rates to a single
                  canonical calendar.
                </li>
                <li>
                  <strong>Representation learning:</strong> Construct latent spaces
                  via multimodal co-clustering and contrastive encoders that retain
                  interpretability.
                </li>
                <li>
                  <strong>Policy training:</strong> Apply progressive reinforcement
                  learning with patient-specific constraints, leveraging recent
                  advances in pointwise control on Hamiltonian manifolds.
                </li>
                <li>
                  <strong>Interactive deployment:</strong> Stream inference to
                  ActionIntel, enabling scenario testing, counterfactual analysis,
                  and shared decision-making.
                </li>
              </ol>
            </div>
            <div className="image-container">
              <StaticImage
                src="../images/NewProcess.png"
                alt="Progressive pipeline overview"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Validation checkpoints</h2>
          <ul className="tight-list">
            <li>
              Imaging pipelines cut manual processing from ~330 minutes to ~12 minutes per subject,
              enabling cohort-scale DaT-SPECT + T1 analysis.
            </li>
            <li>
              Multimodal co-clustering with diffusion metrics yields severity-aligned subtypes
              and feeds Workflow 1 latent modeling.
            </li>
            <li>
              Wearable and cognitive fusion predicts CSFSAA status with AUC 0.93 ± 0.07, complementing
              invasive assays.
            </li>
            <li>
              Mechanism inference verifies 36 claims across genetic, dopaminergic, cholinergic, gait,
              and cross-pathway domains with reproducible code.
            </li>
          </ul>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Dig deeper</h2>
          <p>
            Read the detailed thrust briefs, walk through each workflow, or explore background context
            on Parkinson’s neurobiology. Complementary resources live on the{" "}
            <Link to="/thrusts">Thrusts</Link>, <Link to="/workflows">Workflows</Link>, and{" "}
            <Link to="/background">Background</Link> pages.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ApproachPage {
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
    workflows: allMarkdownRemark(
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
