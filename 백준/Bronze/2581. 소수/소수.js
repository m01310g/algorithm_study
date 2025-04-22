const { getDefaultAutoSelectFamily } = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === 2) rl.close();
}).on("close", () => {
  const [m, n] = input;
  const arr = Array.from({ length: n - m + 1 }, (_, i) => m + i);
  const res = [];

  for (const el of arr) {
    const nums = [];
    for (let i = 1; i < el + 1; i++) {
      if (el % i === 0) nums.push(i);
    }

    if (nums.length === 2) res.push(el);
  }

  if (res.length === 0) console.log(-1);
  else {
    console.log(res.reduce((a, b) => a + b));
    console.log(Math.min(...res));
  }

  process.exit();
});
