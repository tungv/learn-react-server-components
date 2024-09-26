"use client";

export default function FullPageError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 p-12 bg-red-100">
      <h1 className="text-2xl font-bold text-red-500">
        This is a nested error boundary.
      </h1>
      <p>
        The error is: <code className="font-mono">{error.message}</code>
      </p>
      <p>
        This is defined in the{" "}
        <code className="font-mono underline">app/nested-error/error.tsx</code>{" "}
        file.
      </p>
      <p>
        When an error is thrown while rendering this page or any of its
        subpages, this component will be rendered instead.
      </p>
      <p>
        This component has to be a client component because it uses the reset
        function to reset the error state.
      </p>
      <button
        type="button"
        onClick={() => {
          reset();
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Retry
      </button>
    </div>
  );
}
