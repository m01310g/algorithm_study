const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(Number(line.trim()));
  rl.close();
}).on("close", () => {
  const n = input[0];

  let recursionCount = 0;
  let dpCount = 0;

  const fib = (n) => {
    if (n === 1 || n === 2) {
      recursionCount++;
      return 1;
    }

    return fib(n - 1) + fib(n - 2);
  };

  const fibonacci = (n) => {
    const dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      dpCount++;
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  };

  fib(n);
  fibonacci(n);

  console.log(recursionCount);
  console.log(dpCount);
  process.exit();
});
