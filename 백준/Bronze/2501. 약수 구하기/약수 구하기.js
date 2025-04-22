const { getDefaultAutoSelectFamily } = require("net");
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
  const [[n, k]] = input;
  const res = [];

  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      res.push(i);
    }
  }

  res.sort((a, b) => a - b);

  console.log(k <= res.length ? res[k - 1] : 0);

  process.exit();
});
