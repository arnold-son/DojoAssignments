#pair work with Ray Pangilinan

def odd_or_even():
    for num in range(1,2001):
        print num
        if num % 2 == 0:
            print "This is an even number"
        else:
            print "This is an odd number"

# odd_or_even()

def multiply(list,num):
    newlist =[]
    for item in list:
        newlist.append(item*num)
    return newlist

a = [2, 4, 10, 16]
# print multiply(a,5)

print multiply([2,4,5],3)

def hacker_challenge(multiply):
    list = []
    for item in multiply:
        sublist = []
        for num in range(1,item+1):
            sublist.append(1)
            if num == item:
                list.append(sublist)
    print list

hacker_challenge(multiply([2,4,5],3))
