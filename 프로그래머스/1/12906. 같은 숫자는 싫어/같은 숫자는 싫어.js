function solution(arr)
{
    var answer = [];
    const result = [];
    
    result.push(arr[0]);
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) result.push(arr[i]);
    }
    answer = result;
    return answer;
}