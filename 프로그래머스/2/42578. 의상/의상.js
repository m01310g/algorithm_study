function solution(clothes) {
    const clothesMap = {};
    
    for (let i = 0; i < clothes.length; i++) {
        const type = clothes[i][1];
        clothesMap[type] = (clothesMap[type] || 0) + 1;
    }
    
    let answer = 1;
    
    for (const type in clothesMap) {
        answer *= (clothesMap[type] + 1);
    }
    
    return answer - 1;
}