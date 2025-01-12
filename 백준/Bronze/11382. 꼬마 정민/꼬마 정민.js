const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input = line;
});

rl.on("close", () => {
    const [a, b, c] = input.split(" ").map(Number);
    console.log(a + b + c);
});
