import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../components/style.css";

const cvcBase = "https://cvc-lab.github.io";

const outputCards = [
  {
    title: "Current patient state",
    text:
      "Patient-specific motor, autonomic, cognitive, and functional-state estimates from electronic health records, imaging, biomarkers, wearables, medication history, and DBS/LFP signals when available.",
  },
  {
    title: "Differential diagnosis",
    text:
      "Ranked support for Parkinson's versus look-alikes such as MSA, PSP, and DLB, with explicit uncertainty and missing-evidence flags.",
  },
  {
    title: "Progression forecast",
    text:
      "Longitudinal estimates of disease trajectory, including 12-month MDS-UPDRS-III and time-to-motor-fluctuation targets for validation.",
  },
  {
    title: "Medication and therapy planning",
    text:
      "Levodopa-response support, rehabilitation planning, ranked therapy options, and monitoring priorities filtered through safety agents.",
  },
  {
    title: "DBS planning support",
    text:
      "Where applicable, stimulation changes are simulated inside the patient-specific twin before parameters are altered in the patient.",
  },
  {
    title: "Follow-up and evidence gaps",
    text:
      "Personalized next steps for monitoring, reassessment, longitudinal evidence collection, and uncertainty reduction.",
  },
];

const advanceCards = [
  {
    title: "Living patient-specific twin",
    text:
      "AI4PD maintains one longitudinal representation per patient, synchronizing evidence that arrives once, per visit, continuously, or only when DBS data are available.",
  },
  {
    title: "Port-Hamiltonian core",
    text:
      "Stored reserve H, interconnection geometry J, dissipation R, and therapy ports encode conservation, dissipation, symmetries, and balance laws rather than leaving dynamics to a black box.",
  },
  {
    title: "Multi-agent reasoning",
    text:
      "Diagnostic and therapy-planning agents specialize by modality, mechanism, intervention, and safety, then expose their evidence to arbitration.",
  },
  {
    title: "Dynamic AI-knowledge network",
    text:
      "Literature, biomedical mechanisms, population histories, and clinical EHR knowledge continually inform the agents.",
  },
  {
    title: "Evidence arbitration",
    text:
      "The system debates across agents, resolves conflicts, discards unsafe or inconsistent options, ranks what remains by supporting evidence, and reports uncertainty and evidence gaps.",
  },
  {
    title: "Decision support posture",
    text:
      "Every meaningful output is routed to clinicians first. The system supports diagnosis and therapy planning; it does not prescribe autonomously.",
  },
];

const evidencePapers = [
  {
    title:
      "Pathway-Anchored Multimodal Clustering Reveals Circuit-Level Signatures in Parkinson's Disease",
    role: "Circuit-level disease map",
    impact:
      "Moved the program from raw imaging features to pathway-specific circuit signatures, giving AI4PD interpretable anatomical evidence for patient state and differential diagnosis.",
    links: [
      { label: "Project page", href: `${cvcBase}/projects/pathway-anchored-pd-clustering/` },
      { label: "Paper brief", to: "/paper-pathway-clustering" },
    ],
  },
  {
    title:
      "Integrated Genetic, Molecular, and Wearable Sensor Biomarkers Enable Bayesian ML-Driven Precision Stratification",
    role: "Multimodal patient stratification",
    impact:
      "Connected genetics, molecular markers, gait sensing, and clinical measures into Bayesian phenotypes, supporting AI4PD's patient-state and progression agents.",
    links: [
      { label: "Project page", href: `${cvcBase}/projects/integrated-pd-precision-stratification/` },
      { label: "Paper brief", to: "/paper-integrated-biomarkers" },
    ],
  },
  {
    title:
      "Posterior-Calibrated Multimodal Motor States Reveal Longitudinal and Imaging-Associated Heterogeneity",
    role: "Uncertainty-aware motor state",
    impact:
      "Reframed phenotype as a probability distribution over motor states, turning AI4PD toward calibrated uncertainty instead of hard labels.",
    links: [{ label: "Related papers", to: "/related-papers" }],
  },
  {
    title:
      "Compositional Bayesian Co-Clustering of DTI Biomarkers with Clinical Measures",
    role: "Severity prediction precursor",
    impact:
      "Connects diffusion biomarkers with clinical severity, helping turn imaging cohorts into patient-comparable latent spaces for AI4PD.",
    links: [
      {
        label: "Project page",
        href: `${cvcBase}/projects/scalable-robust-bayesian-co-clustering/`,
      },
    ],
  },
  {
    title:
      "Brain Region Specific T1-MRI and DAT-SPECT Biomarkers for Differential Diagnosis",
    role: "Look-alike diagnosis substrate",
    impact:
      "Extends the program toward CSF-alpha-synuclein-positive and negative parkinsonisms, directly supporting AI4PD's differential-diagnosis output.",
    links: [{ label: "Related papers", to: "/related-papers" }],
  },
  {
    title: "Scalable Robust Bayesian Co-Clustering with Compositional ELBOs",
    role: "Population latent spaces",
    impact:
      "Provides the collaborative-filtering substrate: cohort-derived latent spaces, subtypes, and trajectories used to sharpen guidance for one patient.",
    links: [
      {
        label: "Project page",
        href: `${cvcBase}/projects/scalable-robust-bayesian-co-clustering/`,
      },
    ],
  },
  {
    title: "PHAST: Port-Hamiltonian Architecture for Structured Temporal Dynamics Forecasting",
    role: "Stable trajectory forecasting",
    impact:
      "Supplies the structured temporal forecasting core for patient trajectories, ablations, and long-horizon disease dynamics.",
    links: [{ label: "Project page", href: `${cvcBase}/projects/phast/` }],
  },
  {
    title: "A Differential and Pointwise Control Approach to Reinforcement Learning",
    role: "Intervention-oriented control",
    impact:
      "Provides Hamiltonian-structured control ideas for reasoning about DBS and therapy transitions toward safer, lower-dose states.",
    links: [
      {
        label: "Project page",
        href: `${cvcBase}/projects/differential-and-pointwise-control-rl/`,
      },
    ],
  },
  {
    title:
      "The Physics, Information, and Computation of Perennial Learning",
    role: "Continual learning without forgetting",
    impact:
      "Gives the conceptual basis for updating a patient twin as new evidence arrives while preserving stable patient-specific structure.",
    links: [
      { label: "Project page", href: `${cvcBase}/projects/perennial-learning-kolmogorov/` },
    ],
  },
  {
    title: "Recipes for when Physics Fails: Recovering Robust Learning of Physics-Informed Neural Networks",
    role: "Robust physics-grounded learning",
    impact:
      "Strengthens the bridge between physical structure and noisy biomedical data, supporting the case for port-Hamiltonian structure over black-box prediction.",
    links: [{ label: "Project page", href: `${cvcBase}/projects/robust-pinns/` }],
  },
  {
    title: "Learning Optimal Control with Stochastic Models of Hamiltonian Dynamics",
    role: "Hamiltonian control foundation",
    impact:
      "Supports the intervention-planning layer by framing therapy selection as controlled transitions through structured dynamical state space.",
    links: [{ label: "Project page", href: `${cvcBase}/projects/optimal-control/` }],
  },
];

const fieldAnchors = [
  {
    title: "Clinical urgency and scale",
    text:
      "Marras and Dorsey et al. motivate Parkinson's population scale and pandemic framing; Rizzo et al. anchor the diagnostic baseline and look-alike problem.",
  },
  {
    title: "DBS mechanism and readiness",
    text:
      "Hammond, Rubin and Terman, Fleming and Lowery, Tass, Little, and Stanslaski et al. frame beta synchrony, coordinated-reset desynchronization, and adaptive DBS readiness.",
  },
  {
    title: "Knowledge-grounded agents",
    text:
      "Zhang's robust state abstraction and invariant-causal prediction work motivate hidden-state reasoning; Wan, Chen, and Stengel-Eskin motivate collaborative multi-agent refinement and evidence checking.",
  },
];

const fundingUses = [
  "Multi-site data acquisition, clinical coordination, data-use agreements, IRB pathways, clinician review, and longitudinal follow-up workflows.",
  "Secure de-identification, storage, audit trails, schema mapping, and harmonization across EHR, imaging, wearable, biomarker, medication, and DBS records.",
  "Students, research engineers, and research scientists to build the patient-twin ingestion pipeline, cross-site validation suite, and clinician-facing report prototype.",
  "Ablations against calibrated neural ODE and unstructured baselines, site-generalization tests, uncertainty calibration, DBS/domain review, and responsible-use documentation.",
];

const budgetItems = [
  {
    amount: "$170K",
    title: "Multi-site evidence and coordination",
    text:
      "Data acquisition, clinical and research coordination, data-use agreements, IRB pathways, and the first harmonized multi-site dataset.",
  },
  {
    amount: "$105K",
    title: "Secure data infrastructure",
    text:
      "De-identification, longitudinal patient timelines, audit trails, schema mapping, and harmonization across clinical, imaging, wearable, biomarker, medication, and DBS records.",
  },
  {
    amount: "$130K",
    title: "Twin pipeline staff",
    text:
      "Students, research engineers, and research scientists building the ingestion pipeline, validation workflows, and patient-specific model integration.",
  },
  {
    amount: "$55K",
    title: "Cross-site AI validation",
    text:
      "Ablations against calibrated neural ODE and unstructured baselines, uncertainty calibration, and site-generalization tests.",
  },
  {
    amount: "$30K",
    title: "Clinician report prototype",
    text:
      "A secure report interface returning diagnosis, progression, therapy-planning options, and evidence gaps for clinician review.",
  },
  {
    amount: "$10K",
    title: "External review and dissemination",
    text:
      "DBS/domain review, responsible-use documentation, and dissemination materials.",
  },
];

const supportItems = [
  "Michael J. Fox Foundation support contributed $300,132.40 toward related Parkinson's AI work from January 2023 through January 2024.",
  "Jim Holland has given $200,000 and is adding a further $200,000; the Michael and Connie Rasor Foundation contributed $60,000.",
  "The remaining gap is the integrated clinical data network, harmonization layer, multi-site validation process, dynamic AI-knowledge network, and clinician-facing digital twin interface.",
];

const teamCards = [
  {
    title: "Texas-built AI core",
    text:
      "The initiative is centered at UT Austin across the Bajaj lab, Oden Institute, and TACC infrastructure, with proposed UT AI collaborators in sequential decision-making and multi-agent reasoning.",
  },
  {
    title: "Four years of foundations",
    text:
      "The program already spans pathway-anchored imaging, Bayesian co-clustering, posterior-calibrated motor states, port-Hamiltonian forecasting, and intervention-oriented control.",
  },
  {
    title: "Clinical translation path",
    text:
      "External DBS and movement-disorders experts the team has worked with may advise as the work matures, while the funded research team remains Texas-based and clinician-facing.",
  },
];

function LinkList({ links }) {
  return (
    <div className="initiative-impact-links">
      {links.map((link) =>
        link.to ? (
          <Link key={link.label} to={link.to}>
            {link.label}
          </Link>
        ) : (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        )
      )}
    </div>
  );
}

export default function DigitalTwinInitiativePage() {
  return (
    <Layout>
      <div className="page-container home-page compact-page-shell digital-twin-page">
        <section className="hero-section hero-stack digital-twin-hero">
          <div className="hero-text">
            <p className="initiative-eyebrow">AI4PD funding vision and translational roadmap</p>
            <h1>Inferring the Unseen: Mechanism-Grounded AI for Personalized Parkinson's Care</h1>
            <p>
              AI4PD (AI for Parkinson's Disease) is a Texas-led, patient-specific
              digital twin system for Parkinson's care. It integrates multimodal
              longitudinal evidence, queries a dynamic biomedical AI-knowledge network,
              infers each patient's current and future disease state, and supports
              safer diagnosis, therapy planning, and follow-up.
            </p>
            <div className="hero-cta">
              <Link className="button primary" to="/clinician-workflow">
                See clinician workflow
              </Link>
              <Link className="button secondary" to="/related-papers">
                Review evidence base
              </Link>
            </div>
          </div>
          <figure className="initiative-figure initiative-figure--wide">
            <StaticImage
              src="../images/ai4pd-collaboration-architecture.jpg"
              alt="Texas-core collaboration architecture for AI4PD"
              placeholder="blurred"
              layout="fullWidth"
            />
            <figcaption>
              Multi-site longitudinal evidence feeds a Texas-core platform that
              returns patient-specific diagnosis, intervention, and follow-up guidance
              through a secure clinician portal.
            </figcaption>
          </figure>
        </section>

        <section className="section">
          <h2 className="section-title">The gap AI4PD targets</h2>
          <div className="initiative-lead-grid">
            <article className="initiative-lead-card">
              <span className="initiative-stat">Diagnosis and control</span>
              <p>
                Parkinson's care still faces a look-alike diagnosis problem and a
                control problem: DBS settings are often tuned by manual trial and error.
              </p>
            </article>
            <article className="initiative-lead-card">
              <span className="initiative-stat">Evidence on different clocks</span>
              <p>
                Static biology, slow imaging, visit-level scores, dense wearables,
                EHR, medication histories, and DBS/LFP data arrive asynchronously.
              </p>
            </article>
            <article className="initiative-lead-card">
              <span className="initiative-stat">Beyond risk scores</span>
              <p>
                The missing capability is not another label predictor. It is a living
                patient model that preserves mechanism, queries evolving knowledge, and
                surfaces uncertainty before care changes.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">The AI advance</h2>
          <div className="initiative-advance-grid">
            {advanceCards.map((card) => (
              <article key={card.title} className="initiative-advance-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section initiative-split-section initiative-split-section--agent">
          <div>
            <h2 className="section-title">Multi-agent digital twin reasoning</h2>
            <p className="text-block">
              AI4PD is not a conventional consumer-style recommender system. It uses
              recommender-style filtering only in a narrow clinical sense: population
              latent spaces sharpen what is plausible for one patient, while safety-aware
              agents keep candidate diagnoses and therapies grounded in patient data,
              mechanisms, literature, and clinical context.
            </p>
            <p className="text-block">
              Multimodal diagnostic agents interpret EHR, imaging, biomarkers,
              wearables, clinical history, medication context, and DBS/LFP signals where
              available. Therapy-planning agents reason over medication,
              DBS/neuromodulation, rehabilitation, monitoring, and safety. Collaborative
              evidence arbitration debates across agents, filters unsafe or inconsistent
              options, ranks what remains by supporting evidence, and reports uncertainty
              and evidence gaps.
            </p>
          </div>
          <figure className="initiative-figure">
            <StaticImage
              src="../images/ai4pd-multi-agent-architecture.jpg"
              alt="AI4PD multi-agent knowledge-grounded digital twin system architecture"
              placeholder="blurred"
              layout="fullWidth"
            />
          </figure>
        </section>

        <section className="section initiative-split-section">
          <div>
            <h2 className="section-title">Port-Hamiltonian patient state</h2>
            <p className="text-block">
              The twin's dynamics use a port-Hamiltonian core with interpretable
              components: functional reserve H, subsystem coupling J, dissipation R,
              and therapy ports. That structure supports state estimation, progression
              forecasting, uncertainty calibration, and therapy planning inside one
              patient-specific model while conserving what should be conserved,
              accounting for dissipation, and respecting symmetries and balance laws.
            </p>
            <p className="text-block">
              The same machinery connects Parkinson's multi-system reach: motor circuits,
              cognitive and autonomic subsystems, and the heart and gut dynamics where
              the disease can begin. At the circuit level, Parkinson's motor signs are
              associated with pathological beta-band hypersynchrony in the
              subthalamic-cortical loop. Reactive adaptive DBS has reached the clinic;
              AI4PD adds a planning step by simulating candidate stimulation changes
              inside the twin before parameters are altered in the patient.
            </p>
          </div>
          <figure className="initiative-figure">
            <StaticImage
              src="../images/deep-brain-control.png"
              alt="Deep brain mechanism made controllable through port-Hamiltonian control"
              placeholder="blurred"
              layout="fullWidth"
            />
          </figure>
        </section>

        <section className="section">
          <h2 className="section-title">Clinician-facing outputs</h2>
          <div className="initiative-output-grid">
            {outputCards.map((card) => (
              <article key={card.title} className="initiative-output-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">From cited papers to AI4PD impact</h2>
          <p className="text-block">
            The cited work changes the vision from separate Parkinson's predictors into
            a connected clinical AI system. Cohort-scale latent spaces define what the
            system has seen across many patients, pathway-specific imaging creates
            interpretable biological context, port-Hamiltonian dynamics preserve a
            patient-specific mechanism, and multi-agent arbitration turns evidence into
            clinician-facing guidance.
          </p>
          <div className="initiative-impact-grid">
            {evidencePapers.map((paper) => (
              <article key={paper.title} className="initiative-impact-card">
                <p className="initiative-impact-role">{paper.role}</p>
                <h3>{paper.title}</h3>
                <p>{paper.impact}</p>
                <LinkList links={paper.links} />
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">External field anchors</h2>
          <div className="initiative-output-grid">
            {fieldAnchors.map((anchor) => (
              <article key={anchor.title} className="initiative-output-card">
                <h3>{anchor.title}</h3>
                <p>{anchor.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">What the funding bridge enables</h2>
          <p className="text-block">
            The main bottleneck is no longer whether individual modeling components can
            be built. The missing bridge is the multi-institution longitudinal evidence
            layer required to validate a living Parkinson's digital twin in real
            clinical settings.
          </p>
          <ul className="initiative-check-list">
            {fundingUses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-block">
            The submitted $500,000 Hill Prize budget is direct costs only, with no
            institutional overhead or indirect costs. It would turn the current research
            components into a clinically testable Texas-led AI platform.
          </p>
          <div className="initiative-budget-grid">
            {budgetItems.map((item) => (
              <article key={item.title} className="initiative-budget-card">
                <span>{item.amount}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="initiative-support-note">
            <h3>Existing support and the remaining gap</h3>
            <ul>
              {supportItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="text-block">
            Hill Prize support is one potential accelerator, but the initiative is
            broader than one award: the long-term goal is a reusable, Texas-built
            precision-medicine platform for hidden-state, progression, and intervention
            planning across complex chronic diseases.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Year-one validation draft</h2>
          <div className="initiative-timeline">
            <article>
              <span>1</span>
              <h3>Build the first harmonized dataset</h3>
              <p>
                Coordinate multi-site data-use agreements, IRB pathways, schema mapping,
                and de-identified patient timelines.
              </p>
            </article>
            <article>
              <span>2</span>
              <h3>Validate diagnosis and state estimation</h3>
              <p>
                Test early Parkinson's-versus-look-alike support above the clinical
                baseline, 12-month MDS-UPDRS-III forecasting, and time-to-motor-fluctuation
                prediction.
              </p>
            </article>
            <article>
              <span>3</span>
              <h3>Prove structure matters</h3>
              <p>
                Run ablations against calibrated neural ODE and unstructured baselines
                with site-generalization and uncertainty-calibration tests.
              </p>
            </article>
            <article>
              <span>4</span>
              <h3>Prototype the clinical report</h3>
              <p>
                Return diagnosis, progression, therapy-planning options, and evidence
                gaps through a clinician-facing report interface.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Why this team, why now</h2>
          <div className="initiative-output-grid">
            {teamCards.map((card) => (
              <article key={card.title} className="initiative-output-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Responsible clinical posture</h2>
          <p>
            AI4PD is designed as decision support. Data remain governed by contributing
            institutions, records are de-identified and analyzed under privacy-preserving
            safeguards, and every meaningful output is routed through human-in-the-loop
            clinician review. The goal is sharper judgment, not autonomous diagnosis or
            prescribing.
          </p>
        </section>
      </div>
    </Layout>
  );
}
