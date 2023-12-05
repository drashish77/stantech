import Search from "@/components/Search";
import TaskForm from "@/components/addTask/Creation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Add | Tasqq App",
  description: "This page is for creating new task",
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
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-5">
      <TaskForm />
    </main>
  );
}
