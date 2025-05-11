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

  const generatePattern = (size) => {
    if (size === 1) return ["*"];
    const prevPattern = generatePattern(size / 3);
    const newPattern = [];
    for (let i = 0; i < prevPattern.length; i++) {
      newPattern.push(prevPattern[i] + prevPattern[i] + prevPattern[i]);
    }

    for (let i = 0; i < prevPattern.length; i++) {
      newPattern.push(
        prevPattern[i] + " ".repeat(prevPattern.length) + prevPattern[i]
      );
    }

    for (let i = 0; i < prevPattern.length; i++) {
      newPattern.push(prevPattern[i] + prevPattern[i] + prevPattern[i]);
    }

    return newPattern;
  };

  const result = generatePattern(n);
  console.log(result.join("\n"));
  process.exit();
});
