f = open('./test.txt', 'a')
for i in range(11, 20):
    data = '%d번째 줄입니다.\n' % i
    f.write(data)
f.close()
