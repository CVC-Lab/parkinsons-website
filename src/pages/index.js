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
        <section className="hero-section hero-stack hero-centered">
          <div className="hero-text">
            <p className="initiative-eyebrow">AI4PD</p>
            <p className="hero-subtext">
              A Texas-led, patient-specific digital twin for Parkinson&apos;s disease
              care, built so a movement-disorders clinician can interrogate it rather
              than just read its output.
            </p>
            <h1>Reading the mechanism behind the motor exam</h1>
            <p>
              Parkinson&apos;s is an inverse problem: from sparse clinic visits, wearables,
              imaging, genetics, and the EHR, we work backward toward the hidden biology
              that explains why two patients who present alike on the same exam later
              diverge. Early PD is clinically hard to separate from atypical parkinsonian
              look-alikes such as MSA, PSP, and DLB, and deep-brain-stimulation programming
              today still leans heavily on iterative manual adjustment. AI4PD builds that
              inferred mechanism into a patient-specific digital twin that updates as new
              data arrives, with its uncertainty measured and reported, and stays as
              decision support a clinician works in front of.
            </p>
            <div className="hero-cta hero-cta-centered">
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
        </section>

        {/* Evidence band — page center of gravity */}
        <section className="section">
          <p className="initiative-eyebrow">Evidence to date (retrospective)</p>
          <h2 className="section-title">What the published analyses show</h2>
          <p className="text-block">
            Four preprint and in-review studies on established Parkinson&apos;s cohorts
            (PPMI, BioFIND, PDBP, FoxInsight), shown across five result cards, results
            first, with the hedges the papers themselves keep. These analyses are
            retrospective and hypothesis-generating; they are the calibrated substrate the
            patient-specific twin is built on, not the mechanism claim itself.
          </p>

          <div className="initiative-output-grid">
            <article className="initiative-output-card">
              <p className="initiative-eyebrow">PC-MSM · calibrated motor states in PPMI</p>
              <h3>Motor-state stratification that holds up, and reports its own overconfidence</h3>
              <p>
                Across 29,366 aligned PPMI MDS-UPDRS-III motor visits from 4,773
                participants, patient-level motor states were stable on average (mean
                modal-family fraction 0.925, 95% CI 0.921–0.930), and 25.5% of patients
                changed motor state at least once over follow-up (95% CI 24.1–26.7%). The
                model is honest about its limits: nominal posterior confidence was 0.989
                against an empirical patient-blocked bootstrap consistency of 0.849, so the
                gap is measured and disclosed rather than hidden. These are calibrated,
                dynamic, imaging-associated motor states, not a claim of five true
                biological subtypes.
              </p>
            </article>

            <article className="initiative-output-card">
              <p className="initiative-eyebrow">PC-MSM · imaging recovery and BioFIND transfer</p>
              <h3>Imaging is associated with the states; assignment reproduces endpoint gradients externally</h3>
              <p>
                Fused DaTSCAN and FreeSurfer ROI features predicted patient-level soft
                motor-posterior vectors with moderate but calibrated performance (JSD
                0.209, 95% CI 0.199–0.220; macro-AUROC 0.692; soft-label ECE 0.034).
                Imaging predicts these soft posteriors rather than independently recovering
                the taxonomy. On the independent BioFIND cohort (344 visits, 225 patients),
                state assignment reproduced clinically meaningful endpoint gradients. This
                is external face validity. It is not evidence of full transportability.
              </p>
            </article>

            <article className="initiative-output-card">
              <p className="initiative-eyebrow">Motor phenotyping for trial enrichment</p>
              <h3>A rapid-progressor subgroup declining about +4 UPDRS points per year</h3>
              <p>
                Within a 3,261-patient longitudinal subcohort (patients with ≥3 visits,
                drawn from 62,543 patients across four cohorts and 221,437 assessments),
                16.6% (n=542) formed a Rapid Progressor subgroup, declining at +2.02
                MDS-UPDRS Part III points per ~6-month visit (about +4 points/year). The
                authors call this a candidate trial-enrichment signal. It still needs
                prospective validation before any clinical use, and is not a validated
                biomarker.
              </p>
            </article>

            <article className="initiative-output-card">
              <p className="initiative-eyebrow">Integrated genetic, molecular, and wearable stratification</p>
              <h3>LRRK2 G2019S carriers run +4.35 motor points above non-carriers</h3>
              <p>
                LRRK2 G2019S carriage carried a 1.92-fold prevalence ratio for
                Parkinson&apos;s (95% CI 1.54–2.40; sex-adjusted OR 2.73; individual-level
                χ²(1)=36.6, p=1.44×10⁻⁹), and carriers showed +4.35 higher baseline
                MDS-UPDRS Part III points (95% CI 1.95–6.47). In the same preprint,
                wearable readouts flagged arm-swing asymmetry (27% of 178 assessments from
                94 patients exceeded the 20% pathological threshold) and a 14.87% dual-task
                gait cost (n=172, paired t=14.98, p&lt;0.001). These are heterogeneous
                sub-analyses of one preprint, not a single validated genetic-plus-wearable
                model.
              </p>
            </article>

            <article className="initiative-output-card">
              <p className="initiative-eyebrow">Pathway-anchored multimodal clustering</p>
              <h3>Lower nigrostriatal integrity tracks higher motor burden</h3>
              <p>
                Anchoring imaging to six neuroanatomical pathways (nigrostriatal,
                frontostriatal-executive, cerebello-thalamo-cortical, limbic, microvascular,
                sensory/visuospatial) in 294 PPMI participants, lower nigrostriatal
                integrity was associated with higher motor burden (Spearman ρ≈−0.201 with
                MDS-UPDRS-III, q≈6.8×10⁻⁴), and higher sensory/visuospatial integrity with
                better cognition (ρ≈0.163 with MoCA, q≈0.0071). The associations are
                FDR-controlled and directionally coherent, but their effect sizes are
                modest; this is a research framework, not a per-patient diagnostic.
              </p>
            </article>
          </div>

          <figure className="initiative-figure">
            <StaticImage
              src="../images/05_arm_swing_asymmetry.png"
              alt="Histogram of wearable arm-swing asymmetry across 178 assessments, with 27% above the 20% pathological threshold"
              placeholder="blurred"
            />
            <figcaption>
              Wearable arm-swing asymmetry: 27% of 178 assessments exceed the 20%
              pathological threshold (integrated genetic, molecular, and wearable
              stratification preprint).
            </figcaption>
          </figure>
        </section>

        {/* How it works teaser */}
        <section className="section">
          <h2 className="section-title">A twin a clinician can question</h2>
          <div className="text-block">
            <p>
              Underneath those results sits the patient-specific digital twin the cards are
              the substrate for. Its interpretable structured core uses an energy-like
              storage function with terms for functional reserve, coupling between
              subsystems, dissipation, and therapy ports. This is a structured prior for
              how a patient&apos;s state evolves, not a claim of physical energy
              conservation, and it updates as new visits, sensor streams, and biomarkers
              arrive.
            </p>
            <p>
              On top of the twin, multi-agent diagnostic and therapy-planning agents reason
              over a dynamic biomedical knowledge network, arbitrating evidence so that
              disagreement, uncertainty, and gaps are surfaced rather than smoothed over. A
              longer-term goal is to let a clinician simulate a candidate stimulation change
              in the twin as decision support before any change to the patient. This is a
              prospective-validation hypothesis, not a current capability: the twin cannot
              prescribe DBS candidacy or target. (In the DBS literature, a leading candidate
              target is beta-band hypersynchrony in the subthalamic-cortical loop; this is
              background motivation, not a result AI4PD demonstrates.)
            </p>
          </div>
          <figure className="initiative-figure">
            <StaticImage
              src="../images/ai4pd-architecture-figure1.png"
              alt="AI4PD architecture: clinical and validation partners feed a Texas-core AI platform that maintains a patient-specific twin and returns clinician-facing guidance"
              placeholder="blurred"
              layout="fullWidth"
            />
            <figcaption>
              AI4PD architecture: multi-site clinical and validation partners contribute
              longitudinal multimodal evidence to a Texas-core AI platform that maintains a
              shared patient-specific twin, refines it through population latent spaces and
              mechanism-informed circuit knowledge, and returns diagnosis, intervention, and
              follow-up guidance through a secure clinician portal.
            </figcaption>
          </figure>
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
