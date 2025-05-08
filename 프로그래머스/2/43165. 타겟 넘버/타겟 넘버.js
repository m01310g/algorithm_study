function solution(numbers, target) {
    let count = 0;
    
    const dfs = (index, sum) => {
        // 배열의 끝까지 도달했을 때
        if (index === numbers.length) {
            if (sum === target) {
                // 카운팅 로직
                count++;
            }
            return;
        }
        // 현재 숫자를 더하는 경우
        dfs(index + 1, sum + numbers[index]);
        // 현재 숫자를 빼는 경우
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return count;
}