function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const idx = arr.indexOf(Math.min(...arr));
    
    arr.splice(idx, 1);
    return arr;
}