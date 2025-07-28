// Test file to verify Sanity configuration
const config = require("./sanity.config.ts");

console.log("Sanity config loaded:", {
  projectId: config.default.projectId,
  dataset: config.default.dataset,
  plugins: config.default.plugins?.map((p) => p.name || "unnamed plugin"),
  hasSchema: !!config.default.schema,
  schemaTypes: config.default.schema?.types?.length || 0,
});
