// Chapter 2 JS Essentials

// This a page of various stuff to know in Js

// The code below gives us random numbers including decimals
console.log(Math.random() * 100);

// The code below gives us random numbers without decimals
console.log(Math.floor(Math.random() * 100));

console.log("john");

/* this is a multiline comment in js, the comment will
keep running until I place */

/* The code below shows us two ways of the using the 
typeof operator */

testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof testVariable;
console.log(variableTypeTest1);
console.log(variableTypeTest2);

// Converting data types. Done automatically here by JS
/* We use built in functions to convert the data types of 
of our variables */

/* The code below shows us JS changes the string to a 
number, must be careful with this one as if we use the 
+ sign to add numbers it will concatenate instead. */

let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);

/* Below are examples of functions that convert data
types, notice the capital letters !*/

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

/* Below are a couple of converter functions that the 
book says I need to know well. For when I want to convert
a string to 0 when it is empty or null */

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr2 = "";
strToNr = Number(strToNr2);
console.log("empty string", strToNr, typeof strToNr2);

let strToNr3 = "hello";
strToNr3 = Number(strToNr3);
console.log(strToNr3, typeof strToNr3);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool3 = "";
strToBool3 = Boolean(strToBool3);
console.log(strToBool3, typeof strToBool3);

let nr3 = 2;
let nr4 = "2";
console.log(nr1 + Number(nr2));

// Exercise 2.1 (page 32)

let str1 = "Laurence";
console.log(str1, typeof str1);

let str2 = "Svekis";
console.log(str2, typeof str2);

let val1 = undefined;
console.log(val1, typeof val1);

let val2 = null;
console.log(val2, typeof val2);

let myNum = 1000;
console.log(myNum, typeof myNum);

// Exercise 2.2

let myName = "John";
let age = 48;
let js = "yes";
console.log(
  "Hello, my name is " +
    myName +
    " I am " +
    age +
    " years old and I can code Javascript: " +
    js
);

// Assignment Operators
let x = 2;
x += 2;
console.log(x);

x -= 2;
console.log(x);

x *= 6;
console.log(x);

x /= 3;
console.log(x);

x **= 2;
console.log(x);

x %= 3;
console.log(x);

// Exercise 2.4

let a = 4;
let b = 11;
let c = 21;
// a = a + b;
// a = a / c;
// c = c % b;
console.log(a, b, c);

/*Comparison Operators, first one loose equality, that
is check for equal value. The second one below it with
three = signs checks for strict equality, that is value
and type. The same logic applies to the not equal operator.
For instance console.log(z != t); checks for loose equality
and (z !== t) checks for strict equality */

let z = 5;
let t = "5";
console.log(z == t);

console.log(z === t);

// Next up is logical operators and (&&) or (||) not (!).
// Also, greater than (>) and less than (<).

// Chapter 3 Projects

// Miles to KM Converter Exercise
let miles = 130;
let mileToKmRatio = 1.60934;
let kmTravel = miles * mileToKmRatio;
console.log(
  "The distance of " +
    miles +
    " miles" +
    " is equal to " +
    kmTravel +
    " kilometers"
);

/* Miles to Km from the book, done differently but 
works the same */

//Convert miles to kilometers.
//1 mile equals 1.60934 kilometers.
let myDistanceMiles = 130;
let myDistanceKM = myDistanceMiles * 1.60934;
console.log(
  "The distance of " +
    myDistanceMiles +
    " miles is equal to " +
    myDistanceKM +
    " kilometers"
);

// BMI Exercise

let inches = 72;
let inchToCm = 2.54;
let inchToCmCalc = inches * inchToCm;
console.log(inchToCmCalc);

let squaredHeightInM = (inchToCmCalc * 2) / 100;
console.log(squaredHeightInM);

let pounds = 180;
let poundsToKiloRatio = 2.2046;
let poundsToKiloCalc = pounds * poundsToKiloRatio;
console.log(poundsToKiloCalc);

let bmi = poundsToKiloCalc / squaredHeightInM;
console.log(bmi);

/* BMI Exercise from the book, works the same as mine
just done a different way! */

//1 inch = 2.54 centimeters.
//2.2046 pounds in a kilo
let inches1 = 72;
let pounds1 = 180;
let weight = pounds1 / 2.2046; // in kilos
let height = inches1 * 2.54; // height in centimetres
console.log(weight, height);
let bmi1 = weight / (((height / 100) * height) / 100);
console.log(bmi);

// Prefix and Postfix Operators (See page 36)

let nr = 2;
console.log(nr++);
console.log(nr);

// let nr = 2;
// console.log(++nr);
