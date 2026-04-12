function solution(gems) {
    var answer = [];
    const gemsMap = new Map();  // 보석 개수 저장 map
    const n = (new Set(gems)).size; // 보석 종류의 수
    let left = 0, right = 0;
    let bestLength = Infinity;  // 가장 짧은 구간
    
    while (right < gems.length) {
        gemsMap.set(gems[right], (gemsMap.get(gems[right]) || 0) + 1);
        right++;
        
        while (gemsMap.size === n) {
            gemsMap.set(gems[left], gemsMap.get(gems[left]) - 1);
            
            if (right - left < bestLength) {
                bestLength = right - left;
                answer = [left + 1, right];
            }
            
            if (gemsMap.get(gems[left]) === 0) {
                gemsMap.delete(gems[left]);
            }
            
            left++;
        }
    }
    
    return answer;
}