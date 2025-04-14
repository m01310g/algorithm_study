const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  rl.close();
}).on("close", () => {
  const word = input[0];
  const reversed = word.split("").reverse().join("");

  console.log(word === reversed ? 1 : 0);
  process.exit();
});
