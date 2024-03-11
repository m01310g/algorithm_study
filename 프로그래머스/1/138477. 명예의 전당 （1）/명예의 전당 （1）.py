def solution(k, score):    
    answer = []
    lst = []
    for s in score:
        lst.append(s)
        if len(lst) > k:
            lst.remove(min(lst))
        answer.append(min(lst))
    return answer