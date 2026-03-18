import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Header from "./header";
import oden from '../images/oden.png';
import "./style.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  const { menuLinks, title } = data.site.siteMetadata;

  return (
    <>
      <Header
        siteTitle={title}
        menuLinks={menuLinks}
      />
      <div className="content-container">
        {children}
      </div>
      <footer>
        <div className="footer-inner">
          <div className="footer-col">
            <img src={oden} alt="Oden Institute Logo" className="footer-logo" />
            <p>
              A research program at the Oden Institute for Computational Engineering
              and Sciences, The University of Texas at Austin.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/clinician-workflow">Clinician Workflow</Link>
            <Link to="/thrusts">Domain Thrusts</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/team">Team</Link>
            <Link to="/resources">Resources</Link>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://cvc-lab.github.io/">&larr; Back to CVC Projects</a>
            <a href="https://www.oden.utexas.edu">Oden Institute</a>
            <a href="mailto:bajaj@cs.utexas.edu">Contact: Prof. Bajaj</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Computational Visualization Center, Oden Institute, UT Austin
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
