const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
}).on("close", () => {
  const n = input;

  const recursion = (num) => {
    if (num === 0) return "-";

    const prev = recursion(num - 1);
    const space = " ".repeat(prev.length);

    return prev + space + prev;
  };

  const answer = [];
  for (const num of n) {
    answer.push(recursion(num));
  }

  console.log(answer.join("\n"));

  process.exit();
});
