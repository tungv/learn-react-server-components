import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Error Handling - learn react server component by @tungv",
  description: "An example of error handling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
