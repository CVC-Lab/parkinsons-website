import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Silo2Page() {
  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Comprehensive Parkinson's Disease Mechanism Inference Analysis</h1>
            <p>
              This project documents a mechanism-based computational framework for Parkinson's
              disease analysis, analyzing data across two major cohorts: the Parkinson's
              Progression Markers Initiative (PPMI, n=14,473 patients) and the LRRK2 Consortium
              (n=2,958 individuals).
            </p>
            <p className="hero-subtext">
              The goal was to shift the paradigm from classifying patients merely by symptoms
              to inferring underlying biological pathway dysfunctions.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">I. Foundational Methodology and Research Rigor</h2>
          <p>Our methodology focused on mechanism inference.</p>

          <h3>Paradigm Shift to Mechanisms</h3>
          <p>
            We moved beyond traditional symptom-based classification (e.g., "tremor-dominant PD")
            to identify the specific biological pathway dysfunctions (such as dopaminergic
            degeneration or LRRK2 kinase activity) causing observed clinical manifestations.
          </p>

          <h3>Biological Pathways Analyzed</h3>
          <p>The analysis covered 5 major categories implicated in PD pathogenesis:</p>
          <ul className="tight-list">
            <li>Pathway 01: Dopaminergic Degeneration & Motor Control (Nigrostriatal tract)</li>
            <li>Pathway 02: Genetic & Molecular Mechanisms (LRRK2 kinase, α-Synuclein pathology)</li>
            <li>Pathway 03: Cholinergic & Cognitive Control (Olfaction, cognition, sleep disorders)</li>
            <li>Pathway 06: Gait Dynamics & Wearable Sensors (Objective kinematic measures)</li>
            <li>Pathway 08: Cross-Pathway Integration (Multimodal characterization)</li>
          </ul>

          <h3>Advanced Clustering Technique</h3>
          <p>
            We employed a Bayesian Gaussian Mixture Model (B-GMM) with a Dirichlet Process Prior
            to automatically determine the optimal number of patient subgroups (phenotypes) based
            on statistical criteria, such as the lowest Bayesian Information Criterion (BIC).
          </p>

          <h3>Compliance</h3>
          <p>
            We maintained complete data integrity by strictly enforcing NO data imputation; only
            actual measured values were analyzed. All 36 evidence-based research claims are
            supported by complete code-to-result traceability.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">II. Major Verified Findings (Tier 1 Discoveries)</h2>
          <p>
            The analysis generated 36 verified claims. The following are the most clinically
            significant discoveries:
          </p>

          <h3>1. Genetic Risk Quantification: LRRK2 G2019S</h3>
          <div className="progressive-ai-image">
            <StaticImage
              src="../images/02_lrrk2_penetrance_analysis.png"
              alt="LRRK2 Penetrance Analysis"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 1: LRRK2 Penetrance Analysis demonstrating difference in PD prevalence
              between LRRK2 carriers and non-carriers
            </p>
          </div>
          <ul className="tight-list">
            <li>
              <strong>Finding:</strong> The LRRK2 G2019S mutation confers a 1.89-fold increased
              risk for Parkinson's disease in the LRRK2 Consortium cohort (n=2,958)
            </li>
            <li>
              <strong>Supporting Evidence:</strong> 49.7% of LRRK2-positive carriers developed PD
              (805/1,620), compared to 26.3% of LRRK2-negative non-carriers (352/1,338)
            </li>
            <li>
              <strong>Statistical Proof:</strong> The association is highly significant
              (χ² = 167.263, p &lt; 0.001)
            </li>
          </ul>

          <h3>2. Motor Phenotype Heterogeneity</h3>
          <div className="progressive-ai-image">
            <StaticImage
              src="../images/01_motor_phenotype_clusters.png"
              alt="Motor Phenotype Clusters (PCA)"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 2: Motor Phenotype Clusters - 4,166 patients plotted in 2D space (PCA) with
              71.7% variance preserved, visually confirming separation of 5 phenotypes
            </p>
          </div>
          <ul className="tight-list">
            <li>
              <strong>Finding:</strong> Unsupervised clustering of 4,166 baseline UPDRS-III motor
              assessments identified 5 distinct motor phenotypes in PD patients
            </li>
            <li>
              <strong>Supporting Evidence:</strong> The clusters demonstrated moderate-good
              separation validated by a Silhouette Score of 0.535
            </li>
            <li>
              <strong>Clinical Profile:</strong> The phenotypes showed a clear severity gradient,
              ranging from the largest cluster (47.4%, Minimal/Early-stage, mean UPDRS=2.49) to
              the smallest, most severely impaired cluster (3.1%, Severe impairment, mean
              UPDRS=34.61)
            </li>
          </ul>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/07_motor_phenotype_profiles.png"
              alt="Motor Phenotype Profiles"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 3: Motor Phenotype Profiles showing mean subscale scores by phenotype
            </p>
          </div>

          <h3>3. Prodromal Olfactory Dysfunction</h3>
          <div className="progressive-ai-image">
            <StaticImage
              src="../images/03_moca_upsit_distributions.png"
              alt="MoCA & UPSIT Distributions"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 4: MoCA & UPSIT Distributions highlighting 50.2% hyposmia prevalence
            </p>
          </div>
          <ul className="tight-list">
            <li>
              <strong>Finding:</strong> 50.2% of the assessed cohort (n=5,122) exhibited olfactory
              dysfunction (hyposmia, UPSIT score &lt; 25)
            </li>
            <li>
              <strong>Mechanism Inference:</strong> This high prevalence confirms hyposmia as a
              major prodromal marker for PD, indicating α-synuclein pathology has reached the
              olfactory bulb (Braak Stage 1-2) before substantial dopaminergic neuron death occurs
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">III. Key Findings Across Biological Pathways</h2>

          <h3>Pathway 01: Dopaminergic & Motor Control</h3>
          <ul className="tight-list">
            <li>
              <strong>LRRK2 and Motor Severity:</strong> LRRK2-positive carriers (n=1,507) exhibit
              49% worse motor severity (mean UPDRS3 = 12.47) compared to LRRK2-negative
              non-carriers (mean UPDRS3 = 8.36, p &lt; 0.001, Cohen's d = 0.304)
            </li>
            <li>
              <strong>Gait-Motor Correlation:</strong> Objectively measured gait speed (SP_U)
              negatively correlates with clinically assessed motor severity (UPDRS-III total,
              Spearman r = -0.301, p = 0.000079, n=166)
            </li>
          </ul>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/06_gait_motor_stratification.png"
              alt="Gait-Motor Stratification"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 5: Gait Speed vs Motor Severity showing negative correlation
            </p>
          </div>

          <h3>Pathway 03: Cholinergic & Cognitive Control</h3>
          <ul className="tight-list">
            <li>
              <strong>RBD Prevalence:</strong> 37.5% of assessed patients (n=1,548) were
              RBD-positive, indicating specific brainstem α-synucleinopathy affecting REM sleep
              control
            </li>
            <li>
              <strong>Cognitive Decline:</strong> 25.9% of patients (n=13,835) scored below the MCI
              threshold (MoCA &lt; 26), reflecting degeneration in the cholinergic basal forebrain
            </li>
            <li>
              <strong>Multimodal Correlation:</strong> Positive correlation between MoCA cognitive
              scores and UPSIT olfactory scores (r = 0.165, p &lt; 0.001, n=5,063), supporting the
              hypothesis of shared α-synuclein pathological spread
            </li>
          </ul>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/04_rbd_prevalence.png"
              alt="RBD Prevalence"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 6: RBD Prevalence showing proportion of RBD-positive individuals
            </p>
          </div>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/08_multimodal_correlations.png"
              alt="Cognitive-Olfactory Correlation"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 7: Cognitive-Olfactory Correlation (r=0.165, p&lt;0.001)
            </p>
          </div>

          <h3>Pathway 06: Gait Dynamics & Wearable Sensors</h3>
          <ul className="tight-list">
            <li>
              <strong>Dual-Task Cost:</strong> Gait speed significantly degrades under cognitive
              load with a mean dual-task cost of 14.87% (t = 14.984, p &lt; 0.001, n=172),
              evidencing cognitive-motor network integration failure
            </li>
            <li>
              <strong>Arm Swing Asymmetry:</strong> Using IMU sensors, 27.0% of patients (n=178)
              exhibited clinically significant asymmetry (&gt;20%), supporting lateralized
              dopaminergic neuron loss mechanism
            </li>
            <li>
              <strong>Mobility Impairment:</strong> 29.0% of patients (n=186) were classified as
              mobility impaired (TUG duration &gt; 12 seconds)
            </li>
          </ul>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/05_arm_swing_asymmetry.png"
              alt="Arm Swing Asymmetry Distribution"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 8: Arm Swing Asymmetry Distribution highlighting 20% clinical threshold
            </p>
          </div>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/09_tug_performance.png"
              alt="TUG Performance Distribution"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 9: TUG Performance Distribution (n=186)
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">IV. Multimodal Biomarkers and Clinical Translation</h2>
          <p>
            The project's ultimate objective is enabling precision medicine by integrating multiple
            findings.
          </p>

          <h3>Objective Biomarker Validation</h3>
          <ul className="tight-list">
            <li>
              Phospho-S1292-LRRK2 in urinary exosomes (n=884) documented as a pharmacodynamic
              marker for LRRK2 inhibitor therapy
            </li>
            <li>
              CSF α-Synuclein Seed Amplification Assay (CSFSAA) status assessed in 145 samples,
              useful for differentiating PD from atypical parkinsonisms
            </li>
          </ul>

          <h3>Clinical Translation Readiness</h3>
          <p>The quantified findings directly support immediate clinical applications:</p>
          <ul className="tight-list">
            <li>
              <strong>Genetic Testing:</strong> Precise risk quantification (1.89×) informs LRRK2
              screening guidelines
            </li>
            <li>
              <strong>Prodromal Screening:</strong> High prevalence of hyposmia (50.2%) and RBD
              (37.5%) provides clear targets for early detection and intervention
            </li>
            <li>
              <strong>Motor Phenotyping:</strong> The 5 identified motor subtypes enable selection
              of stratified, pathway-specific treatments
            </li>
          </ul>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/10_clusters_well_measured.png"
              alt="Additional Clustering View"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 10: Additional clustering visualization for Dopaminergic Pathway analysis
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Complete Claims Summary</h2>
          <p>
            This comprehensive analysis documents 36 evidence-based research claims organized
            across five major biological pathway categories:
          </p>

          <h3>Pathway 01: Dopaminergic Degeneration & Motor Control (15 Claims)</h3>
          <p>
            Including motor phenotype identification, LRRK2 motor severity effects, gait-motor
            correlations, and longitudinal tracking capabilities
          </p>

          <h3>Pathway 02: Genetic & Molecular Mechanisms (4 Claims)</h3>
          <p>
            Covering LRRK2 genetic risk quantification, phospho-LRRK2 biomarkers, CSFSAA status
            assessment, and α-synuclein modulation
          </p>

          <h3>Pathway 03: Cholinergic & Cognitive Control (10 Claims)</h3>
          <p>
            Addressing cognitive impairment prevalence, olfactory dysfunction, RBD prevalence,
            dual-task costs, and autonomic dysfunction
          </p>

          <h3>Pathway 06: Gait Dynamics & Wearable Sensors (4 Claims)</h3>
          <p>
            Quantifying arm swing asymmetry, stride time variability, TUG performance, and
            dual-task degradation
          </p>

          <h3>Pathway 08: Cross-Pathway Integration (3 Claims)</h3>
          <p>
            Synthesizing cognitive-olfactory correlations, multimodal cohort characterization, and
            LRRK2+ multi-phenotype profiles
          </p>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Clinical Impact</h2>
          <p>
            This mechanism-based computational framework shifts PD analysis from symptom
            classification to biological pathway inference, enabling:
          </p>
          <ul className="tight-list">
            <li>Precise genetic risk stratification for clinical decision-making</li>
            <li>Early detection through validated prodromal markers</li>
            <li>Personalized treatment strategies based on motor phenotype classification</li>
            <li>
              Objective, quantitative biomarkers for remote monitoring and clinical trial
              enrichment
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
