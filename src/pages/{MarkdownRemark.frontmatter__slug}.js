import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import "katex/dist/katex.min.css"
import "../components/style.css";
export default function ProjectTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div>
        <div>
          <div className="text-block" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        # date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;