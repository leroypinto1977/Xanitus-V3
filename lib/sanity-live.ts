import { defineLive } from "next-sanity";
import { client } from "./sanity";

// Live content setup - only for use in React Server Components
export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: "vX",
  }),
});
