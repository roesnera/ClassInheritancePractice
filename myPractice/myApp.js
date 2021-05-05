class Person() {
    constructor(name, age, numBooksRead) {
        this.name = name;
        this.age = age;
        this.numBooksRead = numBooksRead;
    }
    readNewBook() {
        this.numBooksRead++;
    }
}

class Developer extends Person {
    constructor(name, age, numBooksRead) {
        super(name, age, numBooksRead);
        this.numKnownProgrammingLang = numKnownProgrammingLang;
    }
}

class Cook extends Person {
    constructor(name, age, numBooksRead) {
        super(name, age, numBooksRead);
        this.burnedFood = burnedFood;
    } 

    burnedFood () {
        if(this.burnedFood) {
            this.burnedFood = false;
        } else {
            console.log("Ugh! I burnt the food!");
        }
    }
}

let person = new Person('Alyssa', 22, 10);
let developer = new Developer('Ashley', 30, 3, ['JavaScript', 'JAVA']);
let cook = new Cook('Persius', 16, 5, true);

//log each instance
console.log(person);
console.log(developer);
console.log(cook);