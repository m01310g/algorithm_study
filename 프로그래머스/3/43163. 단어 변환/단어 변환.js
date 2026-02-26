function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const queue = [];
    let count = 0;
    let head = 0;
    const visited = Array(words.length).fill(false);
    
    queue.push([begin, count]);

    const compare = (word1, word2) => {
        let diff = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) diff++;
            if (diff > 1) return false;
        }
        return diff === 1;
    }
    
    while (head < queue.length) {
        const [curr, step] = queue[head++];
        if (curr === target) return step;
        
        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && compare(curr, words[i])) {
                visited[i] = true;
                queue.push([words[i], step + 1]);
            }
        }
    }
    
    return 0;
}