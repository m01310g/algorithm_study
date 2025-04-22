const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === Number(input[0]) + 1) rl.close();
}).on("close", () => {
  const n = Number(input[0]);
  const arr = input.slice(1, n + 1).map((val) => val.split(" ").map(Number));

  const x = [];
  const y = [];
  for (let i = 0; i < n; i++) {
    x.push(arr[i][0]);
    y.push(arr[i][1]);
  }

  const xLen = Math.max(...x) - Math.min(...x);
  const yLen = Math.max(...y) - Math.min(...y);

  console.log(xLen * yLen);

  process.exit();
});
