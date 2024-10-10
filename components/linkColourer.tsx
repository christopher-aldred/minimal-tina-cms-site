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

// Highlights the current page link in the nav bar
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

//Conditionaly highlight posts link if in a post
const conditionallyHighlightPostsLink = () => {
  if (window.location.pathname.includes("/posts")) {
    var pageLinks = document.querySelectorAll(`a[href='/posts']`);
    pageLinks.forEach((pageLink) => {
      pageLink.className =
        "font-iaWriterMonoBold underline decoration-[3px] " +
        colourArray[Math.floor(Math.random() * colourArray.length)];
    });
  }
};

// Runs JS styling on page load and attaches event listeners to re-highlight links on hover
const initLinkStyling = () => {
  randomiseLinkColours();
  highlightCurrentPageLink();
  conditionallyHighlightPostsLink();
  let items = document.getElementsByTagName("a");
  let triggered = false;
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseenter", () => {
      if (!triggered) {
        randomiseLinkColours();
        highlightCurrentPageLink();
        conditionallyHighlightPostsLink();
        triggered = true;
      }
    });
    items[i].addEventListener("mouseleave", () => {
      triggered = false;
    });
  }
};

// Client side component that can be added into any page
export default function LinkColourer() {
  useEffect(() => {
    initLinkStyling();
  }, []);
  return <div></div>;
}
