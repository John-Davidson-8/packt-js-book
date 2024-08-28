// Extra Exercises Done again ch. 1-5.
let str1 = "Laurence";
console.log("str", typeof str1);
let str2 = "Skekis";
console.log("Svekis", typeof str2);
let val1 = undefined;
console.log(typeof val1);
let val2 = null;
console.log(typeof val2);
let myNum = 1000;
console.log(typeof myNum);

// Ex 2.2
myName = "john";
myAge = 49;
code = true;
console.log(
  `my name is ${myName} and my age is ${myAge} and can I code?: ${code}`
);

// Ex 2.4
let a = 2;
let b = 5;
let c = 10;
let newNum = (b = a);
let newNum2 = a / c;
let newNum3 = c % b;
console.log(newNum, newNum2, newNum3);

// Chapter 2 Project

// let miles = 25;
// let kmConvert = miles * 1.60934;
// console.log(`The distance of ${kmConvert} kms is equal to ${miles} miles`);

// Define the function
function convertMilesToKm(miles) {
  return miles * 1.60934;
}
// Use the function
let miles = 25;
let kmConvert = convertMilesToKm(miles);

console.log(`the distance of ${kmConvert} kms is equal to ${miles} miles`);

//BMI Calculator
function inchesToCm(inches) {
  return inches * 2.54;
}
function poundsToKg(pounds) {
  return pounds * 2.2046;
}

let inches = 10;
let pounds = 10;

let calc1 = inchesToCm(inches);
console.log(`the height is: ${calc1} cm`);

let calc2 = poundsToKg(pounds);
console.log(`the weight is: ${calc2} kg`);

let calc11 = calc1 * calc1;
console.log(`${calc11} is the height squared`);

let bmi = calc2 / calc11;
console.log(bmi);
