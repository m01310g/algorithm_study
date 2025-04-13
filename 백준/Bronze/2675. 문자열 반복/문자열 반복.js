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
  const t = Number(input[0]);
  const ans = [];

  for (let i = 1; i < t + 1; i++) {
    const [r, s] = input[i].split(" ");

    let result = "";
    for (char of s) {
      result += char.repeat(Number(r));
    }

    ans.push(result);
    result = "";
  }

  console.log(ans.join("\n"));
  process.exit();
});
