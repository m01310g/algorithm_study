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
  const word = input[0].toString().toUpperCase();
  const count = Array(26).fill(0);

  for (let char of word) {
    count[char.charCodeAt() - 65] += 1;
  }

  const max = Math.max(...count);
  const maxCount = count.filter((v) => v === max).length;

  console.log(
    maxCount >= 2 ? "?" : String.fromCharCode(count.indexOf(max) + 65)
  );
  process.exit();
});
