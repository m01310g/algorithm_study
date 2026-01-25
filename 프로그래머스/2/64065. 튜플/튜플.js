function solution(s) {
    var answer = [];
    const arr = s
    .slice(2, -2)
    .split("},{")
    .map((part) => part.split(",").map(Number));
    
    if (arr.length === 1) return arr[0];
    
    arr.sort((a, b) => a.length - b.length);
    const seen = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!seen.includes(arr[i][j])) {
                seen.push(arr[i][j]);
                answer.push(arr[i][j]);
            }
        }
    }
    
    return answer;
}