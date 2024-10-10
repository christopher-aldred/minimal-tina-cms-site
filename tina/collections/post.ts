import type { Collection } from "tinacms";

export const PostCollection: Collection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  format: "md",
  defaultItem: () => ({
    title: "New Post",
    added: new Date(),
    tags: [],
  }),
  ui: {
    filename: {
      slugify: (values) => {
        return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
      },
    },
    router: (value) => {
      return `/posts/${value.document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      required: true,
    },
    {
      type: "string",
      label: "Short description",
      name: "shortDescription",
      required: true,
    },
    {
      label: "Added",
      name: "added",
      type: "datetime",
      ui: {
        dateFormat: "MMM DD YYYY",
      },
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
    {
      label: "Updated",
      name: "updated",
      type: "datetime",
      ui: {
        dateFormat: "MMM DD YYYY",
      },
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
      options: [
        {
          value: "technology",
          label: "Technology",
        },
        {
          value: "work",
          label: "Work",
        },
        {
          value: "personal",
          label: "Personal",
        },
        {
          value: "news",
          label: "News",
        },
        {
          value: "blog",
          label: "Blog",
        },
        {
          value: "photography",
          label: "Photography",
        },
        {
          value: "music",
          label: "Music",
        },
        {
          value: "art",
          label: "Art",
        },
      ],
    },
  ],
};
