const { join } = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
    input = line.trim();
    rl.close();
});

rl.on("close", () => {
    const dial = {
        "ABC": 3,
        "DEF": 4,
        "GHI": 5,
        "JKL": 6,
        "MNO": 7,
        "PQRS": 8,
        "TUV": 9,
        "WXYZ": 10,
    };

    let result = 0;

    for (let char of input) {
        for (let key in dial) {
            if (key.includes(char)) {
                result += dial[key];
                break;
            }
        }
    }
    console.log(result);
});
