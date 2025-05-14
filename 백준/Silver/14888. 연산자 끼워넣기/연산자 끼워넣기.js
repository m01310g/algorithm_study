const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 3) rl.close();
}).on("close", () => {
  const [[n], arr, op] = input;
  let max = -Infinity;
  let min = Infinity;

  const dfs = (depth, value) => {
    if (depth === n - 1) {
      max = Math.max(max, value);
      min = Math.min(min, value);
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (op[i] > 0) {
        op[i]--;

        let newValue;
        switch (i) {
          case 0:
            newValue = value + arr[depth + 1];
            break;
          case 1:
            newValue = value - arr[depth + 1];
            break;
          case 2:
            newValue = value * arr[depth + 1];
            break;
          case 3:
            newValue = ~~(value / arr[depth + 1]);
            break;
        }

        dfs(depth + 1, newValue);
        op[i]++;
      }
    }
  };

  dfs(0, arr[0]);

  console.log(max);
  console.log(min);

  process.exit();
});
