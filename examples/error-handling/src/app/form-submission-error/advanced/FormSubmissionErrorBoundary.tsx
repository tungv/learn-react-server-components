"use client";

import { createContext, useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ctx = createContext<string>("");

export function FormSubmissionErrorBoundary({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <FormFallback
          error={error}
          resetErrorBoundary={resetErrorBoundary}
          serverContent={fallback}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

function FormFallback({
  error,
  serverContent,
  resetErrorBoundary,
}: {
  error: Error;
  serverContent: React.ReactNode;
  resetErrorBoundary: () => void;
}) {
  return (
    <ctx.Provider value={error.message}>
      <form action={() => resetErrorBoundary()}>{serverContent}</form>
    </ctx.Provider>
  );
}

export function ErrorMessage({
  errorName,
  children,
}: {
  errorName: string;
  children: React.ReactNode;
}) {
  const errorMessage = useContext(ctx);
  if (errorMessage !== errorName) {
    return null;
  }
  return <div>{children}</div>;
}
