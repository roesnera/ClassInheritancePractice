class Aircraft {
  constructor(model, type, crew) {
    this.model = model;
    this.type = type;
    this.crew = crew;
  }

  //Add to the flight crew array
  addCrew(crewman) {
    this.crew++;
  }
}

//another aircraft that extend parent class
class PassangerPlane extends Aircraft {
  constructor(model, type, crew, flightHours) {
    super(model, type, crew);
    this.flightHours = flightHours;
  }
}

class FighterJet extends Aircraft {
  constructor(model, type, crew, flightHours, armed) {
    super(model, type, crew, flightHours);
    this.flightHours = flightHours;
    this.armed = armed;
  }
  hasArmament() {
    if (this.armed) {
        
        this.armed = false;
    } else {
        this.armed = true;
    }
  }
}

//Testing class
let aircraft = new Aircraft("747", "Fraight", 2);
let airliner = new PassangerPlane("777", "Passanger Plane", 3, 3000);
let fighter = new FighterJet("F/A-18", "Fighter Jet", 1, 220, true);

//log each instance
console.log(aircraft);
console.log(airliner);
console.log(fighter);

//call the method from the parent class 
    airliner.addCrew(2);
    fighter.addCrew(1);
    aircraft.addCrew(3);

//log the objects after calling
console.log(aircraft);
console.log(airliner);
console.log(fighter);

//call is armed
fighter.hasArmament();
console.log("The arcraft is Armed: " + fighter.armed);
fighter.hasArmament();
console.log("The aircraft Armed: " + fighter.armed);