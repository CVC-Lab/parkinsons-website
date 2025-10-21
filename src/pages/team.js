import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";
import { Link } from "gatsby";

const faculty = [
  {
    name: "Chandrajit Bajaj, Ph.D.",
    title: "Professor of Computer Science",
  },
];

const researchers = [
  {
    name: "Aaron Dominick",
  },
  {
    name: "Ashwin Vinod",
  },
  {
    name: "Aditya Sai",
  },
  {
    name: "Aparna Dev",
  },
  {
    name: "Shubham Bhardwaj",
  },
  {
    name: "Jasmine Khalil",
  },
  {
    name: "Priyanshi Yadav",
  },
  {
    name: "Ojas Phirke",
  },
  {
    name: "Thribhuvan Rapolu",
  },
  {
    name: "Aditya Rajnarayan",
  },
  {
    name: "Harsh Tirhekar",
  },
];

const collaborators = [
  {
    name: "Dr. Conor Fearon, MD PhD",
    affiliation:
      "Mater Misericordiae University Hospital, Dublin, Ireland",
  },
  {
    name: "Oden Institute Research Computing",
    affiliation: "University of Texas at Austin",
  },
];

export default function TeamPage() {
  return (
    <Layout>
      <div className="page-container team-page">
        <section className="hero-section team-hero">
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

        <section className="section team-block">
          <h2 className="section-title">Faculty leadership</h2>
          <ul className="team-list">
            {faculty.map((member) => (
              <li key={member.name}>
                <strong>{member.name}</strong>
                {member.title && <span>{member.title}</span>}
              </li>
            ))}
          </ul>
        </section>

        <section className="section team-block">
          <h2 className="section-title">Graduate and undergraduate researchers</h2>
          <ul className="team-list">
            {researchers.map((member) => (
              <li key={member.name}>
                <strong>{member.name}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="section team-block">
          <h2 className="section-title">Clinical and infrastructure collaborators</h2>
          <ul className="team-list">
            {collaborators.map((member) => (
              <li key={member.name}>
                <strong>{member.name}</strong>
                <span>{member.affiliation}</span>
              </li>
            ))}
          </ul>
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
