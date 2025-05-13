const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  rl.close();
}).on("close", () => {
  const [[n, m]] = input;
  const sequence = [];
  const answer = [];

  const backtrack = (start, depth) => {
    if (depth === m) {
      answer.push(sequence.join(" "));
      return;
    }

    for (let i = start; i <= n; i++) {
      sequence.push(i);

      backtrack(i, depth + 1);

      sequence.pop();
    }
  };

  backtrack(1, 0);
  console.log(answer.join("\n"));

  process.exit();
});
