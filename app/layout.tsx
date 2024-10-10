import "./globals.css";
import { Inter } from "next/font/google";
import { Transition } from "@headlessui/react";
import { FadeAndSlide } from "./animations";
const inter = Inter({ subsets: ["latin"] });
import { client } from "../tina/__generated__/databaseClient";
import Link from "next/link";

export const metadata = {
  title: "Chris's blog template",
  description: "A Next.js app with TinaCMS",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pagesResponse = await client.queries.pageConnection();
  const pages = pagesResponse!.data!.pageConnection!.edges!.map((page) => {
    return { slug: page!.node!._sys.filename };
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-w-screen font-iaWriterMono bg-[#fff6f6] text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 overflow-hidden mb-1">
          <center>
            <Transition
              className="min-h-screen flex flex-col"
              as="div"
              show={true}
              appear={true}
            >
              <FadeAndSlide delay="delay-0">
                <header>
                  <div className="max-w-96 pt-10 text-left px-4">
                    <h1 className="text-3xl my-4">Chris's blog template</h1>
                    <h2 className="text-2xl text-neutral-500 dark:text-neutral-400">
                      A blog template for you!
                    </h2>
                  </div>
                </header>
              </FadeAndSlide>
              <FadeAndSlide delay="delay-100">
                <div className="flex-1">
                  <nav className="backdrop-blur-md flex space-x-6 justify-center my-6 sticky top-0 bg-[#fff6f6]/50 dark:bg-neutral-800/50 z-10 py-4">
                    <Link href="/">home</Link>
                    <Link id="nav-posts-link" href="/posts">
                      posts
                    </Link>
                    {pages.map((page) => {
                      if (page.slug === "home") return null;
                      return (
                        <Link key={page.slug} href={`/page/${page.slug}`}>
                          {page.slug}
                        </Link>
                      );
                    })}
                  </nav>
                  <main id="page" className="max-w-[650px] text-left px-4">
                    {children}
                  </main>
                  <footer className="text-xs py-10 sticky top-[100vh]">
                    {"© 2024 Chris Aldred. "}
                    <Link href="https://github.com/christopher-aldred/minimal-tina-cms-site">
                      This site is open source
                    </Link>
                    {"! <3"}
                  </footer>
                </div>
              </FadeAndSlide>
            </Transition>
          </center>
        </div>
      </body>
    </html>
  );
}
