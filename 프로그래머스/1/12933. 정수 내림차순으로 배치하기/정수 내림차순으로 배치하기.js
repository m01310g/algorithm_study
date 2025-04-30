function solution(n) {
    const nums = n.toString().split("").map(Number);
    return Number(nums.sort((a, b) => b - a).join(""));
}