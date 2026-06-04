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

const diagramAnchors = [
  {
    label: "1. Data foundation",
    href: "#data-foundation",
    text:
      "Clinical records, MRI, DTI/free-water, DaT-SPECT, wearables, biomarkers, medication history, and partner validation sites feed the patient timeline.",
  },
  {
    label: "2. Discovery chain",
    href: "#discovery-timeline",
    text:
      "Four Parkinson's papers show how the program moved from cohort-scale latent spaces to pathway mechanisms, multimodal phenotypes, and calibrated motor-state trajectories.",
  },
  {
    label: "3. Clinician outputs",
    href: "#clinician-outputs",
    text:
      "The proposed twin returns patient-state estimates, differential diagnosis, therapy-planning support, follow-up priorities, and explicit evidence gaps to clinicians.",
  },
];

const discoveryTimeline = [
  {
    id: "paper-coclustering",
    stage: "1",
    role: "Population latent spaces",
    title: "Scalable Robust Bayesian Co-Clustering with Compositional ELBOs",
    result:
      "The team made patient heterogeneity measurable by learning row and feature clusters together instead of treating patients as isolated points or features as independent columns.",
    evidence:
      "SRVCC uses variational co-clustering, compositional ELBO regularization, noise learning, and mutual-information coupling to recover structure in noisy, sparse, high-dimensional multimodal data.",
    pipeline:
      "Raw cohort tables become patient-feature modules, feature families, subtype neighborhoods, and uncertainty-aware population latent spaces.",
    impact:
      "This is the collaborative-filtering substrate for AI4PD: what the system has learned across many patients can sharpen what is plausible for one new patient.",
    links: [
      {
        label: "Project page",
        href: `${cvcBase}/projects/scalable-robust-bayesian-co-clustering/`,
      },
      { label: "Related papers", to: "/related-papers#paper-coclustering" },
    ],
  },
  {
    id: "paper-pathway",
    stage: "2",
    role: "Pathway discovery",
    title: "Pathway-Anchored Multimodal Clustering Reveals Circuit-Level Signatures in Parkinson's Disease",
    result:
      "The program moved from raw imaging features to circuit-level disease signatures, showing that Parkinson's heterogeneity can be mapped onto affected anatomical pathways.",
    evidence:
      "Structural MRI, free-water-corrected diffusion MRI, and DaT-SPECT are aligned inside predefined circuits such as nigrostriatal, frontostriatal, limbic, sensory-visuospatial, cerebellothalamic, and microvascular pathways.",
    pipeline:
      "MRI, DTI/free-water, and dopaminergic SBR signals are converted into Multimodal Pathway Integrity Scores, then clustered with patient and pathway features together.",
    impact:
      "This supports the 'inferring the unseen' claim: clinicians see motor and cognitive symptoms, while AI4PD can point to hidden circuit-level mechanisms that may explain them.",
    links: [
      { label: "Project page", href: `${cvcBase}/projects/pathway-anchored-pd-clustering/` },
      { label: "Paper brief", to: "/paper-pathway-clustering" },
      { label: "Related papers", to: "/related-papers#paper-pathway" },
    ],
  },
  {
    id: "paper-biomarkers",
    stage: "3",
    role: "Multimodal precision stratification",
    title: "Integrated Genetic, Molecular, and Wearable Sensor Biomarkers Enable Bayesian ML-Driven Precision Stratification",
    result:
      "The team connected genetics, molecular markers, wearable gait sensing, and clinical measures into Bayesian phenotypes rather than relying on a single clinical score.",
    evidence:
      "LRRK2 risk, molecular markers, CSF alpha-synuclein seed amplification, IMU gait features, prodromal markers, and clinical assessments contribute complementary evidence about patient state.",
    pipeline:
      "Patient-level signals are harmonized into a probabilistic stratification model with uncertainty, supporting biological-risk and remote-monitoring layers of the twin.",
    impact:
      "This turns the digital twin from a static demographic profile into a patient-assimilating model that can update as new tests, wearables, and clinical visits arrive.",
    links: [
      {
        label: "Project page",
        href: `${cvcBase}/projects/integrated-pd-precision-stratification/`,
      },
      { label: "Paper brief", to: "/paper-integrated-biomarkers" },
      { label: "Related papers", to: "/related-papers#paper-biomarkers" },
    ],
  },
  {
    id: "paper-motor-states",
    stage: "4",
    role: "Posterior-calibrated motor states",
    title: "Posterior-Calibrated Multimodal Motor States Reveal Longitudinal and Imaging-Associated Heterogeneity",
    result:
      "The motor phenotype becomes a calibrated probability distribution over states, not a hard subtype label. Similar-looking patients can carry different latent motor-state uncertainty and transition risk.",
    evidence:
      "The Hill Prize summary cites 29,366 aligned PPMI motor-state visits from 4,773 participant identifiers, patient-level posterior aggregation, 250 patient-blocked bootstrap refits, imaging-to-posterior prediction, future axial prediction, and BioFIND transfer checks.",
    pipeline:
      "Visit-level motor evidence is residualized, converted into soft posterior states, calibrated with bootstrap consistency, and connected back to imaging-associated heterogeneity.",
    impact:
      "This gives AI4PD a clinical state layer: the twin can report confidence, entropy, transition risk, and evidence gaps instead of pretending every patient belongs cleanly to one group.",
    links: [{ label: "Related papers", to: "/related-papers#paper-motor-states" }],
  },
];

const supportingMethods = [
  {
    title: "PHAST and port-Hamiltonian forecasting",
    text:
      "Stable temporal dynamics make the patient state forecastable from sparse, partially observed, noisy trajectories without collapsing the twin into a black-box predictor.",
    href: `${cvcBase}/projects/phast/`,
  },
  {
    title: "Perennial learning",
    text:
      "The twin can be updated as new patient evidence arrives while preserving stable structure and distinguishing reversible belief transport from irreversible forgetting.",
    href: `${cvcBase}/projects/perennial-learning-kolmogorov/`,
  },
  {
    title: "Hamiltonian control",
    text:
      "Intervention planning can be framed as controlled movement through structured patient state space, including DBS and therapy-transition reasoning where clinically appropriate.",
    href: `${cvcBase}/projects/differential-and-pointwise-control-rl/`,
  },
];

const nextPhaseCards = [
  {
    title: "Proactive evidence collection",
    text:
      "The next demo should not only react to whatever data arrives. It should learn which missing test, wearable interval, imaging slice, or follow-up measurement would reduce uncertainty the most.",
  },
  {
    title: "Measurement agent plus planning agent",
    text:
      "One agent can propose the most informative data to request or scan, while another uses the updated patient state to plan diagnosis, monitoring, and therapy-support options faster.",
  },
  {
    title: "Stronger demonstrations",
    text:
      "The page should keep growing toward concrete examples: a patient timeline enters, the twin updates, uncertainty changes, the evidence trail is visible, and clinician-facing next steps are ranked.",
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
              digital twin system for Parkinson's care. The current update reframes
              the initiative as a story of progress: prior Parkinson's papers already
              show patient heterogeneity, pathway-level mechanisms, multimodal
              stratification, and calibrated motor-state trajectories. The next phase
              turns those wins into a clinician-facing digital twin.
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
              Read left to right: clinical partners and multimodal evidence feed a
              Texas-core AI platform; the platform builds a shared patient-specific
              longitudinal twin using cohort latent spaces and mechanism-informed
              circuit knowledge; clinician-facing outputs return diagnosis,
              intervention, and follow-up guidance through a secure portal.
            </figcaption>
            <aside className="initiative-side-jump" aria-label="Jump to digital twin evidence sections">
              <div className="initiative-side-jump__card">
                <span className="initiative-side-jump__label">Jump to evidence</span>
                {diagramAnchors.map((anchor) => (
                  <a key={anchor.label} href={anchor.href}>
                    {anchor.label}
                  </a>
                ))}
              </div>
            </aside>
            <div className="initiative-diagram-actions" aria-label="Jump from diagram to supporting evidence">
              {diagramAnchors.map((anchor) => (
                <a key={anchor.label} href={anchor.href}>
                  <span>{anchor.label}</span>
                  <p>{anchor.text}</p>
                </a>
              ))}
            </div>
          </figure>
        </section>

        <section className="section initiative-proof-section" id="data-foundation">
          <p className="initiative-eyebrow">Evidence first</p>
          <h2 className="section-title">What prior support has already produced</h2>
          <p className="text-block">
            The current pitch should not read like AI4PD is starting from scratch.
            The Parkinson's work already produced a discovery chain: population
            latent spaces, pathway-level imaging signatures, multimodal biomarker
            stratification, and calibrated motor-state trajectories. Each step gives
            the digital twin a concrete evidence layer.
          </p>
          <div className="initiative-proof-grid">
            <article>
              <span>Discover</span>
              <h3>Hidden patient structure</h3>
              <p>
                Patients who look similar clinically can separate once motor scores,
                imaging, diffusion, biomarkers, wearables, genetics, and molecular
                signals are modeled together with uncertainty.
              </p>
            </article>
            <article>
              <span>Explain</span>
              <h3>Circuit-level mechanisms</h3>
              <p>
                The pathway work maps symptoms back to affected brain circuits rather
                than stopping at descriptive clusters or crowded feature tables.
              </p>
            </article>
            <article>
              <span>Translate</span>
              <h3>Clinician-facing next steps</h3>
              <p>
                The proposed twin converts these wins into patient-state estimates,
                differential diagnosis support, therapy-planning evidence, and
                follow-up priorities.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="discovery-timeline">
          <p className="initiative-eyebrow">Timeline of discoveries</p>
          <h2 className="section-title">Four paper-backed wins that lead to AI4PD</h2>
          <p className="text-block">
            The professor's main correction was structural: lead with the wins, then
            show how each win led to the next step. The four Parkinson's papers below
            become the backbone of the page: result, evidence, processing pipeline,
            and impact.
          </p>
          <div className="initiative-discovery-timeline">
            {discoveryTimeline.map((item) => (
              <article key={item.id} id={item.id} className="initiative-discovery-card">
                <div className="initiative-discovery-stage">
                  <span>{item.stage}</span>
                  <p>{item.role}</p>
                </div>
                <h3>{item.title}</h3>
                <dl className="initiative-story-list">
                  <div>
                    <dt>Result</dt>
                    <dd>{item.result}</dd>
                  </div>
                  <div>
                    <dt>Evidence</dt>
                    <dd>{item.evidence}</dd>
                  </div>
                  <div>
                    <dt>Processing pipeline</dt>
                    <dd>{item.pipeline}</dd>
                  </div>
                  <div>
                    <dt>Impact</dt>
                    <dd>{item.impact}</dd>
                  </div>
                </dl>
                <LinkList links={item.links} />
              </article>
            ))}
          </div>
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

        <section className="section" id="clinician-outputs">
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

        <section className="section initiative-supporting-methods">
          <p className="initiative-eyebrow">From wins to the next phase</p>
          <h2 className="section-title">Methods that connect the papers into a living twin</h2>
          <p className="text-block">
            The four Parkinson's papers establish the evidence backbone. The broader
            Bajaj-group methods explain how those evidence layers become a living,
            continually updated, mechanism-grounded twin rather than a static website
            of study summaries.
          </p>
          <div className="initiative-method-grid">
            {supportingMethods.map((method) => (
              <article key={method.title} className="initiative-method-card">
                <h3>{method.title}</h3>
                <p>{method.text}</p>
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  Project context &rarr;
                </a>
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

        <section className="section initiative-next-phase">
          <p className="initiative-eyebrow">Next research direction</p>
          <h2 className="section-title">Make the twin proactive, not only reactive</h2>
          <p className="text-block">
            The suggested next step is a coupled discovery-and-planning demo. AI4PD
            should not merely wait for more evidence and then react. It should learn
            what evidence would most reduce uncertainty, request or prioritize that
            evidence, and then update the patient plan.
          </p>
          <div className="initiative-output-grid">
            {nextPhaseCards.map((card) => (
              <article key={card.title} className="initiative-output-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
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
