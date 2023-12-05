import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tasqq App",
  description: "This is a simple task management app",
  icons: {
    icon: "/android-chrome-192x192.png",
    shortcut: "/android-chrome-512x512.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon-32x32.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Header />
        {children}
      </body>
    </html>
  );
}
