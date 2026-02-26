function solution(numbers, target) {
    var answer = 0;
    let count = 0;
    
    const DFS = (idx, sum) => {
        if (idx === numbers.length) {
            if (sum === target) count++;
            return;
        }
        
        DFS(idx + 1, sum + numbers[idx]);
        DFS(idx + 1, sum - numbers[idx]);
    }
    
    DFS(0, 0);
    answer = count;
    return answer;
}