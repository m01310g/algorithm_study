const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === Number(input[0]) + 1) rl.close();
}).on("close", () => {
  const arr = input.slice(1, input.length);
  const unique = arr.filter((val, idx) => arr.indexOf(val) === idx);

  unique.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a > b ? 1 : a < b ? -1 : 0;
  });

  console.log(unique.join("\n"));

  process.exit();
});
