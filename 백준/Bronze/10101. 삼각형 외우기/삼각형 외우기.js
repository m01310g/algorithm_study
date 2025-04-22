const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === 3) rl.close();
}).on("close", () => {
  const [a, b, c] = input;

  console.log(
    a + b + c === 180
      ? a === 60 && b === 60 && c === 60
        ? "Equilateral"
        : a === b || b === c || c === a
        ? "Isosceles"
        : "Scalene"
      : "Error"
  );

  process.exit();
});
