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
  const [N, C] = input[0];
  const arr = input.slice(1);
  let answer = 0;
  arr.sort((a, b) => a - b);

  let left = 1;
  let right = arr[arr.length - 1] - arr[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let prev = arr[0];
    let count = 1;

    for (const x of arr) {
      if (x - prev >= mid) {
        count++;
        prev = x;
      }
    }

    if (count >= C) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(answer);

  process.exit();
});
