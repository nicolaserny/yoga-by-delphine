export function getValueFromEnv(key: string): string | undefined {
  return Netlify.env.get(key) ?? process.env[key];
}
