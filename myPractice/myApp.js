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
        this.isHungry = isHungry;
    } 

    eat () {
        if(this.isHungry) {
            this.isHungry = false;
        } else {
            console.log("Ugh, I'm so full.");
        }
    }
}