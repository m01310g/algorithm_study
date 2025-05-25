const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 5) rl.close();
}).on("close", () => {
  const n = input[0][0];
  const type = input[1];
  const value = input[2];
  const m = input[3][0];
  const c = input[4];

  const queue = [];

  for (let i = n - 1; i >= 0; i--) {
    if (type[i] === 0) {
      queue.push(value[i]);
    }
  }

  const result = [];

  for (let i = 0; i < m; i++) {
    if (i < queue.length) {
      result.push(queue[i]);
    } else {
      result.push(c[i - queue.length]);
    }
  }

  console.log(result.join(" "));

  process.exit();
});
