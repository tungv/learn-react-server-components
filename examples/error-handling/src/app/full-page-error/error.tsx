"use client";

export default function FullPageError() {
  return (
    <div className="flex flex-col gap-4 p-12 bg-red-100">
      <h1 className="text-2xl font-bold text-red-500">
        This is a full page error boundary.
      </h1>
      <p>
        This is defined in the{" "}
        <code className="font-mono underline">
          app/full-page-error/error.tsx
        </code>{" "}
        file.
      </p>
      <p>
        When an error is thrown while rendering this page or any of its
        subpages, this component will be rendered instead.
      </p>
    </div>
  );
}
