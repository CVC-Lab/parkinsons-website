const React = require("react");

const SITE_TITLE = "Actionable Intelligence For Combating Parkinson’s";

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("title", { key: "site-title" }, SITE_TITLE),
  ]);
};
