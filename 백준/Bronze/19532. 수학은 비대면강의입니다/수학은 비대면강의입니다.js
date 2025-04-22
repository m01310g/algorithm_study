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
  const [[a, b, c, d, e, f]] = input;
  let x = 0;
  let y = 0;

  for (let i = -999; i < 1000; i++) {
    for (let j = -999; j < 1000; j++) {
      if (a * i + b * j === c && d * i + e * j === f) {
        x = i;
        y = j;
        break;
      }
    }
  }

  console.log(x, y);
  process.exit();
});
