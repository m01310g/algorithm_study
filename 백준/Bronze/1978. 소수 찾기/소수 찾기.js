const { getDefaultAutoSelectFamily } = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) rl.close();
}).on("close", () => {
  const n = input[0];
  const arr = input[1].split(" ").map(Number);
  const res = [];
  let cnt = 0;

  for (const el of arr) {
    const nums = [];
    for (let i = 1; i < el + 1; i++) {
      if (el % i === 0) {
        nums.push(i);
      }
    }

    res.push(nums);
  }

  for (const el of res) {
    if (el.length === 2) cnt++;
  }

  console.log(cnt);

  process.exit();
});
