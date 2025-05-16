const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  if (input.length === input[0] + 1) rl.close();
}).on("close", () => {
  const nums = input.slice(1);
  const answer = [];

  nums.forEach((num) => {
    const dp = Array(num + 1).fill(0);

    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 1;

    for (let i = 4; i <= num; i++) {
      dp[i] = dp[i - 2] + dp[i - 3];
    }

    answer.push(dp[num]);
  });

  console.log(answer.join("\n"));

  process.exit();
});
