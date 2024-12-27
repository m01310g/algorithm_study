from sys import stdin

num = stdin.readline().rstrip()
num = sorted(list(num), key=int, reverse=True)

for i in num:
    print(i, end='')