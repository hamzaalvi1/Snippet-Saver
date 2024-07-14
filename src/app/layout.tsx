import { Poppins } from "@/theme";
import type { Metadata } from "next";

import { Header } from "@/components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Snippet Manager",
  description: "This app is for the practice purpose of next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
