import type { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      type: "rich-text",
      label: "Post Body",
      name: "body",
      isBody: true,
    },
  ],
};
