from queue import Queue

class node:
	def __init__(self, val, level):
		self.val = val
		self.level = level

def minOperations(x, y):
	visit = set()
	q = Queue()
	n = node(x, 0)
	q.put(n)

	while not q.empty():
		t = q.get()

		if t.val == y:
			return t.level
		elif t.val * 2 == y or t.val - 1 == y:
			return t.level + 1

		visit.add(t.val)
		
		if t.val * 2 not in visit:
			n.val = t.val * 2
			n.level = t.level + 1
			q.put(n)

		if t.val - 1 >= 0 and t.val - 1 not in visit:
			n.val = t.val - 1
			n.level = t.level - 1
			q.put(n)