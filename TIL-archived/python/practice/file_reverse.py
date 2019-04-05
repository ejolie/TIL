with open('abc.txt', 'r') as f:
	lines = f.readlines
	lines.reverse()
	for line in lines:
		line = line.strip()
		f.write(line)
		f.write('\n')
