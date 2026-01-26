function solution(numbers, target) {
    let answer = 0;
    let count = 0;
    
    const DFS = (index, sum) => {
        if (index === numbers.length) {
            if (sum === target) count++;
            return;
        }
        
        DFS(index + 1, sum + numbers[index]);
        DFS(index + 1, sum - numbers[index]);
    }
    
    DFS(0, 0);
    
    answer = count;
    return answer;
}