class Plant {
    constructor(commonName, latinName) {
        this._commonName = commonName;
        this._latinName = latinName;
        this._isWatered = false;
    }

    get commonName() {
        return this._commonName;
    }

    get latinName() {
        return this._latinName;
    }

    get isWatered() {
        return this._isWatered;
    }

    water() {
        this._isWatered = !this._isWatered;
    }
}

class Flower extends Plant {
    constructor(commonName, latinName, flowerColor) {
        super(commonName, latinName);
        this._flowerColor = flowerColor;
    }
}

class Vegetable extends Plant {
    constructor(commonName, latinName, daysToMaturity) {
        super(commonName, latinName);
        this._daysToMaturity = daysToMaturity;
    }

    get daysToMaturity() {
        return this._daysToMaturity;
    }

    set daysToMaturity(days) {
        if (typeof days !== 'number') {
            console.log('Please enter a number!')
        } else {
            this._daysToMaturity = days;
        }
    }

    readyToHarvest(daysFromPlanting) {
        if (this.daysToMaturity - daysFromPlanting > 10) {
            return 'Your veggies are growing, patience!'
        } else if (this.daysToMaturity - daysFromPlanting > -5) {
            return 'Go check your veggies, harvest should be about ready!'
        } else {
            return 'the harvest is overdue...go see if there is anything left.'
        }
    }
}

const rose = new Flower('Rose', 'Rosa', 'Red');
const tomato = new Vegetable('Tomato', 'Solanum lycopersicum', 75);
tomato.water();
rose.water();
console.log(tomato.isWatered);
console.log(rose.isWatered);
console.log(tomato.readyToHarvest(34));
console.log(tomato.readyToHarvest(77));
console.log(tomato.readyToHarvest(100));
tomato.water();
rose.water();
console.log(tomato.isWatered);
console.log(rose.isWatered);

