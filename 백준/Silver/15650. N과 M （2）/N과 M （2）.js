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
  const visited = Array(n + 1).fill(false);
  const sequence = [];
  const answer = [];

  const backtrack = (start, depth) => {
    if (depth === m) {
      answer.push(sequence.join(" "));
      return;
    }

    for (let i = start; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        sequence.push(i);

        backtrack(i + 1, depth + 1);

        sequence.pop();
        visited[i] = false;
      }
    }
  };

  backtrack(1, 0);
  console.log(answer.join("\n"));

  process.exit();
});
