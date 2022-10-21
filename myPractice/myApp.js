class Person {
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
    constructor(name, age, numBooksRead, numKnownProgrammingLang) {
        super(name, age, numBooksRead);
        this.numKnownProgrammingLang = numKnownProgrammingLang;
    }
}

class Cook extends Person {
    constructor(name, age, numBooksRead, burnedFood) {
        super(name, age, numBooksRead);
        this.burnedFood = burnedFood;
    } 

    burnt() {
        if(this.burnedFood) {
            this.burnedFood = false;
        } else {
            console.log("Ugh! I burnt the food!");
        }
    }
}

let person = new Person('Alyssa', 22, 10);
let developer = new Developer('Ashley', 30, 5, ['JavaScript', 'JAVA']);
let cook = new Cook('Baylor', 26, 15, true);

console.log(person);
console.log(developer);
console.log(cook);

person.readNewBook();
developer.readNewBook();
cook.readNewBook();

console.log(person);
console.log(developer);
console.log(cook);

cook.burnt();

console.log(cook);

cook.burnt(); 