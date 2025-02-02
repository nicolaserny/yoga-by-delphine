export function getValueFromEnv(key: string): string | undefined {
  return process.env[key] || Netlify.env.get(key);
}
