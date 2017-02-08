def draw_stars(list):
    for items in list:
        string = ""
        for num in range(0, items):
            string+="*"
            if num == items-1:
                print string

# x = [4, 6, 1, 3, 5, 7, 25]

# draw_stars(x)

def draw_stars2(list):
    for items in list:
        if type(items)==int:
            string = ""
            for num in range(1, items+1):
                string+="*"
                if num == items:
                    print string

        if type(items)==str:
            string = ""
            for num in range(1, len(items)+1):
                string+=items[0]

                if num == len(items):
                    print string.lower()

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

draw_stars2(x)
