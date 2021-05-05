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

