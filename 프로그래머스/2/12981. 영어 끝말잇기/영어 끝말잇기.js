function solution(n, words) {
    const seen = new Set([words[0]]);
    
    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        const curr = words[i];
        
        const lastIdx = prev.length - 1;
        
        const badChain = prev[lastIdx] !== curr[0];
        const duplicated = seen.has(curr);
        
        if (badChain || duplicated) {
            const p = (i % n) + 1;
            const t = Math.floor(i / n) + 1;
            return [p, t];
        }
        seen.add(curr);
    }
    return [0, 0];
}