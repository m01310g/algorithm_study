function solution(arr1, arr2) {
    const answer = [];
    for (let i = 0; i < arr1.length; i++) {
        const result = [];
        for (let j = 0; j < arr1[0].length; j++) {
            result.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(result);
    }
    
    return answer;
}