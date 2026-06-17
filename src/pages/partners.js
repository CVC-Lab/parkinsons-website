import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../components/style.css";

export const query = graphql`
  query donorQuery {
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

const steps = [
  {
    t: "Scoping call",
    d: "What your cohort covers, what questions matter to your clinic, and what is feasible.",
  },
  {
    t: "Agreements",
    d: "A signed Data Use Agreement, and the IRB pathway for your institution: we establish an IRB reliance agreement or defer to your IRB, as you prefer.",
  },
  {
    t: "De-identification at your site",
    d: "Identifiable data stays with you. You share only de-identified records (HIPAA Safe Harbor or Expert Determination, your choice). Because no PHI is transferred, AI4PD acts as neither a Covered Entity nor a Business Associate, and no BAA is required. If a project ever needs limited identifiers, that is scoped and signed separately before anything moves.",
  },
  {
    t: "Joint harmonization",
    d: "We map your source schema and build a de-identified longitudinal timeline together, with audit trails. Expect roughly a few days of your data manager's time for the initial mapping; after that, records flow from your existing systems with no new clinical workflow.",
  },
  {
    t: "Clinician review",
    d: "Your neurologists review the outputs.",
  },
  {
    t: "Validation and follow-up",
    d: "Cross-site results are reported back to you; the timeline and models update as new visits arrive.",
  },
];

const terms = [
  ["You retain ownership.", "Participating clinicians and sites keep ownership of their data. Participating does not transfer it."],
  ["Withdraw and delete.", "You may withdraw at any time. On withdrawal we delete your data and any single-site models derived from it."],
  ["No secondary use.", "We use your data only for the validation work scoped in the DUA. No transfer to third parties, and no commercial use of cohort-derived models, without your written consent."],
  ["Publication.", "Publication terms and co-authorship are defined in the agreement."],
  ["Access on request.", "Access to your cohort's data is restricted to a named project team and logged. The access log is available to your institution on request."],
];

const contributes = [
  ["Longitudinal clinical records", "EHR, medication histories, and follow-up outcomes over time."],
  ["Imaging and biomarkers", "Structural and functional imaging and available biomarker panels, contributed as acquired."],
  ["Clinical scores per visit", "MDS-UPDRS and related motor and non-motor assessments on the visit cadence."],
  ["Sensor and wearable streams", "Continuous motor data where collected."],
  ["DBS / LFP records", "Deep-brain-stimulation programming and local-field-potential data at sites where available."],
];

const governance = [
  ["Where data lives.", "De-identified data resides on UT Austin secure computing infrastructure approved for restricted data, not on general-purpose HPC or researcher laptops."],
  ["Legal instrument.", "Transfer is governed by a signed Data Use Agreement covering de-identified records. We name the UT Austin IRB of record and the responsible data custodian in the agreement."],
  ["EU and other jurisdictions.", "For sites subject to GDPR, such as EU collaborators, transfer is handled either through fully anonymized data outside GDPR scope or under appropriate safeguards (for example, Standard Contractual Clauses), specified per site before any data moves."],
  ["Constrained sharing.", "The default is data-minimizing transfer of de-identified records to UT Austin infrastructure. For sites that require records not to leave their walls, we will scope a no-egress alternative."],
  ["Responsible use.", "Outputs are decision support only and go to the physician first. External domain review, including DBS where applicable, and responsible-use documentation are part of the engagement."],
];

export default function PartnerPage({ data }) {
  const donors = data.site.siteMetadata.donors;

  return (
    <Layout>
      <div className="page-container home-page compact-page-shell">
        <section className="hero-section">
          <div className="hero-text">
            <p className="initiative-eyebrow">Partner with AI4PD</p>
            <h1>Validate a Parkinson's progression model on your cohort, and keep the cross-site evidence it produces</h1>
            <p>
              AI4PD is building a clinician-facing Parkinson's digital twin: tools that
              estimate a patient's current state and forecast progression, each returned to
              the physician with explicit uncertainty. The modeling is tractable. The
              bottleneck is assembling and validating multi-institution longitudinal evidence
              across sites and populations, which is what we need cohort partners for.
              Identifiable data never leaves your institution; you receive only de-identified
              records, under a signed agreement, on UT Austin secure infrastructure. Your site
              keeps ownership, and you keep the validation evidence your cohort helps produce.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">How engagement works</h2>
          <ol className="tight-list prose ordered-steps">
            {steps.map((s) => (
              <li key={s.t}>
                <strong>{s.t}.</strong> {s.d}
              </li>
            ))}
          </ol>
        </section>

        <section className="section">
          <h2 className="section-title">Your data, your terms</h2>
          <dl className="clinician-outputs">
            {terms.map(([t, d]) => (
              <React.Fragment key={t}>
                <dt>{t}</dt>
                <dd>{d}</dd>
              </React.Fragment>
            ))}
          </dl>
        </section>

        <section className="section">
          <h2 className="section-title">What a clinical partner contributes</h2>
          <p className="text-block">
            No site is asked to hand over a finished, cleaned dataset. Harmonization is done
            jointly, and each data stream arrives on whatever clock your clinic already
            generates it.
          </p>
          <ul className="tight-list prose">
            {contributes.map(([t, d]) => (
              <li key={t}>
                <strong>{t}</strong> — {d}
              </li>
            ))}
          </ul>
          <p className="text-block">The timeline grows at the pace your clinic already works.</p>
        </section>

        <section className="section">
          <h2 className="section-title">What a partner gets</h2>

          <h3>Decision support, returned to the physician first</h3>
          <p className="text-block">
            The core target is 12-month progression forecasting against named endpoints
            (MDS-UPDRS-III, time-to-motor-fluctuation), each output returned with explicit
            uncertainty and named evidence gaps. This is the capability your cohort would help
            validate; it is in development and not yet prospectively validated, and we say so
            on every output.
          </p>
          <p className="text-block">
            Around that target, the collaboration aims to produce: current-state estimation,
            differential-diagnosis and levodopa-response support, DBS programming support where
            applicable, and ranked therapy and monitoring plans. Every output is
            human-in-the-loop decision support, returned to the physician. The system never
            diagnoses or prescribes autonomously.
          </p>

          <h3>Validation evidence your cohort produced</h3>
          <ul className="tight-list prose">
            <li>
              <strong>Cross-site results.</strong> How the model performs on a cohort like
              yours, including where it fails.
            </li>
            <li>
              <strong>Calibration you can check.</strong> Whether its confidence is honest:
              when it says it is 80% sure, is it right about 80% of the time. Methods detail
              (baseline comparisons and ablations) is in the validation report.
            </li>
          </ul>

          <h3>A harmonized, de-identified patient timeline</h3>
          <ul className="tight-list prose">
            <li>Schema mapping co-developed from your source systems.</li>
            <li>Audit trails over the de-identified longitudinal timeline.</li>
            <li>A reusable asset for your own downstream research, on the use terms above.</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Governance, stated honestly</h2>
          <dl className="clinician-outputs">
            {governance.map(([t, d]) => (
              <React.Fragment key={t}>
                <dt>{t}</dt>
                <dd>{d}</dd>
              </React.Fragment>
            ))}
          </dl>
        </section>

        <section className="section">
          <h2 className="section-title">Funding partners</h2>
          <ul className="tight-list">
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
        </section>

        <section className="section">
          <h2 className="section-title">Infrastructure partners</h2>
          <div className="dense-section two-column">
            <article className="dense-brief">
              <h3>Oden Institute for Computational Engineering and Sciences</h3>
              <p>Shared compute and administrative support for cross-campus, restricted-data deployments.</p>
            </article>
            <article className="dense-brief">
              <h3>Texas Advanced Computing Center (TACC)</h3>
              <p>High-performance GPU clusters for large-scale modeling and validation.</p>
              <p>
                <a
                  href="https://www.tacc.utexas.edu/use-tacc/allocations/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </p>
            </article>
          </div>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">How to start</h2>
          <p>
            For clinical-cohort, data-sharing, and validation partnerships, write to the PI
            directly: <strong>Prof. Chandrajit Bajaj</strong> (Principal Investigator) —{" "}
            <a href="mailto:bajaj@cs.utexas.edu">bajaj@cs.utexas.edu</a> (
            <a href="https://www.cs.utexas.edu/~bajaj/" target="_blank" rel="noopener noreferrer">
              faculty profile
            </a>
            ). For institutional or partnership inquiries, use the{" "}
            <a href="https://www.oden.utexas.edu/contact/" target="_blank" rel="noopener noreferrer">
              Oden Institute contact portal
            </a>
            .
          </p>
          <p className="text-block">
            To discuss philanthropic support, the{" "}
            <a
              href="https://give.utexas.edu/?utm_source=microsite&utm_medium=pages"
              target="_blank"
              rel="noopener noreferrer"
            >
              UT Austin giving page
            </a>{" "}
            is here.
          </p>
        </section>
      </div>
    </Layout>
  );
}
