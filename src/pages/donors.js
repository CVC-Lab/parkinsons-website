import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query donorQuery {
    site {
      siteMetadata {
        title
        description
        donors {
          name
          link
        }
      }
    }
  }
`;

export default function DonorsPage({ data }) {
  const donors = data.site.siteMetadata.donors;

  return (
    <Layout>
      <section className="section">
        <h1 className="page-title">Donors</h1>
        <h2 className="section-title">A Heartfelt Thank You to Our Generous Donors:</h2>
        <ul>
          {donors.map((donor, index) => (
            <li className="donor-links" key={index}>
              <a href={donor.link} target="_blank" rel="noopener noreferrer">
                {donor.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="section">
          <h2 className="section-title">Interested in Supporting Our Research?</h2>
          <p className="text-block">
            We invite you to become a key part of a community dedicated 
            to furthering research for Parkinson's disease.
            Contribute now by 
            <Link to="https://give.utexas.edu/?utm_source=microsite&utm_medium=pages">
              {" "}
              dedicating your support to CVC.
            </Link>
            
          </p>
      </section>
      <div>
          <StaticImage
            src="../images/tagline.png"
            alt="What starts here starts with you"
            placeholder="blurred"
          />
          </div>
    </Layout>
  );
}
