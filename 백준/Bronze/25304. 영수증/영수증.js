const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());

  const x = Number(input[0]);
  const n = Number(input[1]);

  let price = 0;

  if (input.length === n + 2) {
    for (let i = 2; i < n + 2; i++) {
      const [a, b] = input[i].split(" ").map(Number);
      price += a * b;
    }

    console.log(x === price ? "Yes" : "No");

    rl.close();
  }
});
