const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(BigInt));
  if (input.length === 3) rl.close();
}).on("close", () => {
  const n = input[0][0];
  const dist = input[1];
  const price = input[2];

  let total = 0n;
  let minPrice = price[0];

  for (let i = 0; i < n - 1n; i++) {
    if (price[i] < minPrice) {
      minPrice = price[i];
    }

    total += minPrice * dist[i];
  }

  console.log(total.toString());

  process.exit();
});
