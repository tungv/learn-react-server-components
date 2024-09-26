import { ErrorBoundary } from "react-error-boundary";
import NormalComponent from "./NormalComponent";
import ComponentThatCauseError from "./ComponentThatCauseError";
import Placeholder from "./Placeholder";

export default function WholeListError() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-bold">
        1. Error Boundary cover the List component
      </h2>
      <p className="mb-4">
        The error boundary will catch the error from the ComponentThatCauseError
        and render the fallback UI for the entire list.
      </p>

      <p className="mb-4">
        <pre className="bg-gray-100 p-4 rounded-md">
          {`<ErrorBoundary fallback={<ListErrorFallback />}>
  <ol>
    <header>
      <h3>List of components</h3>
    </header>
    <li>
      <NormalComponent />
    </li>
    <li>
      <NormalComponent />
    </li>
    <li>
      <ComponentThatCauseError />
    </li>
    <li>
      <NormalComponent />
    </li>
  </ol>
</ErrorBoundary>`}
        </pre>
      </p>

      <ErrorBoundary fallback={<ListErrorFallback />}>
        <ol>
          <header>
            <h3>List of components</h3>
          </header>
          <li>
            <NormalComponent />
          </li>
          <li>
            <NormalComponent />
          </li>
          <li>
            <ComponentThatCauseError />
          </li>
          <li>
            <NormalComponent />
          </li>
        </ol>
      </ErrorBoundary>
    </div>
  );
}

function ListErrorFallback() {
  return (
    <div className="p-4 bg-slate-100">
      <ol className="list-decimal list-outside">
        <header>
          <h3>Error rendering the list</h3>
        </header>
        <li className="bg-red-100 p-2 w-full">
          <Placeholder />
        </li>
        <li className="bg-white p-2 w-full">
          <Placeholder />
        </li>
        <li className="bg-red-100 p-2 w-full">
          <Placeholder />
        </li>
        <li className="bg-white p-2 w-full">
          <Placeholder />
        </li>
      </ol>
    </div>
  );
}
