def prohibited_numbers(c, n):
    if (c % 13 != 0 and c % 23 != 0 and n % 13 != 0 and n % 23 != 0):
        return "La direccion calle {} # {} no esta prohibida".format(c, n)
    else:
        return "La direccion calle {} # {} esta prohibida".format(c, n)


print(prohibited_numbers(25, 46))
