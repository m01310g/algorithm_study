const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(String(line.trim()));
  rl.close();
}).on("close", () => {
  const [num] = input;
  console.log(
    num
      .split("")
      .map(Number)
      .sort((a, b) => b - a)
      .join("")
  );

  process.exit();
});
