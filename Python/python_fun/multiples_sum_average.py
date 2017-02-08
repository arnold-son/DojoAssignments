def multiples1():
    for num in range(1,1001):
        if num % 2 != 0:
            print num

# multiples1()

def multiples2():
    # multiple = 5
    # for num in range(1,(1000000/5 + 1)):
    #     print multiple
    #     multiple+=5

    for num in range(1,1000001):
        if num % 5 == 0:
            print num

# multiples2()

def sum_list(list):
    sum = 0
    for item in list:
        sum += item
    print sum

a = [1, 2, 5, 10, 255, 3]


# sum_list(a)

def avg_list(list):
    sum = 0
    for item in list:
        sum += item

    print sum / len(list)

avg_list(a)
