import * as React from "react";
import { Link } from "gatsby";

const statusClass = {
  "Published": "published",
  "In Review": "in-review",
  "Preprint": "preprint",
};

const PaperCard = ({ title, authors, status, summary, link, detailsLink }) => (
  <div className="paper-card">
    <span className={`paper-badge ${statusClass[status] || "preprint"}`}>
      {status}
    </span>
    <h3>{title}</h3>
    <p className="paper-authors">{authors}</p>
    <p className="paper-summary">{summary}</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {detailsLink && (
        <Link to={detailsLink} className="paper-link">
          View details &rarr;
        </Link>
      )}
      {link && (
        <a href={link} className="paper-link" target="_blank" rel="noopener noreferrer">
          View paper &rarr;
        </a>
      )}
    </div>
  </div>
);

export default PaperCard;
