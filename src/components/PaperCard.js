import * as React from "react";

const statusClass = {
  "Published": "published",
  "In Review": "in-review",
  "Preprint": "preprint",
};

const PaperCard = ({ title, authors, status, summary, link }) => (
  <div className="paper-card">
    <span className={`paper-badge ${statusClass[status] || "preprint"}`}>
      {status}
    </span>
    <h3>{title}</h3>
    <p className="paper-authors">{authors}</p>
    <p className="paper-summary">{summary}</p>
    {link && (
      <a href={link} className="paper-link" target="_blank" rel="noopener noreferrer">
        View paper &rarr;
      </a>
    )}
  </div>
);

export default PaperCard;
