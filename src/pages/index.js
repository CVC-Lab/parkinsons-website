import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../components/style.css";

export default function IndexPage({ data }) {
  const donors = data?.site?.siteMetadata?.donors ?? [];

  return (
    <Layout>
      <div className="page-container home-page compact-page-shell home-page-landing">

        {/* Hero */}
        <section className="hero-section hero-stack hero-centered">
          <div className="hero-text">
            <h1>Precision Neurology for Parkinson's Disease</h1>
            <p>From population patterns to individual care</p>
          </div>
          <div className="hero-figure">
            <StaticImage
              src="../images/home-main.png"
              alt="Precision Neurology for Parkinson's Disease: From population patterns to individual care"
              placeholder="blurred"
              layout="fullWidth"
            />
          </div>
          <div className="hero-cta hero-cta-centered">
            <Link className="button primary" to="/clinician-workflow">
              See the clinician workflow
            </Link>
          </div>
        </section>

        {/* Core content blocks */}
        <section className="section">
          <div className="content-blocks">
            <div className="content-block content-block--media">
              <div className="content-block-thumb-frame">
                <StaticImage
                  src="../images/multimodal-data-integration-replacement.jpg"
                  alt="Multimodal Data Integration thumbnail"
                  className="content-block-thumb-media"
                  imgClassName="content-block-thumb"
                  placeholder="blurred"
                  layout="fullWidth"
                  aspectRatio={16 / 9}
                />
              </div>
              <div className="content-block-copy">
                <h3>Multimodal Data Integration</h3>
                <p>
                  We integrate four core data domains — clinical assessments, brain
                  imaging, genetic profiles, and wearable sensor data — from
                  large-scale cohorts to build a comprehensive baseline.
                </p>
                <div className="content-block-links">
                  <a
                    href="https://cvc-lab.github.io/projects/pathway-anchored-pd-clustering/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pathway-Anchored PD Clustering
                  </a>
                  <a
                    href="https://cvc-lab.github.io/projects/integrated-pd-precision-stratification/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Integrated PD Precision Stratification
                  </a>
                </div>
              </div>
            </div>
            <div className="content-block content-block--media">
              <div className="content-block-thumb-frame">
                <StaticImage
                  src="../images/subgroup-discovery-replacement.jpg"
                  alt="Subgroup Discovery thumbnail"
                  className="content-block-thumb-media"
                  imgClassName="content-block-thumb"
                  placeholder="blurred"
                  layout="fullWidth"
                  aspectRatio={16 / 9}
                />
              </div>
              <div className="content-block-copy">
                <h3>Subgroup Discovery</h3>
                <p>
                  An advanced AI framework analyzes this integrated data to reveal
                  latent markers, differentiating Parkinson's disease from look-alikes
                  and discovering meaningful patient subgroups.
                </p>
                <div className="content-block-links">
                  <a
                    href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=gyL3CZ0AAAAJ&sortby=pubdate&citation_for_view=gyL3CZ0AAAAJ:EsrhoZGmrkoC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Citation
                  </a>
                </div>
              </div>
            </div>
            <div className="content-block content-block--media">
              <div className="content-block-thumb-frame">
                <StaticImage
                  src="../images/actionable-precision-replacement.jpg"
                  alt="Actionable Precision thumbnail"
                  className="content-block-thumb-media"
                  imgClassName="content-block-thumb"
                  placeholder="blurred"
                  layout="fullWidth"
                  aspectRatio={16 / 9}
                />
              </div>
              <div className="content-block-copy">
                <h3>Actionable Precision</h3>
                <p>
                  Population-informed models surface patient-specific risk
                  stratifications, subgroup context, and targeted therapeutic
                  priorities.
                </p>
                <div className="content-block-links">
                  <a
                    href="https://cvc-lab.github.io/projects/differential-and-pointwise-control-rl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Differential &amp; Pointwise Control RL
                  </a>
                  <a
                    href="https://cvc-lab.github.io/projects/phast/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PHAST
                  </a>
                  <a
                    href="https://cvc-lab.github.io/projects/protein-sidechain/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Protein Sidechain
                  </a>
                  <a
                    href="https://cvc-lab.github.io/projects/grl-snam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GRL-SNAM
                  </a>
                </div>
              </div>
            </div>
            <div className="content-block content-block--media">
              <div className="content-block-thumb-frame">
                <StaticImage
                  src="../images/port-hamiltonian-modeling-replacement.jpg"
                  alt="Port Hamiltonian Modeling thumbnail"
                  className="content-block-thumb-media"
                  imgClassName="content-block-thumb"
                  placeholder="blurred"
                  layout="fullWidth"
                  aspectRatio={16 / 9}
                />
              </div>
              <div className="content-block-copy">
                <h3>Port Hamiltonian Modeling</h3>
                <p>
                  We solve the multimodal dynamics with a port-Hamiltonian
                  formulation that preserves structure while supporting stable,
                  interpretable patient-state inference.
                </p>
                <div className="content-block-links">
                  <a
                    href="https://cvc-lab.github.io/projects/phast/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PHAST
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we differentiate */}
        <section className="section">
          <h2 className="section-title">What we differentiate</h2>
          <ul className="differentiate-list">
            <li className="differentiate-item">
              <div className="differentiate-thumb-frame">
                <StaticImage
                  src="../images/differential-diagnosis-thumbnail.jpg"
                  alt="Differential diagnosis thumbnail"
                  className="differentiate-thumb-media"
                  imgClassName="differentiate-thumb"
                  placeholder="blurred"
                  layout="fullWidth"
                  aspectRatio={4 / 3}
                />
              </div>
              <div className="differentiate-copy">
                <span className="differentiate-label">Differential diagnosis</span>
                <p>
                  Seed amplification biomarkers help separate Parkinson&apos;s
                  disease from look-alikes such as MSA, PSP, and DLB.
                </p>
              </div>
            </li>
            <li className="differentiate-item">
              <div className="differentiate-thumb-frame">
                <StaticImage
                  src="../images/precision-stratification-thumbnail.jpg"
                  alt="Precision stratification thumbnail"
                  className="differentiate-thumb-media"
                  imgClassName="differentiate-thumb"
                  placeholder="blurred"
                  layout="fullWidth"
                  aspectRatio={4 / 3}
                />
              </div>
              <div className="differentiate-copy">
                <span className="differentiate-label">Precision stratification</span>
                <p>
                  Pathway-weighted profiles group patients into biologically
                  distinct Parkinson&apos;s subtypes with different trajectories.
                </p>
              </div>
            </li>
            <li className="differentiate-item">
              <div className="differentiate-thumb-frame">
                <StaticImage
                  src="../images/nearest-neighbor-thumbnail.jpg"
                  alt="Optimal intervention and decision support thumbnail"
                  className="differentiate-thumb-media"
                  imgClassName="differentiate-thumb"
                  placeholder="blurred"
                  layout="fullWidth"
                  aspectRatio={4 / 3}
                />
              </div>
              <div className="differentiate-copy">
                <span className="differentiate-label">Optimal Intervention and Decision Support</span>
                <p>
                  Population-informed models translate subgroup context,
                  biomarker burden, and comparable trajectories into intervention
                  priorities and clinician-facing decision support.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* Evidence highlights */}
        <section className="section">
          <h2 className="section-title">Evidence highlights</h2>
          <ul className="evidence-list">
            <li>
              Circuit-level imaging signatures reveal patient subtypes with
              distinct motor and cognitive profiles across six neuroanatomical
              pathways.{" "}
              <a
                className="evidence-label"
                href="https://www.biorxiv.org/content/10.64898/2025.12.15.694278v1.full.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            </li>
            <li>
              Wearable arm-swing asymmetry and dual-task gait cost detect
              motor-cognitive network involvement non-invasively.{" "}
              <a
                className="evidence-label"
                href="https://www.medrxiv.org/content/medrxiv/early/2025/12/04/2025.12.02.25340302.full.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            </li>
            <li>
              LRRK2 G2019S carriers show measurably higher motor severity,
              enabling genetic risk stratification and personalized counseling.{" "}
              <a
                className="evidence-label"
                href="https://www.medrxiv.org/content/medrxiv/early/2025/12/04/2025.12.02.25340302.full.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            </li>
            <li>
              Bayesian clustering identifies four motor phenotypes with
              transparent model selection via Evidence Lower Bound.{" "}
              <a
                className="evidence-label"
                href="https://www.medrxiv.org/content/medrxiv/early/2025/12/04/2025.12.02.25340302.full.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            </li>
          </ul>
        </section>

        {/* Sponsors */}
        <section className="section final-callout">
          <h2 className="section-title">Sponsors and Funding Partners</h2>
          <ul className="tight-list donor-links">
            {donors.map((donor) => (
              <li key={donor.name}>
                {donor.link ? (
                  <a href={donor.link} target="_blank" rel="noopener noreferrer">
                    {donor.name}
                  </a>
                ) : (
                  donor.name
                )}
              </li>
            ))}
          </ul>
          <p>
            Strategic philanthropy, industry collaborations, and clinical trial
            partnerships accelerate translation of multimodal biomarkers into
            care. Visit the{" "}
            <Link to="/partners">partners page</Link> to learn how funding and
            clinical collaborators engage, or connect through the{" "}
            <Link to="/resources">resources portal</Link>.
          </p>
        </section>

      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        donors {
          name
          link
        }
      }
    }
  }
`;
