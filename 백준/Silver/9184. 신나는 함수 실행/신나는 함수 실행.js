const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  const numbers = line.trim().split(" ").map(Number);

  if (numbers.length === 3 && numbers.every((num) => num === -1)) {
    rl.close();
    return;
  }

  input.push(numbers);
}).on("close", () => {
  const numbers = input;
  const answer = {};

  numbers.forEach(([a, b, c]) => {
    const key = `w(${a}, ${b}, ${c})`;
    answer[key] = w(a, b, c);
  });

  for (const key in answer) {
    console.log(`${key} = ${answer[key]}`);
  }

  process.exit();
});

const memo = {};

const w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  const key = `${a}, ${b}, ${c}`;
  if (memo[key] !== undefined) return memo[key];

  if (a < b && b < c)
    memo[key] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  else
    memo[key] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);

  return memo[key];
};
