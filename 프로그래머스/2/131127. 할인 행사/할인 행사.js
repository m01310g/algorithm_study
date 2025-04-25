const isSameMap = (map1, map2) => {
    if (Object.keys(map1).length !== Object.keys(map2).length) return false;
    
    for (const key in map1) {
        if (map1[key] !== map2[key]) return false;
    }
    return true;
}

function solution(want, number, discount) {
    const wantMap = {};
    let count = 0;
    
    for (let i = 0; i < want.length; i++) {
        wantMap[want[i]] = number[i];
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const window = discount.slice(i, i + 10);
        
        const countMap = {};
        
        for (let item of window) {
            countMap[item] = (countMap[item] || 0) + 1;
        }
        
        let matched = true;
        for (let j = 0; j < want.length; j++) {
            if (countMap[want[j]] !== number[j]) {
                matched = false;
                break;
            }
        }
        
        if (matched) count++;
    }
    
    return count;
}