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
  const str = input.slice(1);
  const countArr = Array(t).fill(0);

  const recursion = (s, l, r, idx) => {
    countArr[idx]++;
    if (l >= r) return 1;
    else if (s[l] != s[r]) return 0;
    else return recursion(s, l + 1, r - 1, idx);
  };

  const isPalindrome = (s, idx) => {
    return recursion(s, 0, s.length - 1, idx);
  };

  const result = [];

  for (let i = 0; i < t; i++) {
    result.push(isPalindrome(str[i], i));
  }

  const answer = [];

  for (let i = 0; i < t; i++) {
    answer.push([result[i], countArr[i]]);
  }

  console.log(answer.map((val) => val.join(" ")).join("\n"));
  process.exit();
});
