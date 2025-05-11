const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim().split(" ").map(Number));
  if (input.length === 2) rl.close();
}).on("close", () => {
  const [[n, k], arr] = input;
  let count = 0;
  let result = -1;

  const mergeSort = (arr, p, r) => {
    if (p < r) {
      const q = Math.floor((p + r) / 2);
      mergeSort(arr, p, q);
      mergeSort(arr, q + 1, r);
      merge(arr, p, q, r);
    }
  };

  const merge = (arr, p, q, r) => {
    let i = p;
    let j = q + 1;
    let t = 0;
    const tmp = [];

    while (i <= q && j <= r) {
      if (arr[i] <= arr[j]) {
        tmp[t++] = arr[i++];
      } else {
        tmp[t++] = arr[j++];
      }
    }

    while (i <= q) {
      tmp[t++] = arr[i++];
    }

    while (j <= r) {
      tmp[t++] = arr[j++];
    }

    for (let i = 0; i < tmp.length; i++) {
      arr[p + i] = tmp[i];
      count++;

      if (count === k) {
        result = arr[p + i];
      }
    }
  };

  mergeSort(arr, 0, n - 1);

  console.log(result);

  process.exit();
});
