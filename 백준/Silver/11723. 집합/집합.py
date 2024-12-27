from sys import stdin

m = int(stdin.readline())

S = set()
for _ in range(m):
    i = stdin.readline().split()
    calc = i[0]
    if calc in ['add', 'remove', 'check', 'toggle']:
        num = int(i[1])
        if calc == 'add':
            S.add(num)
        elif calc == 'remove':
            S.discard(num)
        elif calc == 'check':
            if num in S:
                print(1)
            else: print(0)
        elif calc == 'toggle':
            if num in S:
                S.remove(num)
            else: S.add(num)
    elif calc == 'all':
        S = set(range(1, 21))
    elif calc == 'empty':
        S.clear()