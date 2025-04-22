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

  let cnt1 = Math.floor(n / 5);

  while (cnt1 >= 0) {
    const rest = n - 5 * cnt1;

    if (rest % 3 === 0) {
      const cnt2 = rest / 3;
      console.log(cnt1 + cnt2);
      return;
    }

    cnt1--;
  }

  console.log(-1);

  process.exit();
});
