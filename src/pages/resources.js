import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";

const dataResources = [
  {
    name: "PPMI (Parkinson’s Progression Markers Initiative)",
    description:
      "Primary longitudinal cohort with clinical, imaging, biospecimen, and genetic data. Requires data use agreement via Michael J. Fox Foundation.",
    link: "https://www.ppmi-info.org/access-data-specimens/download-data",
  },
  {
    name: "synapse.org Parkinson’s repositories",
    description:
      "Wearable, smartphone, handwriting, and voice datasets curated for open challenges and benchmarking.",
    link: "https://www.synapse.org",
  },
  {
    name: "Mindboggle-101",
    description:
      "Anatomically labeled T1-weighted MRIs used for SegFormer pretraining and validation.",
    link: "https://mindboggle.info/data.html",
  },
];

const engagement = [
  {
    title: "Connect with Professor Bajaj",
    detail:
      "Share potential collaborations or student opportunities directly with our principal investigator.",
    linkText: "Faculty profile",
    link: "https://www.cs.utexas.edu/~bajaj/",
  },
  {
    title: "Oden Institute contact portal",
    detail:
      "For media inquiries, philanthropy, or institutional partnerships, please contact the Oden Institute communications team.",
    linkText: "Open contact page",
    link: "https://www.oden.utexas.edu/contact/",
  },
  {
    title: "Texas Advanced Computing Center",
    detail:
      "External partners can apply for compute allocations that align with our GPU-intensive workloads.",
    linkText: "Request resources",
    link: "https://www.tacc.utexas.edu/use-tacc/allocations/",
  },
];

export default function ResourcesPage() {
  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Resources &amp; Collaboration</h1>
            <p>
              Access the datasets, documentation, and engagement channels that
              power our progressive AI program. We emphasize responsible data
              stewardship and transparent sharing.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Core datasets</h2>
          <div className="dense-section two-column">
            {dataResources.map((resource) => (
              <article key={resource.name} className="dense-brief">
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
                <p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    Access resource
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Lab documentation</h2>
          <p>
            Explore protocol drafts, segmentation benchmarks, and reproducible
            notebooks on our background page and HackMD workspace. Highlights
            include:
          </p>
          <ul className="research-links tight-list">
            <li>
              <a
                href="https://hackmd.io/CUwJaR4nRhG1VVT7zivVQA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Segmentation for biomarker extraction playbook
              </a>
            </li>
            <li>
              <a
                href="https://hackmd.io/bSbn-rF1RMyA4jial75-oA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diffusion MRI processing workflow for PPMI
              </a>
            </li>
            <li>
              <a
                href="https://hackmd.io/a4ZKxOy8SCeICVYtpF3sow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dataset-specific results tracker
              </a>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Open-source roadmap</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>SegFormer deployment scripts</h3>
              <p>
                Containerized pipelines for MRI preprocessing, segmentation, DaT-SPECT alignment,
                and SBR extraction. Repository release planned December 2025.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Progressive agent notebooks</h3>
              <p>
                Reference implementations of stochastic Hamiltonian policy optimization and
                uncertainty calibration on synthetic cohorts, packaged with the upcoming technical
                note.
              </p>
            </article>
            <article className="dense-brief">
              <h3>ActionIntel &amp; Free Motion demos</h3>
              <p>
                Interactive Dash applications highlighting sensor-clinical correlations,
                counterfactual therapy simulations, and visualization of asymmetric gait patterns.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Engage with us</h2>
          <div className="dense-section two-column">
            {engagement.map((item) => (
              <article key={item.title} className="dense-brief">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.linkText}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Responsible data stewardship</h2>
          <p>
            All collaborations comply with HIPAA, GDPR, and sponsor-specific
            requirements. We utilize secure UT Austin data enclaves, audited
            access logs, and federated learning when raw data sharing is
            constrained.
          </p>
        </section>
      </div>
    </Layout>
  );
}
