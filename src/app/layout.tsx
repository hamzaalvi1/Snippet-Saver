import { Poppins } from "@/theme";

import type { Metadata } from "next";
import { Provider } from "@/components";
import { ColorSchemeScript } from "@mantine/core";

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
      <head>
        <ColorSchemeScript />
      </head>
      <body className={Poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
