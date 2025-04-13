const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === input[0][1] + 1) rl.close();
}).on("close", () => {
  const [n, m] = input[0];
  const result = Array.from({ length: n }, (_, index) => index + 1);

  for (let x = 1; x < m + 1; x++) {
    const [i, j] = input[x];
    let tmp;

    tmp = result[i - 1];
    result[i - 1] = result[j - 1];
    result[j - 1] = tmp;
  }

  console.log(result.join(" "));

  process.exit();
});
