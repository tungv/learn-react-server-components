import readSomethingWrong from "../readSomethingWrong";

export default async function ErrorPage() {
  await readSomethingWrong();
  return <div>Error page</div>;
}
