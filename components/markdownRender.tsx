"use client";

import { PageQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { useEffect } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import initLinkStyling from "../utils/initLinkStyling";

export function MarkdownRender(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  useEffect(() => {
    initLinkStyling();
  }, []);

  return (
    <div data-tina-field={tinaField(data.page, "body")}>
      <TinaMarkdown content={data.page.body} />
    </div>
  );
}
