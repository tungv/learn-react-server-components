import readSomethingWrong from "../readSomethingWrong";

export default async function ComponentThatCauseError() {
  await readSomethingWrong();
  return <div>This is a component that cause an error</div>;
}
