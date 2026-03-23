"""
NAME

name = input("Name: ")

print(f"Hello, {name}!")
"""

"""
CONDITIONS

n = int(input("Number: "))

if n > 0:
    print("n is positive")
elif n < 0:
    print("n i negative")
else:
    print("n is zero")
"""

"""SEQUENCE

name = ["Harry", "Ron", "Hermione"]

for i in name:
    print(i)
"""
##############################
"""LISTS

names = ["Harry", "Ron", "Hermione", "Ginny"]

print(names)

names.append("Draco")

print(names)
"""
###########################
"""SETS
s = set()

s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(3)


print(s)

print(f"The set has {len(s)} elements.")
"""
##################################

"""LOOPS"""
"""
for i in range(6):
    print(i)

names = ["Harry", "Ron", "Hermion"]

for name in names:
    print(name)

name = "Harry"

for letter in name:
    print(letter)
"""
##############################################################################

"""DICTIONARIES"""
"""
houses = {"Harry": "Gryffindor", "Draco": "Slytherin"}

houses["Hermione"] = "Gryffindor"

print(houses["Hermione"])
"""

"""FUNCTIONS"""


def square(x):
    return x * x


"""CLASSES"""

"""
class Flight:
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    def open_seats(self):
        return self.capacity - len(self.passengers)


flight = Flight(3)

people = ["Harry", "Ron", "Hermione", "Ginny"]
for person in people:
    if flight.add_passenger(person):
        print(f"Added {person} to flight succesfully!")
    else:
        print(f"No available seats for {person}")
"""

"""DECORATORS"""

"""
def announce(f):
    def wrapper():
        print("About to run function...")
        f()
        print("Done with the function.")

    return wrapper


@announce
def hello():
    print("HEllo, wolrd.")


hello()
"""

"""LABMDA"""
"""
people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"},
]


people.sort(key=lambda person: person["name"])

print(people)
"""


"""EXCEPTIONS"""
import sys

try:
    x = int(input("X: "))
    y = int(input("Y: "))
except ValueError:
    sys.exit("Error: invalid input")

try:
    result = x / y
except ZeroDivisionError:
    sys.exit("Error: Cannot divide by 0.")

print(result)
