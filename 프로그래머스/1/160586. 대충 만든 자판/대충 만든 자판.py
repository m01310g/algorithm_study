def solution(keymap, targets):
    answer = []
    key_dict = {}
    
    for key in keymap:
        for i in range(len(key)):
            if key[i] not in key_dict or key_dict[key[i]] > i:
                key_dict[key[i]] = i + 1
    for target in targets:
        cnt = 0
        n = True
        for t in target:
            if t not in key_dict:
                answer.append(-1)
                n = False
                break
            cnt += key_dict[t]
        if n:
            answer.append(cnt)
    return answer
            