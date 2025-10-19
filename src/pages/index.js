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
    "PD is heterogeneous and multisystem; current therapies remain largely symptomatic with no definitive disease-modifying success.",
    "Clinic scales are noisy and episodic—objective, longitudinal markers from imaging and wearables tighten risk stratification.",
    "Data exists but stays siloed; integrated inference across imaging, biospecimen, genetics, gait, and clinical sources unlocks patient-level decisions."
  ];

  const therapeuticFocus = [
    "Motor symptom optimization: levodopa/carbidopa (including Rytary®), dopamine agonists, and MAO-B inhibitors with safinamide add-on for extended “ON” time.",
    "Advanced delivery pathways: enteral Duopa® gel, continuous levodopa/carbidopa infusion (Vyalev™, 2024), and subcutaneous apomorphine infusion (Onapgo™, 2025).",
    "Procedural interventions: bilateral staged MR-guided focused ultrasound approved in July 2025 alongside established STN/GPi deep brain stimulation protocols.",
    "Non-motor management: SSRIs/SNRIs for mood, melatonin or clonazepam for REM sleep behavior disorder, and structured tapers plus CBT for impulse-control disorders.",
    "Autonomic care: droxidopa or midodrine for orthostatic hypotension, botulinum toxin for sialorrhea, polyethylene glycol for constipation, and mirabegron for overactive bladder."
  ];

  const translationalMilestones = [
    "SegFormer v2 deployment trims striatal segmentation from about 330 minutes to roughly 12 minutes per subject while preserving reproducibility.",
    "Hamiltonian policy optimization stabilizes progressive reinforcement learning for individualized therapy sequencing under partial observability.",
    "Variational co-clustering surfaces multimodal subgroups with accelerated motor decline, guiding targeted studies and risk stratification.",
    "ActionIntel, Free Motion, and sensor-clinical correlation dashboards translate multimodal inference into clinician-auditable decisions.",
    "UT Austin’s expansion adds remote olfactory testing, transcriptomics, and smartwatch levodopa-response studies feeding the progressive pipeline and staged open-source releases through December 2025."
  ];

  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Progressive, multimodal AI for Parkinson’s care.</h1>
            <p>
              We differentially diagnose prevalent mechanisms and map individualized
              interventions by robustly cross-correlating imaging (DaT/MRI/DTI),
              biospecimens, gait sensors, genetics, and clinical scores—with
              clinician-facing tools for actionable insight.
            </p>
          </div>
          <div className="hero-visual">
            <StaticImage
              src="../images/training.png"
              alt="Progressive AI training overview"
              placeholder="blurred"
            />
          </div>
        </section>

        <section className="section progressive-ai-section">
          <div className="progressive-ai-content">
            <div className="progressive-ai-image">
              <StaticImage
                src="../images/progressive_ai.jpg"
                alt="Diagram of progressive AI decision-making pipeline"
                placeholder="blurred"
              />
            </div>
            <div className="text-block">
              <h2 className="section-title">Progressive decision stack</h2>
              <ul className="tight-list">
                <li>Continually active decision-making agents balance risk and reward with clinician oversight.</li>
                <li>Robust causal cross-correlation links DaT, MRI, DTI, genetic, clinical, biologic, and gait/arm swing signals.</li>
                <li>Stochastic policy optimization on Hamiltonian manifolds keeps reinforcement learning stable and adaptive.</li>
              </ul>
              <h3 className="subheading">How this helps patients</h3>
              <p>
                Progressive AI agents synthesize multimodal patient data to differentially diagnose mechanisms and guide individualized
                interventions throughout the course of Parkinson’s disease care.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Why this matters</h2>
          <ul className="tight-list">
            {focusPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
              <ol className="pipeline-steps">
                {pipeline.map((item) => (
                  <li key={item.step}>
                    <strong>{item.step}</strong>
                    <p>{item.detail}</p>
                  </li>
                ))}
              </ol>
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
