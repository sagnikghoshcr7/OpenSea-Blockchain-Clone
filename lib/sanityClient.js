import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "9dq6lnex",
  dataset: "production",
  apiVersion: "2021-03-25",
  token: process.env.NEXT_PUBLIC_SANITY_CLIENT,
  useCdn: false,
});