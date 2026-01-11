function solution(answers) {
    var answer = [];
    
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let result = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (arr1[i % arr1.length] === answers[i]) result[0] += 1;
        if (arr2[i % arr2.length] === answers[i]) result[1] += 1;
        if (arr3[i % arr3.length] === answers[i]) result[2] += 1;
    }
    
    const maxNum = Math.max(...result);
    
    for (let i = 0; i < result.length; i++) {
        if (result[i] === maxNum) answer.push(i + 1);
    }
    
    return answer;
}