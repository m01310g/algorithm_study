const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gcd = (a, b) => {
  if (b === 0) return a;
  else return gcd(b, a % b);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === Number(input[0]) + 1) rl.close();
}).on("close", () => {
  const arr = input.slice(1);
  arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i + 1] - arr[i]);
  }

  let arrGcd = result[0];

  for (let i = 1; i < result.length; i++) {
    arrGcd = gcd(arrGcd, result[i]);
  }

  const answer = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i] / arrGcd !== 1) answer.push(result[i] / arrGcd - 1);
  }

  console.log(answer.reduce((a, b) => a + b, 0));

  process.exit();
});
