const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  if (
    line.trim().split(" ").map(Number)[0] === 0 &&
    line.trim().split(" ").map(Number)[1] === 0 &&
    line.trim().split(" ").map(Number)[2] === 0
  )
    rl.close();
  input.push(line.trim().split(" ").map(Number));
}).on("close", () => {
  const arr = input;
  const res = [];

  for (const val of arr) {
    const [a, b, c] = val;
    res.push(
      a + b > c && b + c > a && c + a > b
        ? a === b && b === c && c === a
          ? "Equilateral"
          : a === b || b === c || c === a
          ? "Isosceles"
          : "Scalene"
        : "Invalid"
    );
  }

  console.log(res.join("\n"));

  process.exit();
});
