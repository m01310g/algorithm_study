const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === Number(input[0].split(" ")[0]) + 1) rl.close();
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1, n + 1);

  let min = Infinity;

  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      let cnt1 = 0;
      let cnt2 = 0;

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const board = arr[i + x][j + y];
          const exp1 = (x + y) % 2 === 0 ? "W" : "B";
          const exp2 = (x + y) % 2 === 0 ? "B" : "W";

          if (board !== exp1) cnt1++;
          if (board !== exp2) cnt2++;
        }
      }
      min = Math.min(min, cnt1, cnt2);
    }
  }

  console.log(min);

  process.exit();
});
