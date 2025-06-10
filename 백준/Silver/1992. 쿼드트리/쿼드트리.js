const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let n = 0;
rl.on("line", (line) => {
  if (n === 0) {
    n = Number(line.trim());
  } else {
    input.push(line.trim().split("").map(Number));
  }

  if (input.length === n) rl.close();
}).on("close", () => {
  const tree = input;

  const isSame = (x, y, size) => {
    const first = tree[x][y];

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (tree[i][j] !== first) return false;
      }
    }

    return true;
  };

  const quadTree = (x, y, size) => {
    if (size === 1 || isSame(x, y, size)) return String(tree[x][y]);

    const half = size / 2;

    return (
      "(" +
      quadTree(x, y, half) +
      quadTree(x, y + half, half) +
      quadTree(x + half, y, half) +
      quadTree(x + half, y + half, half) +
      ")"
    );
  };

  console.log(quadTree(0, 0, n));

  process.exit();
});
