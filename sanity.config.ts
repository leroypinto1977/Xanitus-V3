import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "default",
  title: "Xanitus CMS",

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Projects")
              .child(S.documentTypeList("project").title("Projects")),
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("post").title("Blog Posts")),
            S.listItem()
              .title("Technologies")
              .child(S.documentTypeList("technology").title("Technologies")),
            S.listItem()
              .title("Categories")
              .child(S.documentTypeList("category").title("Categories")),
            S.listItem()
              .title("Authors")
              .child(S.documentTypeList("author").title("Authors")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
