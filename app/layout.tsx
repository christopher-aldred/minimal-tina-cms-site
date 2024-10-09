import "./globals.css";
import { Inter } from "next/font/google";
import { Transition } from "@headlessui/react";
import { FadeAndSlide } from "./animations";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chris's blog template",
  description: "A Next.js app with TinaCMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen font-iaWriterMono bg-[#fff6f6] text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
          <center>
            <Transition as="div" show={true} appear={true}>
              <FadeAndSlide delay="delay-0">
                <header>
                  <div className="max-w-96 py-10 text-left px-4">
                    <h1 className="text-3xl my-4">Chris's blog template</h1>
                    <h2 className="text-2xl text-neutral-500 dark:text-neutral-400">
                      A blog template for you!
                    </h2>
                  </div>
                </header>
              </FadeAndSlide>
              {children}
            </Transition>
          </center>
        </div>
      </body>
    </html>
  );
}
