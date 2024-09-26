import readSomethingWrong from "../../../../readSomethingWrong";

export default async function NestedErrorPage() {
  await readSomethingWrong();
  return <div>Nested error page</div>;
}
