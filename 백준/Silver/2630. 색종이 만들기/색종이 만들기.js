const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length > 0) {
    if (input.length === input[0][0] + 1) rl.close();
  }
}).on("close", () => {
  const n = input[0][0];
  const arr = input.slice(1);

  const isSameColor = (x, y, size) => {
    const first = arr[x][y];

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== first) return false;
      }
    }

    return true;
  };

  let blue = 0,
    white = 0;
  const divide = (x, y, size) => {
    if (isSameColor(x, y, size)) {
      if (arr[x][y] === 0) white++;
      else blue++;
      return;
    }

    const newSize = size / 2;

    divide(x, y, newSize); // 왼쪽 위
    divide(x, y + newSize, newSize); // 오른쪽 위
    divide(x + newSize, y, newSize); // 왼쪽 아래
    divide(x + newSize, y + newSize, newSize); // 오른쪽 아래
  };

  divide(0, 0, n);

  console.log(white);
  console.log(blue);

  process.exit();
});
