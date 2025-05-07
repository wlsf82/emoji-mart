import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporterOpts.json"
  },
  e2e: {
    baseUrl: "http://localhost:5173",
    fixturesFolder: false,
    supportFile: false,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    fixturesFolder: false,
  },
});
