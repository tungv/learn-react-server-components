import NormalComponent from "./NormalComponent";
import ComponentThatCauseError from "./ComponentThatCauseError";
import { ErrorBoundary } from "react-error-boundary";
import Placeholder from "./Placeholder";

export default function ListItemError() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold">
        2. Error Boundary cover only the ComponentThatCauseError component
      </h2>
      <p className="mb-4">
        The error boundary will catch the error from the ComponentThatCauseError
        and render the fallback UI for the entire list.
      </p>

      <p className="mb-4">
        <pre className="bg-gray-100 p-4 rounded-md">
          {`<ol>
  <header>
    <h3>List of components</h3>
  </header>
  <li>
    <ErrorBoundary fallback={<ListItemErrorFallback />}>
      <NormalComponent />
    </ErrorBoundary>
  </li>
  <li>
    <ErrorBoundary fallback={<ListItemErrorFallback />}>
      <NormalComponent />
    </ErrorBoundary>
  </li>
  <li>
    <ErrorBoundary fallback={<ListItemErrorFallback />}>
      <ComponentThatCauseError />
    </ErrorBoundary>
  </li>
  <li>
    <ErrorBoundary fallback={<ListItemErrorFallback />}>
      <NormalComponent />
    </ErrorBoundary>
  </li>
</ol>`}
        </pre>
      </p>

      <div>
        <ol className="list-decimal list-outside divide-y divide-gray-200">
          <header>
            <h3>List of components</h3>
          </header>
          <li>
            <ErrorBoundary fallback={<ListItemErrorFallback />}>
              <NormalComponent />
            </ErrorBoundary>
          </li>
          <li>
            <ErrorBoundary fallback={<ListItemErrorFallback />}>
              <NormalComponent />
            </ErrorBoundary>
          </li>
          <li>
            <ErrorBoundary fallback={<ListItemErrorFallback />}>
              <ComponentThatCauseError />
            </ErrorBoundary>
          </li>
          <li>
            <ErrorBoundary fallback={<ListItemErrorFallback />}>
              <NormalComponent />
            </ErrorBoundary>
          </li>
        </ol>
      </div>
    </div>
  );
}

function ListItemErrorFallback() {
  return (
    <div className="bg-red-100 p-2 w-full">
      <Placeholder />
    </div>
  );
}
