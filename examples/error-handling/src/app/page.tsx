import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-12">
      <h1 className="text-2xl font-bold">Error handling example</h1>

      <Link className="text-primary underline" href="/full-page-error">
        Go to error full page
      </Link>

      <Link
        className="text-primary underline"
        href="/nested-error/some-id/deeply/nested"
      >
        Go to nested error
      </Link>
    </main>
  );
}
