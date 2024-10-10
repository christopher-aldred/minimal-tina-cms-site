"use client";

import { PageQuery, PostQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { useEffect } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import initLinkStyling from "../utils/initLinkStyling";

export function PostRender(props: {
  data: PostQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  useEffect(() => {
    initLinkStyling();
  }, []);

  return (
    <>
      <h1 data-tina-field={tinaField(data.post, "title")}>{data.post.title}</h1>
      <div
        data-tina-field={tinaField(data.post, "added")}
        className="text-sm text-neutral-500 italic py-4"
      >
        {new Date(data.post.added).toDateString()}
      </div>
      <hr className="border-neutral-950 mb-4 " />
      <div data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown content={data.post.body} />
      </div>
    </>
  );
}
