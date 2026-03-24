function solution(gems) {
    var answer = [];
    let left = 0, right = 0;
    const gemMap = new Map();
    const n = (new Set(gems)).size;
    let bestLength = 100000;
    
    while (right < gems.length) {
        gemMap.set(gems[right], (gemMap.get(gems[right]) || 0) + 1);
        right++;
        
        while (gemMap.size === n) {
            gemMap.set(gems[left], gemMap.get(gems[left]) - 1);
            
            if (right - left < bestLength) {
                bestLength = right - left;
                answer = [left + 1, right];    
            }
            
            if (gemMap.get(gems[left]) === 0) gemMap.delete(gems[left]);
            
            left++;
        }
    }
    
    return answer;
}