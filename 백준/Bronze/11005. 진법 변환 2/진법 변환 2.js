const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  rl.close();
}).on("close", () => {
  let n = Number(input[0][0]);
  const b = Number(input[0][1]);
  const ans = [];

  while (n > 0) {
    let result = n % b;
    ans.push(result < 10 ? result : String.fromCharCode(result - 10 + 65));
    n = Math.floor(n / b);
  }

  console.log(ans.reverse().join(""));
  process.exit();
});
