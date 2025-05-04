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
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 2) rl.close();
}).on("close", () => {
  const [[b, a], [d, c]] = input;

  const numerator = b * c + d * a;
  const denominator = a * c;

  if (gcd(numerator, denominator) === 1) {
    console.log(numerator, denominator);
  } else {
    console.log(
      numerator / gcd(numerator, denominator),
      denominator / gcd(numerator, denominator)
    );
  }

  process.exit();
});
