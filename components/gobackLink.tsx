"use client";
import { useRouter } from "next/navigation";
export default function GoBackLink() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <a href="#">← Go back</a>
    </div>
  );
}
