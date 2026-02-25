function solution(people, limit) {
    var answer = 0;
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    
    people.sort((a, b) => b - a);
    
    while(left <= right) {
        if (people[left] + people[right] <= limit) right--;
        left++;
        count++;
    }
    
    answer = count;
    return answer;
}