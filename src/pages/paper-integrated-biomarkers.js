import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../components/style.css";

export default function PaperIntegratedBiomarkers() {
  return (
    <Layout>
      <div className="page-container home-page">

        <section className="hero-section" style={{ flexDirection: 'column' }}>
          <div className="hero-text">
            <p style={{ marginBottom: 'var(--spacing-2)' }}>
              <Link to="/related-papers">&larr; Back to Related Papers</Link>
            </p>
            <h1>Integrated Genetic, Molecular, and Wearable Sensor Biomarkers Enable Bayesian Machine Learning-Driven Precision Stratification in Parkinson's Disease</h1>
            <p>Tirhekar, H.M., Yadav, P., Bajaj, C.</p>
            <p className="hero-subtext">
              A Comprehensive Multi-Cohort Validation Study
            </p>
            <a
              href="https://doi.org/10.64898/2025.12.02.25340302"
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
              src="../images/fig_biomarker_fusion.jpg"
              alt="Multimodal Biomarker Fusion in Parkinson's Disease: Towards Precision Neurology"
              placeholder="blurred"
              layout="fullWidth"
            />
            <p className="figure-caption">
              Multimodal biomarker fusion: imaging, wearables, genetics, molecular
              assays, and clinical scores converge into a unified patient portrait
              yielding clinically actionable outputs.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Key findings</h2>
          <ul className="tight-list prose">
            <li>
              LRRK2 G2019S carriers show measurably higher motor severity,
              enabling genetic risk stratification and personalized prognostic
              counseling.
            </li>
            <li>
              Wearable arm-swing asymmetry detects unilateral substantia nigra
              degeneration; dual-task gait cost reveals cognitive-motor network
              failure.
            </li>
            <li>
              Bayesian clustering with Dirichlet Process priors identifies four
              motor phenotypes with transparent model selection via Evidence
              Lower Bound.
            </li>
            <li>
              A risk prediction model enables personalized prognostic counseling
              and treatment selection across genetic and molecular subtypes.
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="publication-section-figure">
            <StaticImage
              src="../images/fig_multimodal_fusion.png"
              alt="Patient-level multimodal fusion integrating imaging, wearables, genetics, and molecular markers"
              placeholder="blurred"
            />
            <p className="figure-caption">
              Patient-level multimodal fusion: imaging, wearables, genetics,
              and molecular markers integrated into clinical assessment outputs
              including differential diagnosis clues, subtype identification,
              severity alignment, and monitoring priorities.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Cohorts and methods</h2>
          <div className="prose">
            <p>
              This study leverages two large complementary cohorts: the
              Parkinson's Progression Markers Initiative (PPMI) with 4,775
              unique patients and 14,473 longitudinal assessments spanning 14.5
              years, and the LRRK2 Consortium with 627 individuals (347 G2019S
              carriers, 280 non-carrier controls).
            </p>
            <p>
              The framework integrates genetic profiling (LRRK2 G2019S
              genotyping), molecular biomarkers (urinary phospho-S1292-LRRK2,
              CSF alpha-synuclein seed amplification), wearable phenotyping
              (tri-axial IMU accelerometers and gyroscopes at 100 Hz), and
              clinical assessments (MDS-UPDRS, MoCA, UPSIT, SCOPA-AUT) through
              Bayesian Gaussian Mixture Models with uncertainty quantification.
            </p>
          </div>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Clinical outputs</h2>
          <div className="content-blocks">
            <div className="content-block">
              <h3>Genetic risk stratification</h3>
              <p>Personalized counseling based on LRRK2 carrier status and associated motor severity profiles.</p>
            </div>
            <div className="content-block">
              <h3>Continuous digital monitoring</h3>
              <p>Wearable-derived gait and arm-swing metrics for ecological, day-to-day tracking beyond clinic visits.</p>
            </div>
            <div className="content-block">
              <h3>Mechanism-based targeting</h3>
              <p>Molecular biomarker profiles guide selection of pathway-specific therapeutic strategies.</p>
            </div>
            <div className="content-block">
              <h3>Prodromal detection</h3>
              <p>Early intervention windows identified during pre-manifest stages (Braak stages 1-3).</p>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
