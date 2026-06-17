import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";
import { Link } from "gatsby";

const faculty = [
  {
    name: "Chandrajit Bajaj, Ph.D.",
    title: "Professor of Computer Science, Oden Institute, UT Austin",
    profile: "https://www.cs.utexas.edu/~bajaj/",
  },
];

const researchers = [
  { name: "Aaron Dominick" },
  { name: "Ashwin Vinod" },
  { name: "Aditya Sai" },
  { name: "Aparna Dev" },
  { name: "Shubham Bhardwaj" },
  { name: "Jasmine Khalil" },
  { name: "Priyanshi Yadav" },
  { name: "Ojas Phirke" },
  { name: "Thribhuvan Rapolu" },
  { name: "Aditya Rajnarayan" },
  { name: "Harsh Tirhekar" },
];

const collaborators = [
  {
    name: "Dr. Conor Fearon, MD PhD",
    affiliation: "Mater Misericordiae University Hospital, Dublin, Ireland",
  },
  {
    name: "Dr. Barbara Marebwa",
    affiliation: "Senior Scientist, Michael J. Fox Foundation",
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
            <h1>The AI4PD Team</h1>
            <p>
              Computational scientists, engineers, and clinicians at the Oden Institute
              building a clinician-facing Parkinson's digital twin. We develop and validate
              these tools alongside the clinical cohorts that generate the data, with
              reproducible methods and cross-site validation, and every decision-support
              output goes to the physician first.
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
                {member.profile && (
                  <span>
                    <a href={member.profile} target="_blank" rel="noopener noreferrer">
                      Faculty profile
                    </a>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="section team-block">
          <h2 className="section-title">Graduate and undergraduate researchers</h2>
          <p className="text-block">
            Bajaj Lab, Oden Institute and Department of Computer Science, The University
            of Texas at Austin.
          </p>
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
            We host visiting scholars, capstone students, and research fellows. To work with
            us, or for clinical-validation and data-sharing inquiries, write to Prof.
            Chandrajit Bajaj at <a href="mailto:bajaj@cs.utexas.edu">bajaj@cs.utexas.edu</a>,
            or use the collaboration links on our <Link to="/resources">resources page</Link>.
          </p>
        </section>
      </div>
    </Layout>
  );
}
