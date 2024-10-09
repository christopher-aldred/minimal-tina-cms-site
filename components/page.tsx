"use client";

import Link from "next/link";
import { PageQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { useEffect } from "react";
import { FadeAndSlide } from "../app/animations";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  // Assigns every underlined word one of four decoration colours randomly
  const randomiseLinkColours = () => {
    let colourArray = [
      "decoration-yellow-400",
      "decoration-red-500",
      "decoration-green-500",
      "decoration-blue-500",
    ];
    let items = document.getElementsByTagName("a");
    for (var i = 0; i < items.length; i++) {
      items[i]!.className = ` ${
        colourArray[Math.floor(Math.random() * colourArray.length)]
      }`;
    }
  };

  // On first load, randomise the link colours and attach event listeners
  useEffect(() => {
    randomiseLinkColours();
    let items = document.getElementsByTagName("a");
    let triggered = false;
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("mouseenter", () => {
        if (!triggered) {
          randomiseLinkColours();
          triggered = true;
        }
      });
      items[i].addEventListener("mouseleave", () => {
        triggered = false;
      });
    }
  }, []);

  return (
    <FadeAndSlide delay="delay-100">
      <div>
        <nav className="flex space-x-6 justify-center mb-10">
          <b>
            <u>
              <Link href="#">home</Link>
            </u>
          </b>
          <Link href="#">contact</Link>
          <Link href="#">portfolio</Link>
          <Link href="#">github</Link>
          <Link href="#">linkedin</Link>
          <Link href="#">etc</Link>
        </nav>
        <main id="page" className="max-w-[650px] text-left px-4">
          <div data-tina-field={tinaField(data.page, "body")}>
            <TinaMarkdown content={data.page.body} />
          </div>
        </main>
      </div>
    </FadeAndSlide>
  );
}
