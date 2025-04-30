function solution(arr, divisor) {
    const ans = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) ans.push(arr[i]);
    }
    
    ans.sort((a, b) => a - b);    
    return ans.length !== 0 ? ans : [-1];
}