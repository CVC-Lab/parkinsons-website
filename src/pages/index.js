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
          <div className="content-flex">
            <div className="text-block">
              <p>
                Parkinson’s disease manifests across dopaminergic, cholinergic,
                and cerebello-thalamo-cortical networks, creating motor and
                non-motor burdens that evolve over decades. Standard-of-care
                interventions—from levodopa formulations and MAO-B inhibitors to
                July 2025 FDA-cleared bilateral focused ultrasound—are powerful
                yet still largely reactive and population-based.
              </p>
              <p>
                We are building models that anticipate progression, quantify
                symptom trajectories, and surface optimal therapies by fusing
                neuroimaging, biospecimens, genomics, and high-frequency sensor
                data. The result is a precision roadmap that neurologists and
                patients can trust.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Research pillars</h2>
          <div className="card-grid">
            {researchPillars.map((pillar) => (
              <article key={pillar.title} className="card">
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
          <div className="content-flex data-foundations">
            <div className="text-block">
              <h3>PPMI and allied cohorts</h3>
              <p>
                Multi-year clinical assessments (MDS-UPDRS-III, UPSIT, REM sleep
                questionnaires), biospecimens (CSF, plasma, urine, skin), and
                comprehensive genetics provide longitudinal anchors for our
                models.
              </p>
              <p>
                Structural MRI, DaT-SPECT, DTI/DKI/NODDI, and transcriptomics
                enable high-resolution views into dopaminergic loss and network
                remodeling.
              </p>
            </div>
            <div className="text-block">
              <h3>Digital phenotyping</h3>
              <p>
                Wearable accelerometer and gyroscope signals from gait, tremor,
                and fine-motor tasks fuel Level 2 feature engineering and motion
                code extraction.
              </p>
              <p>
                Smartphone tapping, keyboard dynamics, handwriting trajectories,
                and home-based levodopa response studies extend monitoring into
                daily life while preserving privacy.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="text-block">
            <h2 className="section-title">Clinically grounded collaboration</h2>
            <p>
              Weekly design reviews with neurologists, including Dr. Conor
              Fearon (Mater Misericordiae University Hospital, Dublin),
              pressure-test interpretability, confirm symptom priorities, and
              align intervention policies with frontline care pathways.
            </p>
            <p>
              Our multidisciplinary team spans computer science, biomedical
              engineering, and neuroscience—uniting graduate researchers Aaron
              Dominick, Ashwin Vinod, Aditya Sai, Jasmin Khalil, Priyanshi
              Kedia, Ojas Phirke, Thribhuvan Rapolu, Aditya Rajnarayan, Harsh
              Trilekhar, and faculty lead Professor Chandrajit Bajaj.
            </p>
          </div>
          <div className="image-container" style={{ maxWidth: '600px', margin: '2rem auto 0' }}>
            <StaticImage
              src="../images/brain_diagram.png"
              alt="Neurobiological circuits impacted by Parkinson's disease"
              placeholder="blurred"
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Tools and upcoming releases</h2>
          <div className="card-grid">
            <article className="card">
              <h3>ActionIntel</h3>
              <p>
                Interactive inference and visualization environment for
                clinician-facing exploration of patient trajectories, risk
                surfaces, and recommended interventions.
              </p>
            </article>
            <article className="card">
              <h3>Free Motion</h3>
              <p>
                Animated gait and arm swing reconstructions spotlight movements
                that deviate from standard tests and expose asymmetry in real
                time.
              </p>
            </article>
            <article className="card">
              <h3>Sensor-clinical correlation scores</h3>
              <p>
                Reference dashboards quantifying how closely digital phenotypes
                mirror in-clinic MDS-UPDRS trends to flag discrepancies early.
              </p>
            </article>
          </div>
          <div className="text-block centered">
            <p>
              We will publish open technical notes, sample datasets, and code
              snippets throughout Fall 2025. Join the mailing list on our{" "}
              <Link to="/resources">resources page</Link> to stay informed.
            </p>
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
