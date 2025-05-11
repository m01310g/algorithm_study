const { captureRejectionSymbol } = require("events");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  let n;
  if (input) [n] = input[0].split(" ").map(Number);
  if (input.length === n + 1) rl.close();
}).on("close", () => {
  const m = Number(input[0].split(" ")[1]);
  const arr = input.slice(1);
  const countMap = new Map();
  const result = [];

  for (const word of arr) {
    if (word.length >= m) result.push(word);
  }

  for (const word of result) {
    countMap.set(word, (countMap.get(word) || 0) + 1);
  }

  const countArr = [...countMap];
  countArr.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    if (b[0].length !== a[0].length) return b[0].length - a[0].length;
    return a[0].localeCompare(b[0]);
  });

  const answer = [];
  for (const [word, _] of countArr) {
    answer.push(word);
  }
  console.log(answer.join("\n"));

  process.exit();
});
