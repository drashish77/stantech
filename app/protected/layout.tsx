"use client";

import { ReactNode } from "react";
import AuthGuard from "@/app/protected/_components/AuthGuard";
import { useUser } from "@/utils/auth";
import Loader from "@/components/Loader";

export default function Layout({ children }: { children: ReactNode }) {
  const user = useUser();

  if (user === false) return <Loader />;
  if (!user) return <AuthGuard />;
  return children;
}
