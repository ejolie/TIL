def number_generator(stop):
    n = 0
    while n < stop:
        yield n
        n += 1

for i in number_generator(3):
    print(i)
