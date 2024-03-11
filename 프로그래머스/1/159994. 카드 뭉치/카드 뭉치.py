def solution(cards1, cards2, goal):
    answer = ''
    n = len(cards1)
    m = len(cards2)
    stack = []
    
    i = j = 0
    
    for word in goal:
        if i < n and word == cards1[i]:
            stack.append(cards1[i])
            i += 1
        elif j < m and word == cards2[j]:
            stack.append(cards2[j])
            j += 1
    
    if stack == goal:
        answer = 'Yes'
    else:
        answer = 'No'
    return answer