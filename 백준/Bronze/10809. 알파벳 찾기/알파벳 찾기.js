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
  const s = input[0].toString();
  const str = "abcdefghijklmnopqrstuvwxyz";
  let result = Array.from({ length: 26 }, () => -1);

  for (let i = 0; i < s.length; i++) {
    if (result[str.indexOf(s[i])] === -1) result[str.indexOf(s[i])] = i;
  }

  console.log(result.join(" "));
  process.exit();
});
