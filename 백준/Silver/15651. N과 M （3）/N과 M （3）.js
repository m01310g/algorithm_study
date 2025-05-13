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

  const backtrack = (depth) => {
    if (depth === m) {
      answer.push(sequence.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      sequence.push(i);

      backtrack(depth + 1);

      sequence.pop();
    }
  };

  backtrack(0);
  console.log(answer.join("\n"));

  process.exit();
});
