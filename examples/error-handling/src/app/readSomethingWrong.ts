export default async function readSomethingWrong() {
  const randomIndex = Math.floor(Math.random() * ErrorLists.length);
  throw new Error(ErrorLists[randomIndex]);
}

const ErrorLists = [
  "Something went wrong",
  "Omg, this is a big error",
  "It is happening again",
  "I can't believe this is still happening",
  "This is insane",
  "I can't do this anymore",
  "This is ridiculous",
  "I give up",
  "This is the last straw",
  "I can't take it anymore",
  "This is too much",
];
