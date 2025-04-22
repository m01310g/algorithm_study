const { getDefaultAutoSelectFamily } = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  if (Number(line.trim()) === -1) rl.close();
  input.push(Number(line.trim()));
}).on("close", () => {
  const arr = input;
  const res = [];
  const ans = [];

  for (const el of arr) {
    const nums = [];

    for (let i = 1; i < el; i++) {
      if (el % i === 0) {
        nums.push(i);
      }
    }

    res.push(nums);
  }

  for (const el of res) {
    const val = arr[res.indexOf(el)];
    const sum = el.reduce((a, b) => a + b);

    if (sum === val) {
      ans.push(`${val} = ${el.join(" + ")}`);
    } else {
      ans.push(`${val} is NOT perfect.`);
    }
  }

  console.log(ans.join("\n"));

  process.exit();
});
