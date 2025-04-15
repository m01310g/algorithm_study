const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" "));
  if (input.length === 20) rl.close();
}).on("close", () => {
  const [...scores] = input;
  const scoreList = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };

  const arr1 = [];
  const arr2 = [];
  for (let score of scores) {
    if (score[2] === "P") {
      continue;
    }

    arr1.push(Number(score[1]));
    arr2.push(Number(scoreList[score[2]]));
  }

  const result = arr1.map((val, idx) => val * arr2[idx]);

  console.log(result.reduce((a, b) => a + b) / arr1.reduce((a, b) => a + b));
  process.exit();
});
