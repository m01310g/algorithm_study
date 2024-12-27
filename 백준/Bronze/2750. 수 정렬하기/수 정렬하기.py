from sys import stdin

n = int(stdin.readline())

S = list(int(stdin.readline().rstrip()) for _ in range(n))
S.sort()

for i in range(n):
    print(S[i])