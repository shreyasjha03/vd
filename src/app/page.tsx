"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home"); // Redirects to the home page automatically
  }, [router]);

  return null; // Nothing to render since we are redirecting
}
