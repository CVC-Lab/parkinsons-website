import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import "katex/dist/katex.min.css"
import "../components/style.css";
export default function ProjectTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="page-container">
        <article className="markdown-page">
          <h1 className="page-title">{frontmatter.title}</h1>
          <div className="text-block" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
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
