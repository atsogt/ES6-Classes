//Lecture: Classes
///////////////
//ES5
/*
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calcAge = function(yearOfBirth) {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var anand5 = new Person("Anand", 1994, "Software Engineer");

anand5.calcAge();

//ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

const anand6 = new Person6("Anand", 1994, "Animator");

anand6.calcAge();
console.log(anand6);
*/

//////////////////////////////////
// Lecture: Subclasses
/*

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calcAge = function(yearOfBirth) {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5("John", 1992, "swimmer", 3, 11);

johnAthlete5.calcAge();
johnAthlete5.wonMedal();

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}
class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const anandAthlete6 = new Athlete6("Anand", 1994, "swimmer", 3, 12);

// console.log(anandAthlete6);
anandAthlete6.wonMedal();
anandAthlete6.calcAge();
// console.log(anandAthlete6);
*/

///////////////////////
// Coding Challenge

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has the tree density of ${density} per sq km`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    //hash map
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, built in ${
        this.buildYear
      } is the size of ${classification.get(this.size)} street`
    );
  }
}

const allParks = [
  new Park("Green", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949)
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen Street", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8),
  new Street("Sunset Boulevar", 1982, 2.5, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("------ALL PARKS-----");

  //Density
  p.forEach(el => el.treeDensity());

  //Average Age

  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  //More than 1000 trees
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
  console.log("------ALL STREETS-----");

  //Total and average length of town's streets
  const [totalLength, averageLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${
      s.length
    } streets have the length of ${totalLength}, with an average of ${averageLength}`
  );
  //Classify Sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
