import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";

export default function BackgroundPage({ data }) {
  const sortedEdges = React.useMemo(() => {
    return data.allMarkdownRemark.edges
      .slice()
      .sort((a, b) => a.node.frontmatter.id - b.node.frontmatter.id);
  }, [data]);

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Parkinson’s Disease Context</h1>

        <section className="section">
          <div className="content-flex">
            <div className="text-block column-text">
              <h2 className="section-title">Neurobiology in focus</h2>
              <p>
                Parkinson’s disease begins with degeneration of dopaminergic neurons within the
                substantia nigra pars compacta, but the cascade quickly recruits cholinergic and
                cerebello-thalamo-cortical networks. These circuit-wide disruptions explain why gait,
                balance, cognition, and autonomic regulation can deteriorate even when motor tremor
                appears well controlled.
              </p>
              <p>
                Protein misfolding, mitochondrial stress, lysosomal dysfunction, and immune
                signaling—including genes such as BST1, SYT11, TMEM175, and GRN—activate selective
                vulnerability across the basal ganglia. Our models incorporate these molecular
                signatures alongside imaging-derived biomarkers.
              </p>
            </div>
            <div className="image-container">
              <StaticImage
                className="section-image"
                src="../images/md_image.png"
                alt="DaTSCAN and MRI overlay highlighting striatal pathways"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Clinical manifestations we model</h2>
          <div className="content-flex">
            <div className="text-block">
              <h3>Motor domains</h3>
              <ul className="tight-list">
                <li>Nigrostriatal dopamine deficit drives bradykinesia, rigidity, and resting tremor.</li>
                <li>Network-level changes produce medication-refractory tremor and dyskinesia.</li>
                <li>Cholinergic degeneration contributes to freezing of gait, postural instability, and falls.</li>
              </ul>
            </div>
            <div className="text-block">
              <h3>Non-motor domains</h3>
              <ul className="tight-list">
                <li>Cognitive fluctuations and hallucinations reflect cholinergic and cortical involvement.</li>
                <li>Mood, anxiety, and sleep disturbances stem from monoaminergic dysregulation beyond dopamine.</li>
                <li>Autonomic failure drives orthostatic hypotension, sialorrhea, constipation, and urinary urgency.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Therapeutic landscape as of 2025</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>Dopaminergic strategies</h3>
              <p>
                Early-stage motor symptoms often respond to levodopa/carbidopa
                (immediate or extended release), dopamine agonists, and MAO-B
                inhibitors such as rasagiline, selegiline, or safinamide. Rytary®
                smooths motor control, while add-on safinamide extends “ON” time.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Advanced delivery options</h3>
              <p>
                Complex fluctuations may require enteral Duopa® gel, continuous
                levodopa/carbidopa infusion (Vyalev™, FDA cleared 2024), or
                subcutaneous apomorphine (Onapgo™, 2025). Neuromodulation via
                deep brain stimulation (STN/GPi) remains a cornerstone.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Emerging procedural care</h3>
              <p>
                MR-guided focused ultrasound has progressed from unilateral to
                staged bilateral procedures, with FDA clearance in July 2025 for
                select centers. It offers incisionless tremor relief and reduced
                dyskinesia for advanced disease.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Non-motor management</h3>
              <p>
                SSRIs/SNRIs effectively address depression and anxiety without
                worsening motor scores. Melatonin or clonazepam mitigate REM
                sleep behavior disorder, while tailored tapering of dopamine
                agonists manages impulse-control disorders alongside behavioral
                therapy.
              </p>
            </article>
            <article className="dense-brief">
              <h3>Autonomic support</h3>
              <p>
                Orthostatic hypotension starts with hydration, salt, and
                compression, escalating to droxidopa or midodrine. Botulinum
                toxin injections relieve sialorrhea, polyethylene glycol is the
                preferred first-line osmotic laxative, and mirabegron offers
                bladder control with minimal cognitive burden.
              </p>
            </article>
          </div>
          <p className="text-block centered">
            These interventions are powerful, yet they are prescribed largely on
            population averages. Our progressive agents learn which combination,
            sequence, and timing work best for each individual patient profile.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Deep dives from our group</h2>
          <p>
            The following articles summarize the technical underpinnings of our
            biomarker extraction and modeling efforts:
          </p>
          <ul className="research-links tight-list">
            {sortedEdges.map(({ node }) => (
              <li key={node.id}>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Reference notebooks and reports</h2>
          <ul className="research-links tight-list">
            <li>
              <a
                href="https://hackmd.io/XG3ITA8iR2S8A2M-0O6GfA"
                target="_blank"
                rel="noopener noreferrer"
              >
                PPMI Cohort Overview &amp; data governance notes
              </a>
            </li>
            <li>
              <a
                href="https://hackmd.io/rs2D-YBjR3WG_xCnCjC6EA"
                target="_blank"
                rel="noopener noreferrer"
              >
                DaTSCAN imaging curation checklist
              </a>
            </li>
            <li>
              <a
                href="https://hackmd.io/CUwJaR4nRhG1VVT7zivVQA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Segmentation for biomarker extraction (SegFormer playbook)
              </a>
            </li>
            <li>
              <a
                href="https://hackmd.io/bSbn-rF1RMyA4jial75-oA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diffusion MRI (DTI/NODDI) processing in PPMI
              </a>
            </li>
            <li>
              <a
                href="https://hackmd.io/a4ZKxOy8SCeICVYtpF3sow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dataset-specific result summaries
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1rocVQaC-FittJwJotOPZBB4ftf_Gjjlb/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Summer 2023 final report (archival PDF)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BackgroundPage {
    allMarkdownRemark(
      filter: { frontmatter: { id: { ne: null } } }
      sort: { frontmatter: { id: ASC } }
    ) {
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
