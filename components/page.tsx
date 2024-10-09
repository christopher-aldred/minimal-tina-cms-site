"use client";

import Link from "next/link";
import { PageQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { useEffect } from "react";
import { FadeAndSlide } from "../app/animations";

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
          <Link href="#">posts</Link>
          <Link href="#">portfolio</Link>
          <Link href="#">github</Link>
          <Link href="#">linkedin</Link>
          <Link href="#">etc</Link>
        </nav>
        <main id="page" className="max-w-[600px] text-left px-4">
          <p>
            Welcome to this blog template by me{" "}
            <u>
              <Link href="#">chris</Link>
            </u>
            !
            <br />
            (based on{" "}
            <Link href="#">
              <u id="test">this</u>
            </Link>{" "}
            astro project by @cassidoo)
            <br />
            <br />
            It’s using Next.js, tailwind and TinaCMS. You can clone it on GitHub
            to use it for yourself, and see how it works! I would love if you
            told me when you do use it, I love seeing variations on it!
            <br />
            <br />
            The tags at the bottom of the page are dynamically generated. The
            more tags you use, the more tags are added to the list! Posts are
            simple markdown files.
            <br />
            <br />
            You should also check out my newsletter, or my word game Jumblie, or
            my{" "}
            <u>
              <Link href="#">GitHub profile</Link>
            </u>
            . Or don’t. Follow your dreams. Enjoy!
          </p>
        </main>
      </div>
    </FadeAndSlide>
  );
}
