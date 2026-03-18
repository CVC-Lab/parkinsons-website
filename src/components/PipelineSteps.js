import * as React from "react";

const steps = [
  {
    number: 1,
    title: "Input data",
    description: "Imaging, wearable, clinical, and biospecimen features from the patient encounter.",
  },
  {
    number: 2,
    title: "Subgroup placement",
    description: "The patient is mapped into a population-derived subgroup that shares biology and trajectory.",
  },
  {
    number: 3,
    title: "Similar patients",
    description: "Nearest-neighbor lookup surfaces comparable cases and their longitudinal outcomes.",
  },
  {
    number: 4,
    title: "Decision support",
    description: "Monitoring priorities, pathway burden, and intervention context presented to the clinician.",
  },
];

const PipelineSteps = () => (
  <div className="pipeline-steps-container">
    {steps.map(step => (
      <div key={step.number} className="pipeline-step">
        <span className="pipeline-step-number">{step.number}</span>
        <h4>{step.title}</h4>
        <p>{step.description}</p>
      </div>
    ))}
  </div>
);

export default PipelineSteps;
