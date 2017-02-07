import random

# print random.random()

def coin_tosses():
    heads = 0
    tails = 0
    for num in range(1,5001):
        outcome = round(random.random())
        if outcome == 0:
            heads+=1
            print "Throwing a coin... It's a head! ... Got " + str(heads) + " head(s) so far and " +str(tails) + " tail(s) so far"
        if outcome == 1:
            tails+=1
            print "Throwing a coin... It's a tail! ... Got " + str(heads) + " head(s) so far and " +str(tails) + " tail(s) so far"

coin_tosses()
