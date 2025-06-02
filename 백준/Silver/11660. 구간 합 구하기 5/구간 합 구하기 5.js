const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length > 0 && input.length === input[0][0] + input[0][1] + 1)
    rl.close();
}).on("close", () => {
  const [n, m] = input[0];
  const arr1 = input.slice(1, n + 1);
  const arr2 = input.slice(n + 1);
  const prefix = Array.from({ length: n + 1 }, () =>
    Array(arr1[0].length + 1).fill(0)
  );
  const answer = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= arr1[0].length; j++) {
      prefix[i][j] =
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1] +
        arr1[i - 1][j - 1];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const x1 = arr2[i][0];
    const y1 = arr2[i][1];
    const x2 = arr2[i][2];
    const y2 = arr2[i][3];

    const sum =
      prefix[x2][y2] -
      prefix[x1 - 1][y2] -
      prefix[x2][y1 - 1] +
      prefix[x1 - 1][y1 - 1];

    answer.push(sum);
  }

  console.log(answer.join("\n"));

  process.exit();
});
