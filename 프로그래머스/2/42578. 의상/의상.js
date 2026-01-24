function solution(clothes) {
    let answer = 1;
    const clothMap = {};
    
    for (const c of clothes) {
        const [name, type] = c;
        clothMap[type] = (clothMap[type] || 0) + 1
    }
    
    for (const type in clothMap) {
        answer *= (clothMap[type] + 1)
    }
    
    return answer - 1;
}