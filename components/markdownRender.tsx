"use client";

import { PageQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { useEffect } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function MarkdownRender(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  let colourArray = [
    "decoration-yellow-400",
    "decoration-red-500",
    "decoration-green-500",
    "decoration-blue-500",
  ];

  // Assigns every underlined word one of four decoration colours randomly
  const randomiseLinkColours = () => {
    let items = document.querySelectorAll("a");
    items.forEach((item) => {
      item.className =
        colourArray[Math.floor(Math.random() * colourArray.length)];
    });
  };

  const highlightPageLink = () => {
    var pageLinks = document.querySelectorAll(
      `a[href='${window.location.pathname}']`
    );
    pageLinks.forEach((pageLink) => {
      pageLink.className =
        "font-iaWriterMonoBold underline decoration-[3px] " +
        colourArray[Math.floor(Math.random() * colourArray.length)];
    });
  };

  // On first load, randomise the link colours and attach event listeners
  useEffect(() => {
    randomiseLinkColours();
    highlightPageLink();
    let items = document.getElementsByTagName("a");
    let triggered = false;
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseenter", () => {
        if (!triggered) {
          randomiseLinkColours();
          highlightPageLink();
          triggered = true;
        }
      });
      items[i].addEventListener("mouseleave", () => {
        triggered = false;
      });
    }
  }, []);

  return (
    <div data-tina-field={tinaField(data.page, "body")}>
      <TinaMarkdown content={data.page.body} />
    </div>
  );
}
