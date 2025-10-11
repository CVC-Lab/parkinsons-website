import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const experimentMetrics = [
  { method: "Nearest Neighbors", f1: "0.960", roc: "0.900" },
  { method: "Random Forest", f1: "0.950", roc: "0.858" },
  { method: "Neural Network", f1: "0.950", roc: "0.843" },
  { method: "Gaussian Process", f1: "0.944", roc: "0.837" },
  { method: "Naive Bayes", f1: "0.935", roc: "0.907" },
];

export default function ResearchPage() {
  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Research Program</h1>
            <p>
              Our lab designs progressive AI agents that cross-correlate
              multimodal signals—clinical assessments, imaging, biospecimens,
              genetics, and digital phenotypes—to produce individualized
              intervention roadmaps for Parkinson’s disease.
            </p>
            <p className="hero-subtext">
              The work spans data engineering, neuroimaging analytics,
              reinforcement learning, and clinician-centered visualization.
            </p>
            <div className="hero-cta">
              <Link className="button primary" to="/background">
                Disease background
              </Link>
              <Link className="button secondary" to="/resources">
                Access datasets &amp; code
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <StaticImage
              src="../images/analysis.png"
              alt="Segmentation and analysis workflow"
              placeholder="blurred"
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Program pillars</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>SegFormer-based neuroimaging</h3>
              <p>
                Mindboggle-101 pretraining and PPMI fine-tuning yield 62-label striatal maps,
                enabling individualized SBR extraction in ~12 minutes per subject with
                reproducible volumetrics.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Progressive decision agents</h3>
              <p>
                Stochastic Hamiltonian dynamics provide stable policy optimization under partial
                observability, continually updating treatment recommendations as new data streams
                arrive.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Multimodal co-clustering</h3>
              <p>
                Variational Bayesian co-clustering links imaging phenotypes, digital biomarkers,
                and molecular profiles to reveal patient subgroups with rapid motor decline.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Human-centered tooling</h3>
              <p>
                ActionIntel and Free Motion align projected trajectories, gait asymmetries, and
                uncertainty metrics with clinical evaluation, ensuring neurologist oversight.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="content-flex">
            <div className="text-block column-text">
              <h2 className="section-title">Segmentation and biomarker extraction</h2>
              <p>
                SegFormer ingests skull-stripped, Z-score normalized, and discretized MRI slices
                across sagittal, coronal, and axial planes. Gaussian noise augmentation closes the
                domain gap between Mindboggle training data and PPMI clinical scans.
              </p>
              <p>
                The resulting 3D striatal masks align with DaT-SPECT via rigid registration,
                enabling patient-specific SBR ratio computation without hand-crafted ROIs. This
                accelerates biomarker delivery for large cohorts and downstream machine learning.
              </p>
              <ul className="tight-list">
                <li>Slice sampling at 1/4, 1/8, 1/16, and 1/32 resolutions captures multi-scale detail.</li>
                <li>Alignment to MNI space guarantees consistent ROI extraction across longitudinal visits.</li>
                <li>Automated QA flags outliers using Dice overlap against atlas priors before SBR export.</li>
              </ul>
            </div>
            <div className="image-container">
              <StaticImage
                src="../images/3Images.png"
                alt="Segmentation masks overlaid on MRI and DaTSCAN"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="content-flex reverse">
            <div className="image-container">
              <StaticImage
                src="../images/dti_images.png"
                alt="Diffusion imaging examples"
                placeholder="blurred"
              />
            </div>
            <div className="text-block column-text">
              <h2 className="section-title">Multimodal integration</h2>
              <p>
                Beyond DaT-SPECT and T1 MRI, we mine diffusion tensor imaging (DTI), T2 MRI, and
                functional MRI to capture white matter integrity and network synchrony. Fractional
                anisotropy and mean diffusivity metrics across 112 regions combine with olfactory,
                sleep, autonomic, and mood assessments.
              </p>
              <p>
                Wearable accelerometer and gyroscope traces are distilled into Level 2 motion codes—
                arm swing asymmetry, tremor amplitude, stride regularity—that directly feed state
                estimation for our agents.
              </p>
              <ul className="tight-list">
                <li>DTI-derived metrics help detect substantia nigra pathway degradation before overt tremor.</li>
                <li>Smartwatch levodopa response studies align home mobility with medication dosing windows.</li>
                <li>Keyboard and handwriting dynamics quantify bradykinesia progression with weekly granularity.</li>
              </ul>
            </div>
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
                src="../images/clustering_patientdata.png"
                alt="Patient clustering visualization"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Key experimental readouts</h2>
          <p>
            We evaluate segmentation fidelity, biomarker discrimination, and
            policy performance on cross-validated cohorts. Highlighted metrics
            from SBR-based disease classification are below:
          </p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>F1-score</th>
                  <th>ROC-AUC</th>
                </tr>
              </thead>
              <tbody>
                {experimentMetrics.map((metric) => (
                  <tr key={metric.method}>
                    <td>{metric.method}</td>
                    <td>{metric.f1}</td>
                    <td>{metric.roc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-block centered">
            Parallel work measures policy improvement against clinician baselines
            using simulated patient trajectories and digital twin models. Results
            will be released in our upcoming technical note (<em>Fall 2025</em>).
          </p>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Collaborate with the research team</h2>
          <p>
            We welcome partners interested in dataset sharing agreements,
            multi-center clinical validation, and joint grant proposals.
            Introduce your project using the intake form linked on our{" "}
            <Link to="/resources">resources page</Link>.
          </p>
        </section>
      </div>
    </Layout>
  );
}
