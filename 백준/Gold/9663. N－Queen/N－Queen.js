const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  rl.close();
}).on("close", () => {
  const n = input[0];
  let count = 0;

  const cols = Array(n).fill(false);
  const diag1 = Array(2 * n).fill(false);
  const diag2 = Array(2 * n).fill(false);

  const backtrack = (row) => {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!cols[col] && !diag1[row - col + n] && !diag2[row + col]) {
        cols[col] = true;
        diag1[row - col + n] = true;
        diag2[row + col] = true;

        backtrack(row + 1);

        cols[col] = false;
        diag1[row - col + n] = false;
        diag2[row + col] = false;
      }
    }
  };

  backtrack(0);
  console.log(count);
  process.exit();
});
