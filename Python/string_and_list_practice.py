def find_and_replace():
    str = "If monkeys like bananas, then I must be a monkey!"
    print str.find("monkey")
    print str.find("monkey",str.find("monkey")+1)
    str2 = str.replace("monkey","alligator")
    print str2

# find_and_replace()

def min_and_max(list):
    print min(list),max(list)

# min_and_max([1,2,3,4,5])

def first_and_last(list):
    print list[0], list[len(list)-1]

first_and_last([1,2,3,4,5])

x = [19,2,54,-2,7,12,98,32,10,-3,6]
def new_list(list):
    list.sort()
    y = x[:2]
    list = list[2:]
    list.insert(0,y)
    print list

new_list(x)
