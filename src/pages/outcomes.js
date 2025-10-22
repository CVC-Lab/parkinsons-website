import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";

const imagingMetrics = [
  { method: "Nearest Neighbors", f1: "0.960", roc: "0.900" },
  { method: "Random Forest", f1: "0.950", roc: "0.858" },
  { method: "Neural Network", f1: "0.950", roc: "0.843" },
  { method: "Gaussian Process", f1: "0.944", roc: "0.837" },
  { method: "Naive Bayes", f1: "0.935", roc: "0.907" },
];

const csfsaaMetrics = [
  { featureGroup: "Gait & Arm Swing", auc: "0.58 ± 0.16" },
  { featureGroup: "Demographics", auc: "0.81 ± 0.14" },
  { featureGroup: "Clinical", auc: "0.92 ± 0.07" },
  { featureGroup: "All Modalities", auc: "0.93 ± 0.07" },
];

export default function OutcomesPage() {
  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Program outcomes &amp; validation</h1>
            <p>
              We continually evaluate our pipelines across imaging, diffusion, wearables,
              and clinician-facing deployment. This page summarizes quantitative readouts,
              cohort coverage, and the evidence trail that underpins Progressive AI.
            </p>
          </div>
          <div className="hero-visual">
            <StaticImage
              src="../images/clustering_patientdata.png"
              alt="Latent clustering outcomes"
              placeholder="blurred"
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Cohort coverage</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>PPMI integration</h3>
              <p>
                Baseline-first harmonization of 4,775 patients across 388 features covering
                MDS-UPDRS, UPSIT, REM sleep behavior disorder, biospecimens, and genetics.
              </p>
            </article>
            <article className="dense-brief">
              <h3>LRRK2 Consortium</h3>
              <p>
                2,958 participants inform genetic risk analyses and mechanism inference,
                highlighting the 1.89× elevated risk among G2019S carriers.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Wearable cohort</h3>
              <p>
                84 idiopathic Parkinson’s participants with synchronized CSFSAA labels,
                IMU-derived gait metrics, and comprehensive cognitive batteries.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Clinician pilots</h3>
              <p>
                ActionIntel and Free Motion prototypes evaluated with neurologists in
                weekly design reviews to pressure-test usability and interpretability.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Imaging classification performance</h2>
          <p>
            Automated SegFormer-based segmentation combined with DaT-SPECT features enables
            high-fidelity CSFSAA discrimination. Results below reflect cross-validated models
            trained on region-wise volumetrics and SBR-derived statistics.
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
                {imagingMetrics.map((metric) => (
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
            Imaging alone yields AUC 0.70 ± 0.08; combining imaging with clinical and biologic
            features raises AUC to 0.93 ± 0.04.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Wearable-driven CSFSAA prediction</h2>
          <p>
            Histogram Gradient Boosting models trained on PPMI gait assessments quantify the
            contribution of each modality toward predicting CSFSAA status.
          </p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Feature Group</th>
                  <th>Mean AUC ± SD</th>
                </tr>
              </thead>
              <tbody>
                {csfsaaMetrics.map((row) => (
                  <tr key={row.featureGroup}>
                    <td>{row.featureGroup}</td>
                    <td>{row.auc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-block centered">
            SHAP analysis surfaces HVLT retention, Epworth Sleepiness Scale, and right-arm jerk
            amplitude as leading contributors.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Mechanism-inference highlights</h2>
          <ul className="tight-list">
            <li>
              Five motor phenotypes emerge from unsupervised clustering (Silhouette = 0.535),
              capturing differential striatal vulnerability.
            </li>
            <li>
              50.2% hyposmia prevalence and 37.5% REM sleep behavior disorder prevalence
              confirm early cholinergic and brainstem involvement.
            </li>
            <li>
              Objective gait measures correlate with UPDRS-III severity (Spearman r = -0.301,
              p = 7.9×10⁻⁵, n = 166), grounding digital phenotyping in mechanism hypotheses.
            </li>
          </ul>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Looking ahead</h2>
          <p>
            We are expanding evaluation to prospective, multi-site cohorts with emphasis on
            drift audits, fairness reporting, and regulatory documentation. Outcomes will be
            updated quarterly as we release new validation notes and open-source assets.
          </p>
        </section>
      </div>
    </Layout>
  );
}
