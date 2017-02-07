#pair: Arnold Son, Ray Pangilinan
from random import randint

def scores_and_grades():
    for num in range(1,11):
        grade = randint(60,100)
        letter = "D"
        if grade > 69 and grade < 80:
            letter = "C"
        if grade > 79 and grade < 90:
            letter = "B"
        if grade > 89:
            letter = "A"
        print "Score: "+str(grade)+"; Your grade is "+ letter

scores_and_grades()
