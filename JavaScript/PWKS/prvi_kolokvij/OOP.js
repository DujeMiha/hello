// Object literal
/*
const book1 = {
  title: "Book One",
  author: "John Doe",
  year: 2013,

  getsummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getsummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));

// Constructors ----------------------------

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.getsummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

const book1 = new Book("Book One", "John Doe", 2013);
const book2 = new Book("Book Two", "Jane Doe", 2016);

console.log(book1.getsummary());
console.log(book1.getAge());
*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be postivie Number");
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be postivie Number");
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }
  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  set firstname(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be non-empty string");
    }
  }

  set lastname(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get firstname() {
    return this._firstName;
  }

  get lastname() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }
}

const person = new Person("Duje", "Mihaljevic", 23);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
