function solution(people, limit) {
    let count = 0;
    let left = 0;
    let right = people.length - 1;
    
    people.sort((a, b) => b - a);
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            right--;
        }
        
        left++;
        count++;
    }
    
    return count;
}