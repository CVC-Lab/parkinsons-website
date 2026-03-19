import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../components/style.css";

export default function PaperPathwayClustering() {
  return (
    <Layout>
      <div className="page-container home-page">

        <section className="hero-section" style={{ flexDirection: 'column' }}>
          <div className="hero-text">
            <p style={{ marginBottom: 'var(--spacing-2)' }}>
              <Link to="/related-papers">&larr; Back to Related Papers</Link>
            </p>
            <h1>Pathway Anchored Multimodal Clustering Reveals Circuit Level Signatures in Parkinson's Disease</h1>
            <p>Vinod, A., Eliendula, A.S., Bhardwaj, S., Dev, A., Dominic, A., Bajaj, C.</p>
            <a
              href="https://doi.org/10.64898/2025.12.15.694278"
              className="doi-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full paper &rarr;
            </a>
          </div>
        </section>

        <section className="section">
          <div className="publication-hero-figure">
            <StaticImage
              src="../images/fig_pathway_brain.jpg"
              alt="Pathway-Anchored Multimodal Signatures in Parkinson's Disease showing six neuroanatomical circuits"
              placeholder="blurred"
              layout="fullWidth"
            />
            <p className="figure-caption">
              Multimodal biomarker patterns map onto six clinically relevant
              brain pathways, highlighting disease heterogeneity across motor,
              cognitive, limbic, and vascular domains.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Key findings</h2>
          <ul className="tight-list prose">
            <li>
              A pathway-anchored co-clustering framework (SRVCC) integrates
              structural MRI, DTI, and DaT-SPECT within six predefined
              neuroanatomical circuits.
            </li>
            <li>
              Multimodal Pathway Integrity Scores (MPIS) reveal circuit-level
              imaging heterogeneity linked to motor severity and cognitive
              function.
            </li>
            <li>
              Five imaging-driven patient clusters emerge with distinct
              nigrostriatal, frontostriatal, and sensory-visuospatial profiles.
            </li>
            <li>
              Lower nigrostriatal and frontostriatal pathway integrity is
              associated with higher motor burden; sensory-visuospatial pathway
              shows the strongest association with cognitive function.
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="publication-section-figure">
            <StaticImage
              src="../images/fig_subgroup_landscape.png"
              alt="Parkinson's Subgroup Landscape showing nearest-neighbor patient placement"
              placeholder="blurred"
            />
            <p className="figure-caption">
              Incoming patients are placed within a population-derived subgroup
              landscape. The nearest cohort and key clinical features are
              surfaced to the treating neurologist.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="publication-section-figure">
            <StaticImage
              src="../images/fig_pathways_compact.png"
              alt="Six neuroanatomical pathways and their clinical associations"
              placeholder="blurred"
            />
            <p className="figure-caption">
              Six neuroanatomical pathways — nigrostriatal, frontostriatal,
              sensory-visuospatial, limbic, microvascular, and
              balance/cerebellar — mapped to their clinical burden domains.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Cohort and methods</h2>
          <div className="prose">
            <p>
              The study draws from the PPMI cohort: 185 Parkinson's disease
              patients, 72 healthy controls, and 37 SWEDD participants, all with
              baseline T1 MRI, DTI, and DaT-SPECT imaging.
            </p>
            <p>
              The SRVCC (Scalable Robust Variational Compositional Co-clustering)
              framework learns joint patient and feature clusters. Multimodal
              Pathway Integrity Scores aggregate circuit-specific imaging
              features (fractional anisotropy, mean diffusivity, regional volume,
              and specific binding ratios) with equal modality weighting across
              six predefined PD-relevant circuits.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
}
