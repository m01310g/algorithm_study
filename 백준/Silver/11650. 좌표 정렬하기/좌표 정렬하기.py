from sys import stdin, stdout

n = int(stdin.readline())

coords = list()
for _ in range(n):
    x, y = map(int, stdin.readline().split())
    coords.append([x, y])

coords.sort()

for i in range(n):
    print(coords[i][0], coords[i][1])