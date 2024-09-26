import {
  FormSubmissionErrorBoundary,
  ErrorMessage,
} from "./FormSubmissionErrorBoundary";

export default function FormSubmissionError() {
  return (
    <div className="flex flex-col gap-4 p-12 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold">Form Submission Error</h1>
      <p>
        Please note that this type of error handling is not recommended for form
        validation. Only use this for exceptions that are you cannot prevent.
      </p>

      <FormSubmissionErrorBoundary fallback={<ErrorContent />}>
        <form
          className="flex flex-col gap-2 bg-white border border-gray-200 p-4 rounded-md"
          action={async function submit(formData) {
            "use server";
            const errorName = formData.get("error_name") ?? "unknown_error";

            // reading form data can result in a File. we know it's not possible
            if (typeof errorName !== "string") {
              return;
            }

            throw new Error(errorName);
          }}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="error_select"
              className="text-sm font-bold tracking-tight"
            >
              Select an error type
            </label>
            <select
              name="error_name"
              id="error_select"
              className="bg-white border border-gray-200 p-2 rounded-md"
            >
              <option value="error_1">Error 1</option>
              <option value="error_2">Error 2</option>
              <option value="error_3">Error 3</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </FormSubmissionErrorBoundary>
    </div>
  );
}

function ErrorContent() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold text-red-500 tracking-tight">
        Something went wrong
      </h2>
      <ErrorMessage errorName="error_1">
        <p>Error 1 (server side content)</p>
      </ErrorMessage>
      <ErrorMessage errorName="error_2">
        <p>Error 2 (server side content)</p>
      </ErrorMessage>
      <ErrorMessage errorName="error_3">
        <p>Error 3 (server side content)</p>
      </ErrorMessage>

      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
