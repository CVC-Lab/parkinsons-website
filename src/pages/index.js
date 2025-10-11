import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../components/style.css";

export default function IndexPage({ data }) {
  const deepDives = React.useMemo(() => {
    const edges = data?.allMarkdownRemark?.edges ?? [];
    return edges
      .slice()
      .sort((a, b) => {
        const aId = a.node.frontmatter?.id ?? 0;
        const bId = b.node.frontmatter?.id ?? 0;
        return aId - bId;
      })
      .slice(0, 4);
  }, [data]);

  const researchPillars = [
    {
      title: "Patient-specific neuroimaging biomarkers",
      description:
        "SegFormer-powered segmentation of T1 MRI, DaTSCAN, and diffusion imaging yields individualized striatal masks and SBR ratios in minutes instead of hours.",
    },
    {
      title: "Progressive decision agents",
      description:
        "Hamiltonian-reinforced agents continuously update disease states by balancing risk and reward across clinical, biologic, and imaging modalities.",
    },
    {
      title: "Wearable and remote sensing analytics",
      description:
        "Smartphone, smartwatch, and handwriting data reveal tremor, gait, and arm swing signatures that correlate with rapid motor decline and levodopa response.",
    },
    {
      title: "Clinically aligned explainability",
      description:
        "ActionIntel dashboards, Free Motion visualization, and sensor-clinical correlation scores keep neurologists in the loop for shared decisions.",
    },
  ];

  const pipeline = [
    {
      step: "1. Cohort assembly",
      detail:
        "Integrate PPMI clinical assessments, biospecimens, genetics, imaging, and remote self-reports with new multi-site data collections at UT Austin.",
    },
    {
      step: "2. Multimodal normalization",
      detail:
        "Apply MRI skull-stripping, Z-score harmonization, DaTSCAN upsampling, and wearable signal filtering to create aligned feature spaces.",
    },
    {
      step: "3. Biomarker extraction",
      detail:
        "Generate 3D striatal masks, compute patient-specific SBR ratios, and derive Level 2 motion codes for gait, tremor, and arm symmetry.",
    },
    {
      step: "4. Progressive policy learning",
      detail:
        "Train decision agents on stochastic Hamiltonian manifolds to recommend individualized intervention pathways and quantify uncertainty.",
    },
  ];

  const focusPoints = [
    "Quantify dopaminergic, cholinergic, and cerebello-thalamo-cortical network disruption using joint imaging-biologic embeddings.",
    "Fuse biospecimens, genetics, and digital phenotypes into longitudinal state estimators that surface prodromal change points.",
    "Stress-test treatment policies against simulated trajectories to expose when symptom control or side-effect risk becomes dominant.",
    "Deliver clinician-auditable reasoning layers that highlight biomarkers driving each recommendation."
  ];

  const therapeuticFocus = [
    "Motor symptom optimization: levodopa/carbidopa (including Rytary®), dopamine agonists, and MAO-B inhibitors with safinamide add-on for extended “ON” time.",
    "Advanced delivery pathways: enteral Duopa® gel, continuous levodopa/carbidopa infusion (Vyalev™, 2024), and subcutaneous apomorphine infusion (Onapgo™, 2025).",
    "Procedural interventions: bilateral staged MR-guided focused ultrasound approved in July 2025 alongside established STN/GPi deep brain stimulation protocols.",
    "Non-motor management: SSRIs/SNRIs for mood, melatonin or clonazepam for REM sleep behavior disorder, and structured tapers plus CBT for impulse-control disorders.",
    "Autonomic care: droxidopa or midodrine for orthostatic hypotension, botulinum toxin for sialorrhea, polyethylene glycol for constipation, and mirabegron for overactive bladder."
  ];

  const translationalMilestones = [
    "SegFormer v2 deployment reduces striatal segmentation time from ~330 minutes (manual/Freesurfer) to ~12 minutes per subject with reproducible SBR extraction.",
    "Hamiltonian policy optimization (Nguyen & Bajaj, 2025) provides stable continuous control updates for partially observed Parkinson’s trajectories.",
    "Variational co-clustering exposes PPMI subgroups with accelerated motor decline linked to pars opercularis volume loss and asymmetrical gait features.",
    "ActionIntel and Free Motion dashboards integrate sensor-clinical correlation scores, making divergences between wearable data and UPDRS trajectories explicit.",
    "UT Austin’s federally funded expansion adds remote olfactory testing, transcriptomics, and smartwatch-based levodopa response studies to the core cohort."
  ];

  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Progressive AI for Parkinson’s Precision Care</h1>
            <p>
              We are an interdisciplinary AI team at the Oden Institute for
              Computational Engineering and Sciences, charged with accelerating
              biomarker discovery and decision support for Parkinson’s disease
              through federally funded translational research.
            </p>
            <p className="hero-subtext">
              Our mission: deliver actionable differential diagnosis and
              individualized intervention guidance that adapts with every clinic
              visit, wearable trace, and imaging study.
            </p>
            <div className="hero-cta">
              <Link className="button primary" to="/research">
                Explore our research
              </Link>
              <Link className="button secondary" to="/background">
                Understand Parkinson’s disease
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <StaticImage
              src="../images/training.png"
              alt="Progressive AI training overview"
              placeholder="blurred"
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Why progressive intelligence matters in 2025</h2>
          <div className="dense-section two-column">
            <div className="column-text">
              <p>
                Parkinson’s disease manifests across dopaminergic, cholinergic, and
                cerebello-thalamo-cortical networks, creating motor and non-motor
                burdens that evolve over decades. Current standards—from refined
                levodopa titrations to July 2025 FDA-cleared bilateral focused
                ultrasound—remain reactive and population-based even when they
                incorporate advanced neuromodulation.
              </p>
              <p>
                Our program concentrates on anticipating disease inflection points,
                quantifying symptom trajectories, and recommending precise therapy
                sequences by fusing neuroimaging, biospecimens, genomics, and
                high-frequency sensor data. Each update is benchmarked against
                clinician practice patterns to verify safety and interpretability.
              </p>
            </div>
            <div>
              <h3>2025 systems focus</h3>
              <ul className="tight-list">
                {focusPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Research pillars</h2>
          <div className="dense-section two-column">
            {researchPillars.map((pillar) => (
              <article key={pillar.title} className="dense-brief">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="content-flex reverse">
            <div className="image-container">
              <StaticImage
                src="../images/discovery.png"
                alt="Progressive biomarker discovery pipeline"
                placeholder="blurred"
              />
            </div>
            <div className="text-block">
              <h2 className="section-title">Progressive biomarker pipeline</h2>
              <ul className="pipeline-list">
                {pipeline.map((item) => (
                  <li key={item.step}>
                    <strong>{item.step}</strong>
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Data foundations we are scaling</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>PPMI and allied cohorts</h3>
              <p>
                Multi-year clinical assessments, biospecimens, genetics, and imaging
                archives provide longitudinal anchors for our models while ensuring
                harmonized metadata and regulatory compliance.
              </p>
              <ul className="tight-list">
                <li>MDS-UPDRS-III, UPSIT olfaction, REM/Epworth sleep scales, QUIP, SCOPA-AUT, cognitive batteries.</li>
                <li>CSF, plasma, urine, skin biopsies plus whole-genome sequencing and transcriptomics.</li>
                <li>Structural MRI, DaT-SPECT, DTI/DKI/NODDI for dopaminergic loss and microstructural remodeling.</li>
              </ul>
            </article>
            <article className="dense-brief">
              <h3>Digital phenotyping</h3>
              <p>
                High-frequency wearable and smartphone signals are distilled into Level 2 motion codes and sensor-clinical concordance scores that capture daily life function.
              </p>
              <ul className="tight-list">
                <li>Accelerometer and gyroscope traces for gait, tremor, arm swing, and levodopa response.</li>
                <li>Handwriting, keyboard dynamics, tapping tasks, and home fine-motor assessments.</li>
                <li>Privacy-preserving ingestion pipelines with artifact detection and context labeling.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Clinically grounded collaboration</h2>
          <div className="content-flex">
            <div className="text-block column-text">
              <p>
                Weekly design reviews with neurologists, including Dr. Conor Fearon
                (Mater Misericordiae University Hospital, Dublin), pressure-test
                interpretability, confirm symptom priorities, and align intervention
                policies with frontline care pathways.
              </p>
              <p>
                Our multidisciplinary team spans computer science, biomedical
                engineering, and neuroscience—uniting graduate researchers Aaron
                Dominick, Ashwin Vinod, Aditya Sai, Jasmin Khalil, Priyanshi Kedia,
                Ojas Phirke, Thribhuvan Rapolu, Aditya Rajnarayan, Harsh Trilekhar,
                and faculty lead Professor Chandrajit Bajaj.
              </p>
              <ul className="tight-list">
                <li>Clinical Q/A sessions capture unmet needs in gait, cognition, and autonomic domains.</li>
                <li>ActionIntel prototypes are validated against anonymized case logs before deployment.</li>
                <li>Regulatory advisors review model documentation for clinical study readiness.</li>
              </ul>
            </div>
            <div className="image-container" style={{ maxWidth: "420px", margin: "0 auto" }}>
              <StaticImage
                src="../images/brain_diagram.png"
                alt="Neurobiological circuits impacted by Parkinson's disease"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Tools and upcoming releases</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>ActionIntel</h3>
              <p>
                Interactive inference environment aligning projected trajectories,
                counterfactual therapy simulations, and uncertainty bounds with
                neurologist workflows. A regulatory-ready technical note is in
                preparation for Fall 2025.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Free Motion</h3>
              <p>
                Animated gait and arm swing reconstructions surface asymmetry not
                captured by standard in-clinic tests, with controls for patient
                selection, animation speed, and sensor segment inspection.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Sensor-clinical correlation scores</h3>
              <p>
                Benchmark dashboards quantify concordance between digital phenotypes
                and MDS-UPDRS trends, flagging divergence events for targeted review.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Open-source roadmap</h3>
              <p>
                Containerized SegFormer pipelines, Hamiltonian policy notebooks, and
                Dash visualization templates will roll out in staged releases through
                December 2025.
              </p>
            </article>
          </div>
          <p className="text-block centered">
            Subscribe on the <Link to="/resources">resources page</Link> to receive
            dataset drops, code announcements, and clinical trial milestones.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Therapeutic landscape we model</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>Intervention portfolio</h3>
              <p>
                Treatment policies are calibrated against contemporary medical,
                device, and behavioral pathways so that clinical recommendations
                remain grounded in what patients can access today.
              </p>
              <ul className="tight-list">
                {therapeuticFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="dense-brief">
              <h3>Real-world deployment checks</h3>
              <p>
                Each simulated recommendation is evaluated for dosage safety,
                contraindications, and practical sequencing (e.g., taper schedules,
                rehab integration) before inclusion in our ActionIntel playbooks.
              </p>
              <p>
                Policy revisions incorporate new FDA approvals, consensus statements,
                and clinician feedback to keep the agent synchronized with evolving
                care standards.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Translational milestones</h2>
          <div className="dense-section">
            <ul className="tight-list">
              {translationalMilestones.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {deepDives.length > 0 && (
          <section className="section">
            <h2 className="section-title">Technical deep dives</h2>
            <ul className="deep-dive-list">
              {deepDives.map(({ node }) => (
                <li key={node.id}>
                  <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="section final-callout">
          <h2 className="section-title">Partner with us</h2>
          <p>
            Strategic philanthropy, industry partnerships, and clinical trial
            collaborations help us deliver precision neurology that reaches
            patients faster. Visit our <Link to="/donors">donors page</Link> or
            connect through the outreach links on our <Link to="/resources">resources page</Link>.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            id
          }
        }
      }
    }
  }
`;
