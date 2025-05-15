const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === input[0][0] + 1) rl.close();
}).on("close", () => {
  const n = input[0][0];
  const arr = input.slice(1);

  let value = Infinity;
  const visited = Array(n).fill(false);

  const calc = (team) => {
    let score = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        score += arr[team[i]][team[j]];
      }
    }
    return score;
  };

  const dfs = (idx, depth) => {
    if (depth === n / 2) {
      const start = [];
      const link = [];

      for (let i = 0; i < n; i++) {
        if (visited[i]) start.push(i);
        else link.push(i);
      }

      const startScore = calc(start);
      const linkScore = calc(link);

      const diff = Math.abs(startScore - linkScore);
      value = Math.min(diff, value);
      return;
    }

    for (let i = idx; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(i + 1, depth + 1);
        visited[i] = false;
      }
    }
  };

  dfs(0, 0);
  console.log(value);

  process.exit();
});
