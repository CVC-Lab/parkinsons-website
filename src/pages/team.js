import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";
import { Link } from "gatsby";

const faculty = [
  {
    name: "Chandrajit Bajaj, Ph.D.",
    title: "Professor of Computer Science",
    focus:
      "Principal Investigator directing progressive AI, computational imaging, and real-time visualization for precision neurology.",
  },
];

const researchers = [
  {
    name: "Aaron Dominick",
    focus: "Leads SegFormer deployment, DaT-SPECT alignment, and SBR automation.",
  },
  {
    name: "Ashwin Vinod",
    focus: "Designs Hamiltonian policy optimization and continual-learning agents.",
  },
  {
    name: "Aditya Sai",
    focus: "Develops multimodal co-clustering and interpretable latent spaces.",
  },
  {
    name: "Jasmin Khalil",
    focus: "Coordinates biospecimen integration and molecular biomarker studies.",
  },
  {
    name: "Priyanshi Kedia",
    focus: "Builds ActionIntel clinician dashboards and sensor-clinical correlation scoring.",
  },
  {
    name: "Ojas Phirke",
    focus: "Engineers wearable signal preprocessing and motion code extraction.",
  },
  {
    name: "Thribhuvan Rapolu",
    focus: "Architects data pipelines and privacy-preserving cohort harmonization.",
  },
  {
    name: "Aditya Rajnanarayan",
    focus: "Works on reinforcement learning evaluation and simulation environments.",
  },
  {
    name: "Harsh Trilekhar",
    focus: "Supports diffusion imaging analytics and explainable segmentation.",
  },
];

const collaborators = [
  {
    name: "Dr. Conor Fearon, MD PhD",
    affiliation:
      "Mater Misericordiae University Hospital, Dublin, Ireland",
    focus:
      "Neurology partner advising on clinical endpoints, device pathways, and patient selection.",
  },
  {
    name: "Oden Institute Research Computing",
    affiliation: "University of Texas at Austin",
    focus:
      "Provides GPU clusters, high-memory nodes, and secure data enclaves for model training.",
  },
];

export default function TeamPage() {
  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>The Progressive AI Team</h1>
            <p>
              We unite computational scientists, engineers, and clinicians at
              the Oden Institute to advance AI-guided care for Parkinson’s
              disease. Our culture emphasizes reproducible science, clinical
              partnership, and ethically grounded deployment.
            </p>
            <p className="hero-subtext">
              Weekly stand-ups coordinate segmentation, reinforcement learning,
              and visualization tracks, ensuring our agents remain aligned with
              frontline neurologist needs.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Faculty leadership</h2>
          <div className="dense-section two-column">
            {faculty.map((member) => (
              <article key={member.name} className="dense-brief">
                <h3>{member.name}</h3>
                <p><strong>{member.title}</strong></p>
                <p>{member.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Graduate and undergraduate researchers</h2>
          <div className="dense-section two-column">
            {researchers.map((member) => (
              <article key={member.name} className="dense-brief">
                <h3>{member.name}</h3>
                <p>{member.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Clinical and infrastructure collaborators</h2>
          <div className="dense-section two-column">
            {collaborators.map((member) => (
              <article key={member.name} className="dense-brief">
                <h3>{member.name}</h3>
                <p><strong>{member.affiliation}</strong></p>
                <p>{member.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">Join the lab</h2>
          <p>
            We host visiting scholars, capstone students, and industry fellows.
            Share your interests via the collaboration links on our{" "}
            <Link to="/resources">resources page</Link>.
          </p>
        </section>
      </div>
    </Layout>
  );
}
