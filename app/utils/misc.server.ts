export function getSiteUrl() {
  const defaultUrl = "https://yogabydelphine.com";
  const context = process.env.CONTEXT || "production";
  console.log("context", context);
  if (["deploy-preview", "branch-deploy"].includes(context)) {
    const url = process.env.DEPLOY_PRIME_URL || defaultUrl;
    console.log("url", url);
    return url;
  }
  if (context === "dev") {
    return "http://localhost:3000";
  }
  const url = process.env.URL || defaultUrl;
  console.log("url", url);
  return url;
}
