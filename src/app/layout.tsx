import { nunito } from "@/theme";

import type { Metadata } from "next";
import { Provider } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "Snippet Manager",
  description: "This app is for the practice purpose of next js 15",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
