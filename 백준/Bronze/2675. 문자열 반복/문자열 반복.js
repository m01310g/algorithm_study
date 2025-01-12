const { join } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let count = 0;

rl.on("line", (line) => {
    count++;
    if (count === 1) {
        input.push(Number(line.trim()));
    } else {
        input.push(line.split(" "));
    }

    if (input.length - 1 === input[0]) {
        rl.close();
    }
});

rl.on("close", () => {
    const num = input[0];
    for (let i = 1; i <= num; i++) {
        const count = input[i][0];
        const word = input[i][1];
        let result = "";
        for (let j = 0; j < word.length; j++) {
            result += word[j].repeat(count);
        }
        console.log(result);
    }
});
