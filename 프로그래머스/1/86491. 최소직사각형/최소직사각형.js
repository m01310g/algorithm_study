function solution(sizes) {
    var answer = 0;
    const result = [];
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        const [w, h] = sizes[i];
        if (w < h) result.push([h, w]);
        else result.push([w, h]);
    }
    
    for (let i = 0; i < result.length; i++) {
        if (maxWidth < result[i][0]) maxWidth = result[i][0];
        if (maxHeight < result[i][1]) maxHeight = result[i][1];
    }
    
    answer = maxWidth * maxHeight;
    
    return answer;
}