const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line.trim());

    if (input.length === 2) {
        rl.close();
    }
});

rl.on("close", () => {
    const [a, b] = input;

    console.log(Number(a) * Number(b[2]));
    console.log(Number(a) * Number(b[1]));
    console.log(Number(a) * Number(b[0]));
    console.log(Number(a) * Number(b));
});
