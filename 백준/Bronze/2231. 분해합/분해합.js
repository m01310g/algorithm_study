const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  rl.close();
}).on("close", () => {
  const n = Number(input[0]);
  let res = 0;

  for (let i = 1; i <= n; i++) {
    const sum =
      i +
      i
        .toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b);

    if (sum === n) {
      res = i;
      break;
    }
  }

  console.log(res);

  process.exit();
});

