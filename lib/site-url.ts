export const PRODUCTION_SITE_URL = "https://joneshappyhousekeepers.netlify.app";

export function getSiteUrl() {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.URL?.trim() ||
    process.env.DEPLOY_PRIME_URL?.trim();

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return PRODUCTION_SITE_URL;
}
