"use client";

import { PageQuery, PostQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";
import { notFound } from "next/navigation";

export function PostRender(props: {
  data: PostQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  if (data === undefined || data === null) return notFound();
  return (
    <>
      <h1 data-tina-field={tinaField(data?.post, "title")}>
        {data?.post.title}
      </h1>
      <div
        data-tina-field={tinaField(data?.post, "added")}
        className="text-sm text-neutral-500 italic py-4"
      >
        {new Date(data?.post.added).toDateString()}
      </div>
      <div className="-my-2 text-sm">
        {data?.post?.tags?.map((tag) => (
          <span className="mr-4">
            <Link href={`/tag/${tag}`}>{`#${tag}`}</Link>
          </span>
        ))}
      </div>
      <br />
      <hr className="border-neutral-950 dark:border-neutral-100 mb-4" />
      <div data-tina-field={tinaField(data?.post, "body")}>
        <TinaMarkdown content={data?.post.body} />
      </div>
    </>
  );
}
