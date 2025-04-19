const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 2 * input[0][0] + 1) rl.close();
}).on("close", () => {
  const [n, m] = input[0];
  const arr1 = input.slice(1, n + 1);
  const arr2 = input.slice(n + 1, 2 * n + 1);

  const result = [];

  arr1.forEach((val, idx1) => {
    val.forEach((v, idx2) => result.push(v + arr2[idx1][idx2]));
  });

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    console.log(row.join(" "));
  }

  process.exit();
});
