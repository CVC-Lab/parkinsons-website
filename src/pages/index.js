import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import "../components/style.css";

export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">Home</h1>

        <section className="section">
          <div className="text-block">
          <h2 className="section-title">Overview</h2>
            <p>
              Parkinson's disease is a complex neurological disorder, marked by
              a wide array of symptoms ranging from motor impairments to
              cognitive changes. Our research aims to enhance early biomarker
              discovery for Parkinson's disease through analyzing and correlating
              imaging, clinical, and biological data.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Early Biomarker Discovery Pipeline</h2>
          <div className="image-container">
          <StaticImage
            src="../images/discovery.png"
            alt="Early Biomarker Discovery Pipeline"
            placeholder="blurred"
          />
          </div>
        </section>

        <section className="section">
          <div className="content-flex">
            <div className="text-block">
              <h2 className="section-title">Early Detection Primary Data</h2>
              <p>The primary data we investigated for early detection was:</p>
              <ol>
                <li>Variables from curated data sheet (survey results)</li>
                <li>REM Sleep data (sleep metrics)</li>
                <li>Biologic data including CSF (Project 171)</li>
                <li>Imaging data (T1 MRI, DaTSCAN, DTI)</li>
                <li>
                  UPDRS III for state representation (Part III: Motor
                  examination: 18 items. Score range: 0–132, 32 and below is
                  mild, 59 and above is severe.)
                </li>
              </ol>
            </div>
            <div className="image-container">
              <StaticImage
                src="../images/primary_data.png"
                alt="Table of primary data used in early detection"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="content-flex">
            <div className="text-block">
              <h2 className="section-title">
                Biomarker Agent Training with DaTSCAN and T1 MRI
              </h2>
              <p>
                For the identification of imaging patterns we started out
                investigating T1 - MRI data
              </p>
              <ol>
                <li>
                  T1 - MRI highlights anatomy, providing crisp structural
                  delineation. Volumes from T1- MRI for 112 prespecified regions
                  were extracted for each patient
                </li>
                <li>
                  DaTSCAN images visualize striatal dopamine transporter
                  intensity; commonly known to be a biomarker for PD. We utilize
                  it to make improvement on SBR ratio extraction.
                </li>
              </ol>
            </div>
            <div className="image-container">
              <StaticImage
                src="../images/brain_diagram.png"
                alt="Diagram pointing to different sections of the brain"
                placeholder="blurred"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="content-flex">
            <div className="text-block">
              <h2 className="section-title">
                Biomarker Agent Training with DTI, T2 MRI, and fMRI
              </h2>
              <ol>
                <li>
                  DTI images detect the diffusion of water molecules in the
                  white matter of the brain. We begin by extracting mean
                  diffusivity and fractional anisotropy from 112 regions
                  <ul>
                    <li>Substantia Nigra is the ROI based on literature</li>
                    <li>Will be investigated when T2 MRI is integrated</li>
                  </ul>
                </li>
                <li>
                  This will eventually branch out into combining MRI with other
                  imaging types such as T2-MRI and fMRI
                </li>
              </ol>
            </div>
            <div className="image-container">
              <StaticImage
                src="../images/dti_images.png"
                alt="DTI images with overlays"
                placeholder="blurred"
              />
            </div>
          </div>
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
