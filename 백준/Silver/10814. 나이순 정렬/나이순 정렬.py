from sys import stdin

n = int(stdin.readline().rstrip())

members = list(stdin.readline().split() for _ in range(n))

members_sorted = sorted(members, key=lambda x: int(x[0]))

for i in range(n):
    print(members_sorted[i][0], members_sorted[i][1])