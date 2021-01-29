class University {
    //creates instance of University with properties name, city, and ranking
    constructor(name, country, ranking, numStudents) {
        this.name = name;
        this.country = country;
        this.ranking = ranking;
        this.numStudents = numStudents;

    }

    //increments numStudents by 1
    MoreStudents() {
        this.numStudents++;
    }
}

class Public_University extends University {
    //creates instance of Public_University with University properites plus Careers an array of strings
    constructor(name, country, ranking, numStudents, Careers) {
        super(name, country, ranking, numStudents);
        this.Careers = Careers;
    }
}

class Private_University extends University {
    //creates instance of Private_University with University properties plus DoubleMajor, a boolean value
    constructor(name, country, ranking, numStudents, DoubleMajor = true) {
        super(name, country, ranking, numStudents);
        this.DoubleMajor = DoubleMajor;
    }

     //Offer double major.  If the University offer a double major, changes DoubleMajor to false, if they don't offer double major, prints message to console.
     OtherMajor() {
        if(this.DoubleMajor) {
            this.DoubleMajor = false;
        } else {
            console.log('We are sorry. We do not offer double major in our careers')
        }
    }
}

//Testing the classes by instantiating them, calling each method, and verifying output
//Database https://www.timeshighereducation.com/impactrankings#!/page/0/length/25/sort_by/rank/sort_order/asc/cols/undefined

//creating instances of each class
let university = new University('University of Auckland', 'New Zeland', 1, 42000);
let public_university = new Public_University('University of São Paulo', 'Brazil',  14, 82000, ['Art & Humanities', 'Clinical, Pre-Clinical & Health', 'Engineering &Technology', 'Life Sciences', 'Social Sciences', 'Physical Sciences']);
let private_university = new Private_University('Arizona State University (Tempe)', 'United States', 5, 45000, true);

//logging each instance
console.log(university);
console.log(public_university);
console.log(private_university);

//calling the method from the parent class to ensure it works as expected
university.MoreStudents();
public_university.MoreStudents();
private_university.MoreStudents();

//logging the objects after calling .MoreStudents() to verify it worked as intended
console.log(university);
console.log(public_university);
console.log(private_university);

//calling .OtherMajor()
private_university.OtherMajor();

//checking that .DoubleMajor() when DoubleMajor == true works as expected
console.log(private_university);

//checking that .OtherMajor() when DoubleMajor == false works as expected
private_university.OtherMajor();