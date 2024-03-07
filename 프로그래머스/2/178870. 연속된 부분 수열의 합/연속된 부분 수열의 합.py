def solution(sequence, k):
    answer = []
    left, right = 0, 0
    tmp = sequence[0]
    min_len = 1000001
    while left <= right < len(sequence):
        if tmp == k:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                answer = [left, right]
            tmp -= sequence[left]
            left += 1
        elif tmp < k:
            right += 1
            if right < len(sequence):
                tmp += sequence[right]
        elif tmp > k:
            tmp -= sequence[left]
            left += 1
            
    return answer