"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function GoBackLink() {
  const pathname = usePathname();
  let split = pathname?.split("/");
  const router = useRouter();
  return (
    <>
      {split!.length > 2 && split![1] === "posts" ? (
        <a href={"#"} onClick={() => router.back()}>
          ← Newer
        </a>
      ) : null}
    </>
  );
}
