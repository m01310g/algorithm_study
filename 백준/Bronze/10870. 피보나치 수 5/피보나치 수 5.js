const { captureRejectionSymbol } = require("events");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  rl.close();
}).on("close", () => {
  const num = input[0];
  const fibonacci = (val) => {
    if (val === 0) return 0;
    if (val === 1 || val === 2) return 1;
    return fibonacci(val - 1) + fibonacci(val - 2);
  };

  console.log(fibonacci(num));

  process.exit();
});
