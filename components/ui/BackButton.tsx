"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="btn btn--l btn-default"
      onClick={() => router.back()}
    >
      Back
    </button>
  );
}
