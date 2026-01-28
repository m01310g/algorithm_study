function solution(str1, str2) {
    var answer = 0;
    const arr1 = strSlice(str1);
    const arr2 = strSlice(str2);
    
    const cnt1 = arrMap(arr1);
    const cnt2 = arrMap(arr2);
    
    let hap = 0;
    let gyo = 0;
    
    const keys = new Set([...cnt1.keys(), ...cnt2.keys()]);
    
    for (const k of keys) {
        const c1 = cnt1.get(k) ?? 0;
        const c2 = cnt2.get(k) ?? 0;
        
        gyo += Math.min(c1, c2);
        hap += Math.max(c1, c2);
    }
    
    answer = hap === 0 ? 65536 : Math.floor((gyo / hap) * 65536);
    
    return answer;
}

function strSlice(str) {
    const arr = [];
    const lowerStr = str.toLowerCase();
    const pattern = /^[a-zA-Z]{2}$/
    
    for (let i = 0; i < str.length - 1; i++) {
        const slicedStr = lowerStr.slice(i, i + 2);
        
        if (pattern.test(slicedStr)) arr.push(slicedStr);
    }
    
    return arr;
}

function arrMap(arr) {
    const cnt = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        if (cnt.has(str)) {
            cnt.set(str, cnt.get(str) + 1);
        }
        else cnt.set(str, 1);
    }
    
    return cnt;
}