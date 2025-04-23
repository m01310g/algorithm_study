function solution(n, words) {
    const used = new Set();
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const prev = words[i - 1];
        
        if (i > 0 && word[0] !== prev[prev.length - 1] || used.has(word)) {
            const person = (i % n) + 1;
            const round = Math.floor(i / n) + 1;
            return [person, round];
        }
        
        used.add(word);
    }
    
    return [0, 0]
}