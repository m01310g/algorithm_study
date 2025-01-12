h, m = map(int, input().split())

total = h * 60 + m
total -= 45

if total >= 24 * 60:
    total -= 24 * 60
elif total < 0:
    total += 24 * 60

print(total // 60, total % 60)