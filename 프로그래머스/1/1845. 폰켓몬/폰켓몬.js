function solution(nums) {
    const uniqNum = new Set(nums);
    if (uniqNum.size <= nums.length / 2) {
        return uniqNum.size;
    } else {
        return nums.length / 2;
    }
}