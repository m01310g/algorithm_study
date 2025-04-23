function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    
    for (let height = 3; height <= Math.sqrt(total); height++) {
        let width = total / height;
        
        const cond = (width - 2) * (height - 2) === yellow;
        
        if (Number.isInteger(width) && width >= height && cond) {
            return [width, height];
        }
    }
};