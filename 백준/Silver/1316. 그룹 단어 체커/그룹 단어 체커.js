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
  const [_, ...arr] = input;
  let count = 0;

  for (let word of arr) {
    const seen = new Set();
    let isGroupWord = true;

    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[i - 1]) {
        if (seen.has(word[i])) {
          isGroupWord = false;
          break;
        }
        seen.add(word[i]);
      }
    }

    if (isGroupWord) count++;
  }

  console.log(count);
  process.exit();
});
