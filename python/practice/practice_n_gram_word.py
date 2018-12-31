n = int(input())
text = input()
words = text.split()

if len(words) < n:
    print('wrong')
else:
    for i in range(len(words) - n + 1):
        for j in range(n):
            print(words[i+j], end=' ')
        print()
