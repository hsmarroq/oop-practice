// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never Create Method inside of Constructor Func
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. Function is called, this = {}
// // 3. {} linked to prototype
// // 4. Function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda);
// console.log(jack);

// console.log(jonas instanceof Person);

// // Prototypes //
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.__proto__.__proto__);

// Coding Challenge #1 //
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h.`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h.`);
// };

// const bmw = new Car('BMW', 120);
// console.log(bmw);
// bmw.accelerate();
// bmw.brake();
// const mercedes = new Car('Mercedes', 95);
// console.log(mercedes);
// mercedes.accelerate();
// mercedes.brake();

// Class Expressions
// const PersonCl = class {};

// Class Declarations
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}!`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Method
//   static hey() {
//     console.log(`Hey there!`);
//     // console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}!`);
// // };
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey();

/*
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },

  get age() {
    return 2037 - this.birthYear;
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name - 'Steven';
steven.birthYear = 2002;
steven.calcAge();
*/

// Coding Challenge #2 //
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h.`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h.`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(currSpeed) {
//     this.speed = currSpeed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate;
// ford.brake;
// ford.speedUS = 50;
// console.log(ford);

// Challenge 3 //
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h.`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h.`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function (speedTo) {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}.`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

// Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}!`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static Method
//   static hey() {
//     console.log(`Hey there!`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }.`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science.');
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an accounr, ${this.owner}!`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Your loan has been approved.`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(150);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
console.log(acc1.pin);
