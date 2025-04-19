const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length > 0 && input.length === input[0][0] + 1) rl.close();
}).on("close", () => {
  const [[n], ...arr] = input;

  const result = Array.from({ length: 100 }, () => Array(100).fill(false));

  for (const [x, y] of arr) {
    for (let i = y; i < y + 10; i++) {
      for (let j = x; j < x + 10; j++) {
        result[i][j] = true;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (result[i][j]) count++;
    }
  }

  console.log(count);
  process.exit();
});
