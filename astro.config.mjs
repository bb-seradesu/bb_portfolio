import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.GITHUB_ACTIONS === "true" && repository ? `/${repository}/` : "/";

export default defineConfig({
  base,
  site: "https://example.github.io",
  output: "static"
});
