/* This was a Generation class project to show our understanding of class inheritance. Each of the books can get a star or poop pile based on the rating. But only the memoir category can be given a thumbs up or down based on whether the audiobook is read by the author. */

class ToRead {
    constructor(title, author, rating) {
        this.title = title;
        this.author = author;
        this.rating = rating;
    }

    addStar(){
        if(this.rating > 3){
        console.log(`${this.title} ⭐`);
    } else {
        console.log(`${this.title} 💩`);
        }
     }
    }
class Memoir extends ToRead {
    constructor(title, author, rating, audioReadByAuthor = true) {
        super(title, author, rating);
        this.audioReadByAuthor = audioReadByAuthor;
    }
    thumbs() {
        if(this.audioReadByAuthor){
            this.audioReadByAuthor = true;
            console.log(`${this.title} is read by the author! 👍🏻 Heck yes! Let's listen!`)
        } else {
            console.log(`${this.title} is read by a narrator. 👎🏻 Boo. Best to skip this one.`)
        }
    }
}

class comingOfAge extends ToRead {
    constructor(title, author, rating, decadeSet) {
        super(title, author, rating, decadeSet);
        this.decadeSet = decadeSet;
    }
}

let memoir = new Memoir('Born a Crime', 'Trevor Noah', '4', true);
let memoir2 = new Memoir('A Million Little Pieces', 'Jame Frey', '1', false);
let cOfAge = new comingOfAge('A Tree Grows in Brooklyn', 'Betty Smith', '4', '1910');

console.log(memoir);
console.log(memoir2);
console.log(cOfAge);

memoir.addStar();
memoir2.addStar();
cOfAge.addStar();

console.log(memoir);
console.log(memoir2);
console.log(cOfAge);

memoir.thumbs();
memoir2.thumbs();