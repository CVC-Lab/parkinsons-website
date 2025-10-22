import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Silo3Page() {
  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Multimodal AI for Predicting and Phenotyping CSFSAA Status in Parkinson's Disease</h1>
            <p>
              A pilot study at the Computational Visualization Center (CVC) - The Oden Institute
              toward non-invasive biomarkers of Parkinson's pathology.
            </p>
            <p className="hero-subtext">
              Our central hypothesis is that multi-modal, non-invasive data (particularly gait
              metrics) can predict CSFSAA status and capture underlying biological phenotypes of PD.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Background</h2>
          <ul className="tight-list">
            <li>
              Parkinson's Disease (PD) is a multifaceted neurodegenerative disorder defined by
              progressive motor and non-motor symptoms
            </li>
            <li>
              While the cerebrospinal fluid α-synuclein seed amplification assay (CSFSAA) provides
              a relatively definitive molecular signature of PD pathology, its invasive nature
              limits widespread screening and monitoring
            </li>
            <li>
              Our central hypothesis is that multi-modal, non-invasive data (particularly gait
              metrics) can predict CSFSAA status and capture underlying biological phenotypes of PD
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Why Gait?</h2>
          <ul className="tight-list">
            <li>
              Gait reflects the function of multiple neural systems governing motor control,
              balance, and coordination
            </li>
            <li>
              Subtle alterations in arm swing asymmetry, stride timing, and postural sway often
              precede clinical diagnosis, making gait a powerful yet underutilized window into
              prodromal PD
            </li>
            <li>
              These movement patterns are directly linked to dopaminergic degeneration of the
              substantia nigra - disruptions in nigrostriatal circuitry manifest as measurable
              alterations in gait dynamics years before clinical diagnosis
            </li>
            <li>
              Our approach aims to establish a bridge between motor behavior and molecular
              pathology, supporting scalable, remote biomarkers for early PD detection
            </li>
          </ul>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/hier.png"
              alt="Hierarchical framework from sensor data to diagnosis"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 1: Conceptual hierarchy illustrating how interpretable, multimodal
              representations are derived from raw wearable sensor data. The framework connects
              Level 1 sensor signals to Level 5 clinical diagnosis, emphasizing how gait dynamics
              contribute to Parkinson's disease phenotyping.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Integrating Gait with Multimodal Data</h2>
          <p>
            We analyzed baseline data from 84 idiopathic PD participants in the Parkinson's
            Progression Markers Initiative (PPMI) with confirmed CSFSAA results (65 positive, 19
            negative). Each participant contributed data from three main domains:
          </p>

          <h3>Gait and Arm Swing (54 features)</h3>
          <p>
            Extracted from APDM Opal IMU sensors placed on the lumbar spine and both wrists during
            standardized mobility tasks: Timed Up and Go (TUG), Usual Walk, Dual-Task Walk, and
            Postural Sway. Metrics included arm swing amplitude, stride time, cadence, walking
            speed, and inter-limb coordination across single and dual-task conditions.
          </p>
          <p>
            Notably, dual-task conditions (walking while performing serial subtractions) revealed
            cognitive-motor interference effects linked to early PD pathology.
          </p>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/opalsensors.png"
              alt="APDM Opal sensor placement"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 2: Sensor placement for Arm Swing data and Gait Mobility data. Placement of
              the OPAL sensors and their relative coordinates, and orientation of OPAL sensor
              relative to its ports.
            </p>
          </div>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/assessments.png"
              alt="Structured assessments visualization"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 3: Visual presentation of the steps taken during the three main structured
              assessments. (a) Postural Sway Assessment. (b) TUG Assessment. (c) Usual Walking
              Assessment. Each part includes the local coordinate system of the IMU Opal sensor,
              the world coordinate system, and a spatiotemporal skeletal model capturing how
              localized movement at one joint or limb propagates through and affects the kinematics
              of the entire body.
            </p>
          </div>

          <h3>Clinical and Cognitive Assessments (35 features)</h3>
          <p>
            These included the Montreal Cognitive Assessment (MoCA), Hopkins Verbal Learning Test
            (HVLT), Trail Making Test (TMT A/B), SCOPA-AUT autonomic scores, Epworth Sleepiness
            Scale (ESS), State-Trait Anxiety Inventory (STAI), and MDS-UPDRS Part II self-reports.
          </p>

          <h3>Demographics (8 features)</h3>
          <p>
            Including age, sex, education, family history, and age at onset, serving as baseline
            covariates.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Machine Learning Framework</h2>
          <ul className="tight-list">
            <li>
              A Histogram Gradient Boosting Classifier (HistGradientBoostingClassifier,
              scikit-learn) was trained using 5-fold stratified cross-validation to predict CSFSAA
              positivity
            </li>
            <li>
              We evaluated the predictive value of each feature group (Gait, Demographic, Clinical)
              and their combined performance
            </li>
            <li>
              Interpretability was ensured using SHAP (SHapley Additive Explanations) to rank
              feature contributions and visualize patient-level patterns
            </li>
          </ul>

          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f7f2ec', borderBottom: '2px solid #bf5700' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Feature Group</th>
                <th style={{ padding: '0.75rem', textAlign: 'center' }}>Mean AUC ± SD</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eadfd2' }}>
                <td style={{ padding: '0.75rem' }}>Gait Arm Swing</td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>0.58 ± 0.16</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eadfd2' }}>
                <td style={{ padding: '0.75rem' }}>Demographics</td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>0.81 ± 0.14</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eadfd2' }}>
                <td style={{ padding: '0.75rem' }}>Clinical</td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>0.92 ± 0.07</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}><strong>Combined (All)</strong></td>
                <td style={{ padding: '0.75rem', textAlign: 'center', color: '#bf5700' }}>
                  <strong>0.93 ± 0.07</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Clinical and cognitive assessments were the strongest predictors, but multimodal
            integration yielded the best overall discrimination, validating the additive value of
            gait and demographic data.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Interpretable AI and Phenotype Discovery</h2>
          <p>Using SHAP analysis, key features driving CSFSAA classification included:</p>
          <ul className="tight-list">
            <li>HVLT-Retention (verbal memory retention)</li>
            <li>Epworth Sleepiness Scale (daytime sleepiness)</li>
            <li>Trail Making Test Part A/B (executive function)</li>
            <li>Right Arm Jerk (R_JERK_U) and Arm Swing Variability (RA_STD_DT, LA_STD_DT)</li>
          </ul>
          <p>
            These highlight the convergence of cognitive, sleep, and fine-motor domains in early
            α-synuclein pathology.
          </p>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/umap.png"
              alt="SHAP-UMAP patient embeddings"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 4: Patients projected into 2D space based on SHAP value profiles, colored by
              KMeans cluster assignment. Black "X": CSFSAA Positive (biological evidence of PD).
              Gray "X": CSFSAA Negative (biologically PD-free or less certain cases).
            </p>
          </div>

          <p>
            To explore latent biological subtypes, SHAP-UMAP embeddings and Spectral Co-Clustering
            were applied, revealing three distinct patient clusters:
          </p>
          <ol className="pipeline-steps">
            <li>
              <strong>Cognitive/Sleep-Dominant (Cluster 0):</strong>
              <p>CSFSAA+ individuals with high memory, anxiety, and sleep contributions</p>
            </li>
            <li>
              <strong>Transitional Sensorimotor (Cluster 1):</strong>
              <p>Mixed CSFSAA+/– cases showing early bilateral arm swing irregularities</p>
            </li>
            <li>
              <strong>Motor–Autonomic (Cluster 2):</strong>
              <p>CSFSAA+ individuals with elevated motor irregularity and autonomic symptoms</p>
            </li>
          </ol>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/coclustering.png"
              alt="Spectral co-clustering results"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 5: Spectral co-clustering identifies three patient subtypes aligned with
              distinct cognitive, motor, and biological CSFSAA+ patterns.
            </p>
          </div>

          <p>
            These phenotypes may correspond to limbic, transitional, and sensorimotor α-synuclein
            spread patterns described in neuropathological staging.
          </p>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Clinical Implications</h2>
          <p>
            This study demonstrates that non-invasive, interpretable AI models can approximate
            molecular CSFSAA results, supporting the use of digital phenotyping for scalable PD
            screening. The integration of wearable gait sensors and cognitive-behavioral assessments
            offers a remote-compatible biomarker framework that could:
          </p>
          <ul className="tight-list">
            <li>Enable early risk stratification and longitudinal monitoring</li>
            <li>Reduce reliance on invasive lumbar punctures</li>
            <li>Bridge the gap between digital mobility signatures and biological pathology</li>
          </ul>
          <p>
            By combining transparency (via SHAP explanations) and data-driven clustering, this pilot
            study highlights how AI-driven multimodal integration can uncover pathophysiologically
            meaningful PD subtypes. A step toward precision diagnostics and personalized care.
          </p>
        </section>
      </div>
    </Layout>
  );
}
