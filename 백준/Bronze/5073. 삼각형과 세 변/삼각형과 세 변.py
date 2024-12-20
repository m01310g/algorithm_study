while True:
    a, b, c = map(int, input().split())
    if a == b == c == 0:
        break
    if a + b <= c or a + c <= b or b + c <= a:
        print('Invalid')
    elif a == b == c:
        print('Equilateral')
    elif a == b or a == c or b == c:
        print('Isosceles')
    else:
        print('Scalene')