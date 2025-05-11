const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === input[0] + 1) rl.close();
}).on("close", () => {
  const n = input[0];
  const arr = input.slice(1);
  arr.sort((a, b) => a - b);

  const avg = parseInt(Math.round(arr.reduce((a, b) => a + b) / n));
  const mid = arr[Math.floor(n / 2)];
  const range = Math.max(...arr) - Math.min(...arr);

  const countMap = {};

  for (const num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  let max = 0;
  for (let num in countMap) {
    if (countMap[num] > max) {
      max = countMap[num];
    }
  }

  const freqNums = [];
  for (let num in countMap) {
    if (countMap[num] === max) {
      freqNums.push(num);
    }
  }

  freqNums.sort((a, b) => a - b);

  const freq = freqNums.length === 1 ? freqNums[0] : freqNums[1];

  console.log(avg);
  console.log(mid);
  console.log(freq);
  console.log(range);

  process.exit();
});
