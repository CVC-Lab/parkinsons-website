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
  const workflows = React.useMemo(
    () => data?.workflows?.edges?.slice(0, 2) ?? [],
    [data]
  );

  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Progressive AI for Parkinson's care</h1>
            <p>
              We build actionable, multimodal agents that differentially diagnose
              Parkinson's mechanisms, surface subtype-specific biomarkers, and
              keep neurologists in the loop with interactive decision support.
            </p>
            <p className="hero-subtext">
              Two coordinated pillars—domain thrusts and clinical workflows—move
              harmonized data from cohorts into bedside insight.
            </p>
            <div className="hero-cta">
              <Link className="button primary" to="/thrusts">
                Explore the thrusts
              </Link>
              <Link className="button secondary" to="/workflows">
                View the workflows
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">The problem we are solving</h2>
          <ul className="tight-list">
            <li>
              Parkinson’s disease is heterogeneous and multisystem; current care
              pathways remain largely symptomatic with limited disease-modifying
              success.
            </li>
            <li>
              Clinical scales are episodic and noisy—objective imaging, diffusion,
              biospecimen, and wearable markers tighten risk stratification.
            </li>
            <li>
              Multimodal data remains siloed; coordinated inference unlocks
              individualized trajectories and intervention planning.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Our architecture</h2>
          <p>
            We harmonize PPMI and allied cohort assets—DaT-SPECT, T1 and
            diffusion MRI, biospecimens, genetics, gait sensors, and rich
            clinical batteries—into progressive agents that reason over time.
            Modality-specific thrusts extract stable features, while workflows
            coordinate generative modeling and clinician delivery.
          </p>
          <p>
            The result: multimodal latent spaces that expose severity-aligned
            phenotypes, plus ActionIntel tooling that grounds recommendations
            in real-world practice.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Four coordinated thrusts</h2>
          <div className="dense-section">
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

        <section className="section">
          <h2 className="section-title">Two translating workflows</h2>
          <div className="dense-section">
            {workflows.map(({ node }) => (
              <article key={node.id} className="dense-brief">
                <h3>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </h3>
                {node.frontmatter.summary && <p>{node.frontmatter.summary}</p>}
              </article>
            ))}
          </div>
          <p className="text-block centered">
            Learn how modeling meets care on the{" "}
            <Link to="/workflows">Workflows page</Link>.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Recent findings</h2>
          <ul className="tight-list">
            <li>
              Diffusion metrics fused with clinical scales uncover severity-aligned
              latent subtypes with interpretable diffusion asymmetries.
            </li>
            <li>
              Automated DaT-SPECT and T1 MRI processing differentiates CSFSAA
              positive vs. negative Parkinsonisms with AUC 0.93 ± 0.04 when fused
              with clinical and biologic anchors.
            </li>
            <li>
              Wearable-derived gait and arm-swing metrics partner with cognition to
              predict CSFSAA status non-invasively (AUC 0.93 ± 0.07).
            </li>
            <li>
              Mechanism inference links multimodal signatures to pathways such as
              LRRK2 kinase hyperactivity and brainstem α-synucleinopathy.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Status &amp; near-term priorities</h2>
          <ul className="tight-list">
            <li>
              Core imaging pipelines, diffusion–clinical co-clustering, and wearable
              phenotyping are trained on harmonized cohorts.
            </li>
            <li>
              Clinician-facing prototypes integrate patient timelines, motion
              analysis, and policy recommendations for case review.
            </li>
            <li>
              Upcoming work: prospective validation across sites, device-drift
              audits, subgroup fairness reporting, and SOP finalization for
              longitudinal follow-up.
            </li>
          </ul>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Partner with us</h2>
          <p>
            Strategic philanthropy, industry collaborations, and clinical trial
            partnerships accelerate progressive AI deployment. Visit the{" "}
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
