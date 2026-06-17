const React = require("react");

const SITE_TITLE = "AI4PD — Mechanism-Grounded AI for Parkinson's Care";

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("title", { key: "site-title" }, SITE_TITLE),
  ]);
};
