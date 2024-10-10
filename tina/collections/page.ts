import type { Collection } from "tinacms";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "content/pages",
  format: "mdx",
  ui: {
    filename: {
      slugify: (values) => {
        return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
      },
    },
    router: (value) => {
      if (value.document._sys.title === "home") return "/";
      return `/page/${value.document._sys.filename}`;
    },
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
