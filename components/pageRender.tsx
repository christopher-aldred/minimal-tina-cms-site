"use client";

import { PageQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { notFound } from "next/navigation";

export function PageRender(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  if (data === undefined || data === null) return notFound();

  return (
    <div data-tina-field={tinaField(data?.page, "body")}>
      <TinaMarkdown content={data?.page.body} />
    </div>
  );
}
