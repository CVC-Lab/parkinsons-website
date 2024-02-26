import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "../components/style.css";


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
        <h1 className="page-title">Donors</h1>
        <h2>A Heartfelt Thank You to Our Generous Donors:</h2>
        <ul className="donor-links">
          {donors.map((donor, index) => (
            <li key={index}>
              <a href={donor.link} target="_blank" rel="noopener noreferrer">{donor.name}</a>
            </li>
          ))}
        </ul>
        <div className="donor-links">
          <h2>Interested in Supporting Our Research?</h2>
          <p>We welcome your support to further our research on Parkinson’s disease. By contributing, you're making a valuable impact. Please consider visiting the 
          <Link to="https://oden.utexas.edu/connect/donate/"> UT donors' office and dedicating your support to CVC.</Link></p>
        </div>
      </Layout>
    )
  }
