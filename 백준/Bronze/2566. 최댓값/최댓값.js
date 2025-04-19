const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 9) rl.close();
}).on("close", () => {
  const arr = input;
  let max = -1;
  let maxRow = 0;
  let maxCol = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
        maxRow = i + 1;
        maxCol = j + 1;
      }
    }
  }

  console.log(max);
  console.log(maxRow, maxCol);

  process.exit();
});
