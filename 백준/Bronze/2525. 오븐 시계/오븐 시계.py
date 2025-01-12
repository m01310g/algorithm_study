h, m = map(int, input().split())
c = int(input())

total = h * 60 + m + c

if total >= 24 * 60:
    total -= 24*60

print(total // 60, total % 60)