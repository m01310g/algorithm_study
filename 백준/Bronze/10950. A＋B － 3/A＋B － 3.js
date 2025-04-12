const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line);
  const t = Number(input[0]);

  if (input.length === t + 1) {
    for (let i = 1; i <= t; i++) {
      const [a, b] = input[i].trim().split(" ").map(Number);
      console.log(a + b);
    }
    rl.close();
  }
});
