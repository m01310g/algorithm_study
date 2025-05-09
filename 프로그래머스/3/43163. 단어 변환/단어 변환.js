function canTransform(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) diff++;
        if (diff > 1) return false;
    }
    
    return diff === 1;
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    let count = 0;
    const queue = [[begin, count]];
    
    const visited = Array(words.length).fill(false);
    
    while (queue.length) {
        const [current, steps] = queue.shift();
        
        if (current === target) return steps;
        
        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && canTransform(current, words[i])) {
                visited[i] = true;
                queue.push([words[i], steps + 1]);
            }
        }
    }
    
    return 0;
}