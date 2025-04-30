function solution(n) {
    const n3 = n.toString(3);
    const reversed = n3.split("").reverse().join("");
    return parseInt(reversed, 3);
}