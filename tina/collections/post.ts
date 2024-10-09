import type { Collection } from "tinacms";

export const PostCollection: Collection = {
  label: "Posts",
  name: "post",
  path: "content/posts",
  format: "md",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Post Body",
      name: "body",
      isBody: true,
    },
  ],
};
