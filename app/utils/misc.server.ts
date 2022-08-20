export function getSiteUrl() {
  const defaultUrl = "https://yogabydelphine.com";
  // console.log("context", process.env.CONTEXT_ENV);
  // if (process.env.CONTEXT === "preview") {
  //   const url = process.env.DEPLOY_PRIME_URL || process.env.URL || defaultUrl;
  //   console.log("url", url);
  //   return url;
  // }
  // if (process.env.CONTEXT === "dev") {
  //   return "http://localhost:3000";
  // }
  // const url = process.env.URL || defaultUrl;
  const url = process.env.DEPLOY_PRIME_URL || process.env.URL || defaultUrl;
  console.log("url", url);
  return url;
}
