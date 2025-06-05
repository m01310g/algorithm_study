const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length > 0) {
    const [n, k] = input[0].split(" ").map(Number);
    if (input.length === n + 1) rl.close();
  }
}).on("close", () => {
  let [n, k] = input[0].split(" ").map(Number);
  const coins = input.slice(1).map(Number).reverse();

  let count = 0;
  for (const coin of coins) {
    if (coin <= k) {
      count += Math.floor(k / coin);
      k %= coin;
    }
  }

  console.log(count);

  process.exit();
});
