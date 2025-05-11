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

  const recur = (val) => {
    if (val === 0 || val === 1) return 1;
    return val * recur(val - 1);
  };

  const answer = recur(num);
  console.log(answer);

  process.exit();
});
