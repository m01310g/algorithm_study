const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === input[0] + 1) rl.close();
}).on("close", () => {
  const [n, ...arr] = input;

  const result = [];
  for (let i = 0; i < n; i++) {
    const coins = [];
    let c = arr[i];

    coins.push(Math.floor(c / 25));
    c %= 25;
    coins.push(Math.floor(c / 10));
    c %= 10;
    coins.push(Math.floor(c / 5));
    c %= 5;
    coins.push(Math.floor(c / 1));

    result.push(coins);
  }

  for (let i = 0; i < n; i++) {
    console.log(result[i].join(" "));
  }
  process.exit();
});
