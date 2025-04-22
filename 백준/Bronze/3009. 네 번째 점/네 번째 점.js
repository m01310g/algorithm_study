const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 3) rl.close();
}).on("close", () => {
  const arr = input;

  const x = [];
  const y = [];

  for (let i = 0; i < 3; i++) {
    x.push(arr[i][0]);
    y.push(arr[i][1]);
  }

  const x4 = x[0] === x[1] ? x[2] : x[0] === x[2] ? x[1] : x[0];
  const y4 = y[0] === y[1] ? y[2] : y[0] === y[2] ? y[1] : y[0];

  console.log(`${x4} ${y4}`);

  process.exit();
});
