"use client";

import { ErrorBoundary } from "react-error-boundary";

export default function FormSubmissionErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={FormFallback}>{children}</ErrorBoundary>
  );
}

function FormFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold text-red-500 tracking-tight">
        Something went wrong
      </h2>
      <p className="text-sm text-gray-500">code: {error.message}</p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
