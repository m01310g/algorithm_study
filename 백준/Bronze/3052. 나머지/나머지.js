const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(Number(line.trim()));
    if (input.length === 10) {
        rl.close();
    }
});

rl.on("close", () => {
    const result = new Set();
    for (let i = 0; i < 10; i++) {
        result.add(input[i] % 42);
    }

    console.log(result.size);
});
