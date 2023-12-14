let handleRequestImpl;
if (process.env.NODE_ENV === "development") {
  handleRequestImpl = require("./entry.dev.server.tsx").default;
} else {
  handleRequestImpl = require("./entry.prod.server.tsx").default;
}

export default handleRequestImpl;
