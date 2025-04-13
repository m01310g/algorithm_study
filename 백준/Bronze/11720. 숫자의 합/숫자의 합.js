const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());

  if (input.length === 2) rl.close();
}).on("close", () => {
  const n = Number(input[0]);
  const str = input[1].toString();

  let ans = 0;

  for (const char of str) {
    ans += Number(char);
  }

  console.log(ans);

  process.exit();
});
