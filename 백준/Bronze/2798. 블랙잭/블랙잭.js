const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 2) rl.close();
}).on("close", () => {
  const [[n, m], arr] = input;

  let max = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if (sum <= m) {
          max = Math.max(max, sum);
        }
      }
    }
  }

  console.log(max);
  process.exit();
});
