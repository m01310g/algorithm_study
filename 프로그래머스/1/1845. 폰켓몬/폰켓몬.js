function solution(nums) {
    const uniqNum = new Set(nums)
    const answer = Math.min(uniqNum.size, nums.length/2)
    return answer;
}