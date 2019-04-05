f = open('test.txt', 'r')
str = f.read()
f.close()

str = str.replace('java', 'python')

f = open('test.txt', 'w')
f.write(str)
f.close()
