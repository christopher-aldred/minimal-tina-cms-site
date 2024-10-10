import { TransitionChild } from "@headlessui/react";

export const FadeAndSlide = ({ delay, children }) => (
  <TransitionChild
    enter={`transition-all ease-in-out duration-700 ${delay}`}
    enterFrom="opacity-0 translate-y-12"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </TransitionChild>
);
