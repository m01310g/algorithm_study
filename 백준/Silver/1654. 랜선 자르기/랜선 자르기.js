const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let n = 0;
rl.on("line", (line) => {
  if (input.length === 0) {
    input.push(line.trim().split(" ").map(Number));
  } else {
    input.push(Number(line.trim()));
  }

  if (input.length === input[0][0] + 1) rl.close();
}).on("close", () => {
  const [k, n] = input[0];
  const arr = input.slice(1);
  const maxValue = Math.max(...arr);

  let start = 1;
  let end = maxValue;
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const count = arr.reduce((sum, len) => sum + Math.floor(len / mid), 0);

    if (count >= n) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);

  process.exit();
});
