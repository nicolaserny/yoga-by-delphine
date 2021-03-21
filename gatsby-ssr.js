const React = require("react");

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === "production") {
    return setHeadComponents([
      <script
        key="plausible-script"
        async
        defer
        data-domain="yogabydelphine.com"
        src="https://plausible.io/js/plausible.js"
      ></script>,
      <script
        key="plausible-custom-events"
        dangerouslySetInnerHTML={{
          __html: `
        window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) } `,
        }}
      />,
    ]);
  }
};
