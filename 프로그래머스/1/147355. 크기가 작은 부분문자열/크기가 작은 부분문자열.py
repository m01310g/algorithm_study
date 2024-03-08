def solution(t, p):
    answer = 0
    t_len = len(t)
    p_len = len(p)
    p = int(p)

    for i in range(t_len - p_len + 1):
        tmp = int(t[i:i+p_len])
        if tmp <= p:
            answer += 1
    return answer