import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Link from "next/link";

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
        <Theme>
          <aside>
            <nav className="bg-slate-200 p-4">
              <ol className="flex flex-row gap-2">
                <header>
                  <Link href="/">
                    <h3 className="text-lg font-bold">Error Handling</h3>
                  </Link>
                </header>
                <li>
                  <Link
                    className="text-primary underline"
                    href="/full-page-error"
                  >
                    error full page
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary underline"
                    href="/nested-error/some-id/deeply/nested"
                  >
                    nested error
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-primary underline"
                    href="/component-error"
                  >
                    component error
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-primary underline"
                    href="/form-submission-error/simple"
                  >
                    form submission error
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-primary underline"
                    href="/form-submission-error/advanced"
                  >
                    advanced form submission error
                  </Link>
                </li>
              </ol>
            </nav>
          </aside>
          {children}
        </Theme>
      </body>
    </html>
  );
}
