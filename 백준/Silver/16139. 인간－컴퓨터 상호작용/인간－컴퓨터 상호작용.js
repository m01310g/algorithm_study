const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" "));
  if (input.length >= 2 && input.length === Number(input[1][0]) + 2) rl.close();
}).on("close", () => {
  const s = input[0][0];
  const q = Number(input[1][0]);
  const arr = input.slice(2);
  const prefix = Array.from({ length: s.length + 1 }, () => Array(26).fill(0));
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i) - 97;

    for (let j = 0; j < 26; j++) {
      prefix[i + 1][j] = prefix[i][j];
    }

    prefix[i + 1][code]++;
  }

  for (let i = 0; i < q; i++) {
    const [ch, l, r] = arr[i];
    const idx = ch.charCodeAt(0) - 97;
    const result = prefix[Number(r) + 1][idx] - prefix[Number(l)][idx];
    answer.push(result);
  }
  console.log(answer.join("\n"));

  process.exit();
});
