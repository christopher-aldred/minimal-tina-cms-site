"use client";

import React, { useEffect } from "react";

export const colourArray = [
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

const highlightCurrentPageLink = () => {
  var pageLinks = document.querySelectorAll(
    `a[href='${window.location.pathname}']`
  );
  pageLinks.forEach((pageLink) => {
    pageLink.className =
      "font-iaWriterMonoBold underline decoration-[3px] " +
      colourArray[Math.floor(Math.random() * colourArray.length)];
  });
};

const initLinkStyling = () => {
  randomiseLinkColours();
  highlightCurrentPageLink();
  let items = document.getElementsByTagName("a");
  let triggered = false;
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseenter", () => {
      if (!triggered) {
        randomiseLinkColours();
        highlightCurrentPageLink();
        triggered = true;
      }
    });
    items[i].addEventListener("mouseleave", () => {
      triggered = false;
    });
  }
};

export default function LinkColourer() {
  useEffect(() => {
    initLinkStyling();
  }, [window.location.href]);
  return <div></div>;
}
