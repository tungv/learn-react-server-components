import FormSubmissionErrorBoundary from "./FormSubmissionErrorBoundary";

export default function FormSubmissionError() {
  return (
    <div className="flex flex-col gap-4 p-12 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold">Form Submission Error</h1>
      <p>
        Please note that this type of error handling is not recommended for form
        validation. Only use this for exceptions that are you cannot prevent.
      </p>

      <FormSubmissionErrorBoundary>
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
