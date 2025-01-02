import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/app/ui/header";

export const metadata: Metadata = {
  title: "Dynamic Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-zinc-900 font-mono`}>
        <Header />
        <div className="mt-8 px-8 md:px-24">{children}</div>
      </body>
    </html>
  );
}