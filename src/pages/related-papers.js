import * as React from "react";
import Layout from "../components/layout";
import PaperCard from "../components/PaperCard";
import "../components/style.css";

const papers = [
  {
    title: "Pathway Anchored Multimodal Clustering Reveals Circuit Level Signatures in Parkinson's Disease",
    authors: "Vinod, A., Eliendula, A.S., Bhardwaj, S., Dev, A., Dominic, A., Bajaj, C.",
    status: "Preprint",
    summary:
      "Presents a pathway-anchored co-clustering framework (SRVCC) integrating structural MRI, DTI, and DaT-SPECT within six predefined neuroanatomical circuits. Multimodal Pathway Integrity Scores reveal circuit-level imaging heterogeneity linked to motor severity and cognitive function across five imaging-driven patient clusters in the PPMI cohort.",
    link: "https://doi.org/10.64898/2025.12.15.694278",
    detailsLink: "/paper-pathway-clustering",
  },
  {
    title: "Integrated Genetic, Molecular, and Wearable Sensor Biomarkers Enable Bayesian Machine Learning-Driven Precision Stratification in Parkinson's Disease",
    authors: "Tirhekar, H.M., Yadav, P., Bajaj, C.",
    status: "Preprint",
    summary:
      "Integrates LRRK2 G2019S genetic status, urinary phospho-LRRK2, CSF alpha-synuclein seed amplification, and IMU-derived gait metrics into a Bayesian clustering framework. Identifies four motor phenotypes across 4,775 PPMI patients and 627 LRRK2 Consortium participants, with a risk prediction model enabling personalized prognostic counseling.",
    link: "https://doi.org/10.64898/2025.12.02.25340302",
    detailsLink: "/paper-integrated-biomarkers",
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
              Manuscripts underpinning our multimodal biomarker program. Each card
              summarizes a key finding and links to the full paper.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Manuscripts</h2>
          <div className="paper-card-grid">
            {papers.map((paper, i) => (
              <PaperCard key={i} {...paper} />
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
}
