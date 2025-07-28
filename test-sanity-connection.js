import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "6cfcbych",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

// Test connection
client
  .fetch('*[_type == "post"][0..2]')
  .then((result) => {
    console.log("✅ Sanity connection successful:", result);
  })
  .catch((error) => {
    console.error("❌ Sanity connection failed:", error);
  });
