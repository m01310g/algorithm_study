const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length > 0) {
    const [n, m, k] = input[0].split(" ").map(Number);
    if (input.length === n + 1) rl.close();
  }
}).on("close", () => {
  const [n, m, k] = input[0].split(" ").map(Number);
  const board = input.slice(1).map((v) => v.split(""));
  const prefixW = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  const prefixB = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const expected = (i + j) % 2 === 0 ? "W" : "B";
      const isDiffrent = board[i - 1][j - 1] !== expected ? 1 : 0;
      prefixW[i][j] =
        prefixW[i - 1][j] +
        prefixW[i][j - 1] -
        prefixW[i - 1][j - 1] +
        isDiffrent;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const expected = (i + j) % 2 === 0 ? "B" : "W";
      const isDiffrent = board[i - 1][j - 1] !== expected ? 1 : 0;
      prefixB[i][j] =
        prefixB[i - 1][j] +
        prefixB[i][j - 1] -
        prefixB[i - 1][j - 1] +
        isDiffrent;
    }
  }

  let min = Infinity;

  for (let i = k; i <= n; i++) {
    for (let j = k; j <= m; j++) {
      const repaintW =
        prefixW[i][j] -
        prefixW[i - k][j] -
        prefixW[i][j - k] +
        prefixW[i - k][j - k];
      const repaintB =
        prefixB[i][j] -
        prefixB[i - k][j] -
        prefixB[i][j - k] +
        prefixB[i - k][j - k];

      min = Math.min(min, repaintW, repaintB);
    }
  }

  console.log(min);

  process.exit();
});
