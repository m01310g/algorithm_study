def solution(nums):
    uniqNum = list(set(nums))
    answer = min(len(uniqNum), len(nums)/2)
    return answer