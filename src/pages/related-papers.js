import * as React from "react";
import Layout from "../components/layout";
import PaperCard from "../components/PaperCard";
import "../components/style.css";

const papers = [
  {
    id: "paper-pathway",
    title: "Pathway Anchored Multimodal Clustering Reveals Circuit Level Signatures in Parkinson's Disease",
    authors: "Vinod, A., Ellendula, A.S., Bhardwaj, S., Dev, A., Dominic, A., Bajaj, C.",
    status: "Preprint",
    summary:
      "Fuses structural MRI, DTI/free-water, and DaT-SPECT inside anatomically defined circuits. Multimodal Pathway Integrity Scores reveal circuit-level heterogeneity linked to motor and cognitive burden, giving AI4PD an interpretable mechanism layer.",
    link: "https://doi.org/10.64898/2025.12.15.694278",
    detailsLink: "/paper-pathway-clustering",
  },
  {
    id: "paper-biomarkers",
    title: "Integrated Genetic, Molecular, and Wearable Sensor Biomarkers Enable Bayesian Machine Learning-Driven Precision Stratification in Parkinson's Disease",
    authors: "Tirhekar, H.M., Yadav, P., Bajaj, C.",
    status: "Preprint",
    summary:
      "Connects LRRK2 genetics, molecular markers, CSF alpha-synuclein seed amplification, wearable gait features, prodromal signals, and clinical assessments into Bayesian patient phenotypes for precision stratification.",
    link: "https://doi.org/10.64898/2025.12.02.25340302",
    detailsLink: "/paper-integrated-biomarkers",
  },
  {
    id: "paper-motor-states",
    title: "Posterior-Calibrated Multimodal Motor States Reveal Longitudinal and Imaging-Associated Heterogeneity in Parkinson's Disease",
    authors: "Tirhekar, H.M., Yadav, P., Bajaj, C.",
    status: "Manuscript in preparation",
    summary:
      "Reframes Parkinson's motor phenotype as calibrated posterior trajectories rather than hard subtypes. The Hill Prize summary cites 29,366 aligned PPMI motor-state visits, 4,773 participant identifiers, patient-blocked bootstrap calibration, imaging-to-posterior prediction, and BioFIND transfer checks.",
  },
  {
    id: "paper-coclustering",
    title: "Scalable Robust Bayesian Co-Clustering with Compositional ELBOs",
    authors: "Vinod, A., Bajaj, C.",
    status: "Preprint",
    summary:
      "Provides the SRVCC population-latent-space substrate behind the digital twin: joint patient and feature clusters, compositional ELBO regularization, noise learning, and missing-input robustness for high-dimensional multimodal data.",
    link: "https://arxiv.org/abs/2504.04079",
    detailsLink: "https://cvc-lab.github.io/projects/scalable-robust-bayesian-co-clustering/",
  },
];

export default function RelatedPapersPage() {
  return (
    <Layout>
      <div className="page-container home-page">

        <section className="hero-section">
          <div className="hero-text">
            <h1>Related Papers</h1>
            <p>
              Four Parkinson's papers underpin the AI4PD digital twin story: patient-feature
              co-clustering, pathway-level imaging mechanisms, multimodal biomarker
              stratification, and posterior-calibrated motor-state trajectories.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Manuscripts</h2>
          <div className="paper-card-grid">
            {papers.map((paper, i) => (
              <div id={paper.id} key={paper.id || i}>
                <PaperCard {...paper} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}
