const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  const m = input[0][1];
  if (input.length === m + 1) rl.close();
}).on("close", () => {
  const [n, m] = input[0];
  const arr = Array.from({ length: n }, (_, index) => index + 1);

  for (let x = 1; x < m + 1; x++) {
    const [i, j] = input[x];
    const reversed = arr.slice(i - 1, j).reverse();

    arr.splice(i - 1, j - i + 1, ...reversed);
  }

  console.log(arr.join(" "));

  process.exit();
});
