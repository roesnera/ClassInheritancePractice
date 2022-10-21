
class Country {
    //creates instance of Country with properties name, population, and numPopulation
    constructor(name, population, numPopulation) {
        this.name = name;
        this.population = population;
        this.numPopulation = numPopulation;
    }

    //increments numPopulation by 1
    countNewPop() {
        this.numPopulation++;
    }
}

class City extends Country {
    //creates instance of City with Country properites plus size, an array of strings
    constructor(name, population, numPopulation, size) {
        super(name, population, numPopulation);
        this.size = size;
    }
}

class County extends Country {
    //creates instance of County with Country properties plus isRich, a boolean value
    constructor(name, size, numPopulation, isRich = true) {
        super(name, size, numPopulation);
        this.isRich = isRich;
    }

    //County needs fund if they are poor.  If they are rich, changes isRich to True, if they are  Rich, prints message to console.
    rich() {
        if(this.isRich) {
            this.isRich = true;
        } else {
            console.log('County needs fund!')
        }
    }
}

//below we will test our classes by instantiating them, calling each method, and verifying output

//create instances of each class
let country = new Country('USA', 330, 0); // Population in Millions
let city = new City('Denver', 0.5, 5000, 154); // Population in Millions and size in sq mil
let county = new County('Boulder', 338000, 740, true); // size in sq mil

//log each instance
console.log(country);
console.log(city);
console.log(county);

//call the method from the parent class to ensure it works as expected
country.countNewPop();
city.countNewPop();
county.countNewPop();

//log the objects after calling .numPopulation() to verify it worked as intended
console.log(Country);
console.log(City);
console.log(County);

//call .rich()
county.rich();

//check that .rich() when isRich == true works as expected
console.log(county);

//check that .rich() when isRich == false works as expected
county.rich();