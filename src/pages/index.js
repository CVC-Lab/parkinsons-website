import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../components/style.css";

export default function IndexPage() {
  return (
    <Layout>
      <div className="page-container home-page compact-page-shell home-page-landing">

        {/* Hero */}
        <section className="hero-section hero-stack">
          <div className="hero-text">
            <p className="initiative-eyebrow">AI4PD · AI for Parkinson's Disease</p>
            <h1>A patient-specific digital twin for Parkinson's care</h1>
            <p>
              Parkinson's is the fastest-growing neurodegenerative disease, and it reaches
              well beyond tremor: into gait and balance, sleep, mood, autonomic function,
              and cognition. The evidence about any one patient arrives scattered across
              clinic visits, imaging, biomarkers, wearables, genetics, and the electronic
              health record. AI4PD assembles that scattered evidence into one living,
              uncertainty-aware model of the patient and turns it into clinician-facing
              support for differential diagnosis, progression forecasting, and therapy
              planning. Every output goes to the physician first.
            </p>
            <div className="hero-cta">
              <Link className="button primary" to="/digital-twin-initiative">
                See how it works
              </Link>
              <a
                className="button secondary"
                href="https://cvc-lab.github.io/parkinson-viz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Parkinson Viz dashboard
              </a>
            </div>
          </div>
          <figure className="initiative-figure initiative-figure--wide">
            <StaticImage
              src="../images/ai4pd-architecture-figure1.png"
              alt="AI4PD architecture: clinical and validation partners feed a Texas-core AI platform that maintains a patient-specific twin and returns clinician-facing guidance"
              placeholder="blurred"
              layout="fullWidth"
            />
            <figcaption>
              AI4PD assembles multimodal evidence from clinical partners into a Texas-core
              AI platform that maintains a shared patient-specific twin and returns
              diagnosis, intervention, and follow-up guidance to clinicians.
            </figcaption>
          </figure>
        </section>

        {/* Trust + honest-status strip */}
        <div className="home-trust">
          <p className="home-trust-strip">
            Oden Institute · The University of Texas at Austin · CVC Lab · TACC
            infrastructure · Supported by the Michael J. Fox Foundation
          </p>
          <div className="home-status-chips">
            <span className="status-chip">Retrospective evidence base</span>
            <span className="status-chip">Decision support only</span>
            <span className="status-chip">Seeking prospective validation partners</span>
          </div>
        </div>

        {/* Evidence band — page center of gravity */}
        <section className="section">
          <p className="initiative-eyebrow">Evidence to date (retrospective)</p>
          <h2 className="section-title">What the published analyses show</h2>
          <p className="text-block">
            Four preprint and in-review studies on established Parkinson&apos;s cohorts
            (PPMI, BioFIND, PDBP, FoxInsight). The headlines are below; full cohorts,
            methods, and limitations are on the{" "}
            <Link to="/related-papers">Evidence page</Link>. These results are retrospective
            and hypothesis-generating, the calibrated substrate the twin is built on, not
            the mechanism claim itself.
          </p>

          <div className="home-evidence-grid">
            <article className="initiative-output-card home-evidence-card">
              <p className="initiative-eyebrow">Calibrated motor states · PPMI + BioFIND</p>
              <h3>Motor phenotyping that reports its own overconfidence</h3>
              <p>
                Across 29,366 PPMI visits from 4,773 patients, motor states stay stable on
                average yet 25.5% of patients shift over time, and the model discloses its
                overconfidence (0.989 nominal vs 0.849 empirical) instead of hiding it.
              </p>
              <Link className="evidence-details-link" to="/related-papers#paper-motor-states">
                Details &rarr;
              </Link>
            </article>

            <article className="initiative-output-card home-evidence-card">
              <p className="initiative-eyebrow">Trial enrichment · four cohorts</p>
              <h3>A rapid-progressor subgroup declining about +4 UPDRS/year</h3>
              <p>
                Across 62,543 patients, a 16.6% rapid-progressor subgroup declines about +4
                MDS-UPDRS-III points a year, a candidate trial-enrichment signal that still
                needs prospective validation.
              </p>
              <Link className="evidence-details-link" to="/related-papers#paper-motor-states">
                Details &rarr;
              </Link>
            </article>

            <article className="initiative-output-card home-evidence-card">
              <p className="initiative-eyebrow">Genetics + wearables · medRxiv</p>
              <h3>LRRK2 risk and wearable gait, in one stratification</h3>
              <p>
                LRRK2 G2019S carries a 1.92× PD prevalence ratio and +4.35 motor points;
                wearable arm-swing asymmetry (27%) and a risk model (AUC 0.717) add scalable
                digital signal.
              </p>
              <Link className="evidence-details-link" to="/related-papers#paper-biomarkers">
                Details &rarr;
              </Link>
            </article>

            <article className="initiative-output-card home-evidence-card">
              <p className="initiative-eyebrow">Circuit imaging · bioRxiv</p>
              <h3>Lower nigrostriatal integrity tracks higher motor burden</h3>
              <p>
                Imaging anchored to six brain circuits (294 PPMI) ties nigrostriatal
                integrity to motor burden and sensory/visuospatial integrity to cognition,
                FDR-controlled, with modest effect sizes.
              </p>
              <Link className="evidence-details-link" to="/related-papers#paper-pathway">
                Details &rarr;
              </Link>
            </article>
          </div>
          <p className="home-evidence-cta">
            <Link to="/partners">Partner on validation &rarr;</Link>
          </p>
        </section>

        {/* How it works teaser */}
        <section className="section">
          <h2 className="section-title">A twin a clinician can question</h2>
          <div className="text-block">
            <p>
              Underneath those results sits the patient-specific digital twin. Its
              interpretable core is a structured prior for how a patient&apos;s state
              evolves — functional reserve, coupling between subsystems, dissipation, and
              therapy ports — not a claim of physical energy conservation, and it updates as
              new visits, sensors, and biomarkers arrive.
            </p>
            <p>
              On top of the twin, multi-agent diagnostic and therapy-planning agents reason
              over a dynamic knowledge network, surfacing disagreement, uncertainty, and
              gaps rather than smoothing them over. Letting a clinician simulate a candidate
              DBS change in the twin before changing patient settings is a
              prospective-validation hypothesis, not a current capability — the twin does
              not prescribe DBS candidacy or targets.
            </p>
          </div>
          <p className="workflow-inline-link">
            <Link to="/digital-twin-initiative">Read the full approach &rarr;</Link>
          </p>
        </section>

        {/* Partner call-to-action */}
        <section className="section final-callout">
          <h2 className="section-title">The evidence layer is the work, and the ask</h2>
          <p>
            AI4PD is decision support, never an autonomous prescriber, and its hardest
            constraint is not the model. It is the multi-institution longitudinal evidence
            layer needed to validate it. We are looking for movement-disorders neurologists
            and institutions that govern longitudinal Parkinson&apos;s cohorts to partner on
            clinical data and prospective validation, on terms that meet your standard of
            proof.
          </p>
          <div className="hero-cta">
            <Link className="button primary" to="/partners">
              Partner on validation
            </Link>
            <Link className="button secondary" to="/partners">
              See data-use and governance terms
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
