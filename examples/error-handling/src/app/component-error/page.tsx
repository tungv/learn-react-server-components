import ListItemError from "./ListItemError";
import WholeListError from "./WholeListError";

export default function ComponentErrorPage() {
  return (
    <div className="flex flex-col gap-4 p-12">
      <h1 className="text-2xl font-bold">
        Intentional Error Handling in React
      </h1>

      <p>
        This page has a component that cause an error and we will put an error
        boundary in different places
      </p>
      <p>
        Depending on the desired behavior, we can put the error boundary outside
        the entire list or only cover the component that cause the error.
      </p>

      <WholeListError />
      <ListItemError />
    </div>
  );
}
