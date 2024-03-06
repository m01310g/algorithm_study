def solution(s):
    stack = []
    isVPS = True
    
    for i in s:
        if i == '(':
            stack.append(i)
        elif i == ')':
            if stack:
                stack.pop()
            else:
                isVPS = False
                break
    if not stack and isVPS:
        return True
    else:
        return False