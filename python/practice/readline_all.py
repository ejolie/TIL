f = open('./test.txt', 'r')
while True:
    line = f.readline()
    if not line: # None
        break
    print(line)
f.close()
