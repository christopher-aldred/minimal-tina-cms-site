"use client";
import { useEffect } from "react";
import initLinkStyling from "../../utils/initLinkStyling";

export default async function Posts() {
  useEffect(() => {
    initLinkStyling();
  }, []);
  return <h1>Posts</h1>;
}
