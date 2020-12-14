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

const friends = ['Micheal', 'Steven', 'Peter'];

const newLength = friends.push('Jay');

console.log(newLength);

friends.unshift('John');

console.log(friends);

const popped = friends.pop();
console.log(popped);

console.log(friends);

const shifted = friends.shift();
console.log(shifted);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Bob'));








































































