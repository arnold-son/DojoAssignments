students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

# def names_partI(list):
#     for dic in list:
#         print dic['first_name']+ " " + dic['last_name']

# names_partI(students)

def names_partII(dic):
    for key,val in users.items():
        print key
        i = 1
        for sdic in val:
            i2 = 0
            name = str(i)+" - "
            for skey,sval in sdic.items():
                name+=sval + " "
                i2+=1
                if i2 == len(sdic.items()):
                    name+="- "+str(len(name)-6)
                    print name.upper()
                    i+=1
                # print len(sdic.items())


names_partII(users)
