def upper_generator(x):
    for i in x:
        yield i.upper()

fruits = ['apple', 'pear', 'grape', 'pineapple', 'orange']
for i in upper_generator(fruits):
    print(i)
