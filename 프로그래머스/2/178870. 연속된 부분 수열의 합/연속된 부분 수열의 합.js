function solution(sequence, k) {
    var answer = [];
    let left = 0, right = 0;
    let bestStart = Infinity, bestLength = Infinity;
    let sum = 0;
    
    while (right < sequence.length) {
        sum += sequence[right++];
        
        while (sum > k) {
            sum -= sequence[left++];
        }
        
        if (sum === k) {
            if (right - left < bestLength) {
                bestLength = right - left;
                bestStart = left;
                answer = [left, right - 1];
            } else if (right - left === bestLength && left < bestStart) {
                bestStart = left;
                answer = [left, right - 1];
            }
        }
    }
    return answer;
}