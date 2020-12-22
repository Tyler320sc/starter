'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'audio';
// const private = 437;

// function logger() {
//   console.log('My name is Jonas');
// }
// // calling, running, invoking
// logger();
// logger();
// logger();

// function fruitProcessor(numApples, numOranges = 1) {
// // console.log(numApples, numOranges);
// const juice = `Juice with ${numApples} apples and ${numOranges} oranges.`
// return juice;
// }
// const juiceTime = fruitProcessor(5, 0);
// console.log(juiceTime);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const healthJuice = fruitProcessor(1);
// console.log(healthJuice);




// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// const calcAge2 = function(birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);


// Arrow functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age3);

//   const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`;
//   }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// functions calling functions

//  function cutFruitPieces(fruit) {
//    return fruit * 4;
//  }

// function fruitProcessor(apples, oranges) {

// const applePieces = cutFruitPieces(apples);

// const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));


//  const calcAge = function(birthYear) {
//    return 2037 - birthYear;
//  }

// const yearsUntilRetirement = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1970, 'John'));

// console.log(yearsUntilRetirement(1991, 'Jonas'));


// const dolphins = (44 + 23 + 71) / 3;

// const koalas = (65 + 54 + 49) / 3;


// const scoreDolphins = calcAverage(84, 54, 41);

// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinners(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}.`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}.`);
//   } else {
//     console.log(`No team wins!`);
//   }
// }
// checkWinners(scoreDolphins, scoreKoalas);


// const friend = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];

// console.log(friends);

// const years = new Array(1991, 3184, 1208, 1892);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';

// const jonas = 
// [firstName, 
// 'Smedtmann', 
// 2037 - 1991,
// 'teacher', 
// friends];

// console.log(jonas);



// Exerise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1);
// console.log(age2);
// console.log(age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// const ages = new Array(calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]));

// console.log(ages);

// const friends = ['Micheal', 'Steven', 'Peter'];

// const newLength = friends.push('Jay');

// console.log(newLength);

// friends.unshift('John');

// console.log(friends);

// const popped = friends.pop();
// console.log(popped);

// console.log(friends);

// const shifted = friends.shift();
// console.log(shifted);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Bob'));


// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// calcTip();

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);


// const total1 = bills[0] + tips[0];

// const total2 = bills[1] + tips[1];

// const total3 = bills[2] + tips[2];


// Inro to Objects

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Micheal', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);

// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Invalid request! Choose between firstName, lastName, age, job, and friends please.');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasSmedtman';
// console.log(jonas);

// // Challenge that I nailed!!!

// const jonasBestie = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`;

// console.log(jonasBestie);



// Object Methods Overview

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Micheal', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   calcAge: function() {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   challenge: function() {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }

// };
// jonas.calcAge();

// console.log(jonas.challenge());


// jonas.age;
// console.log(jonas.age);
// console.log(jonas.age);

// Third challenge

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }
// console.log(mark.calcBMI());

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// }
// console.log(john.calcBMI());

// if (mark.bmi > john.bmi) {
//   console.log(`${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName} BMI ${mark.bmi}. `);
// } else {
//   console.log(`${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName} BMI ${john.bmi}. `);
// }

// Intro to Loops


// for (let i = 1; i <= 10; i ++) {
//   console.log(`Lifting weights repetition ${i}`);
// };


// const jonasArr = ['Jonas', 'Scmedtmann', 2037 - 1991, 'teacher', ['Micheal', 'Peter', 'Steven'], true];

// const types = [];

// for (let i = 0; i < jonasArr.length; i++) {
//   console.log(jonasArr[i], typeof jonasArr[i]);

  // types[i] = typeof jonasArr[i];

//   types.push(typeof jonasArr[i]);
// }
// console.log(types);

// // Same as this above on ln 337

// // types[0] = 'string';

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);


// console.log('ONLY STRINGS');

// for (let i = 0; i < jonasArr.length; i++) {
//   if ( typeof jonasArr[i] !== 'string') continue;
//   console.log(jonasArr[i], typeof jonasArr[i]);
// }


// console.log('break statements');

// for (let i = 0; i < jonasArr.length; i++) {
//   if ( typeof jonasArr[i] === 'number') break;
//   console.log(jonasArr[i], typeof jonasArr[i]);
// }

// for (let rep = 1; rep <= 10; i++) {
//   console.log(`Lifting weights ${rep}`);
// }

// looping

// const jonas = 
// [
//   'Jonas',
//  'Schmedtmann',
//   2037-1991,
//  'teacher',
//   ['Micheal',
//   'Peter',
//   'Steven']
//   ];

  // for (let rep = 1; rep <= 10; rep++) {
  //   console.log(`Lifting weights ${rep}`);
  // }

// let rep = 1;

// while (rep <= 10) {
//   console.log(`Lifting weights ${rep}`);
//   rep++;
// }

// While Loops

// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// calcTip();

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];

// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

// console.log(tips);
// console.log(totals);

// const calcAverage = arr => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calcAverage(totals));




 function calcAge(birthYear) {
   const age = 2037 - birthYear;
   console.log(firstName);

    function printAge() {
      let outPut = `${firstName} You are ${age}, born in ${birthYear}.`;
      console.log(outPut);

        if (birthYear >= 1981 && birthYear <= 1996) {
          var millenial = true;
          const firstName = 'Steven';
          const str = `Oh, and your a millenial, ${firstName}`;
          console.log(str);

            function add(a, b) {
              return a+b;
            }
            outPut = 'New output';
        }
        console.log(millenial);
        console.log(add(2, 3));
    }
    printAge();

   return age;

  //  const myKid = `Joe`;
 }

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// console.log(myKid);















































