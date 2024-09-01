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

// Chapter 3

// Exercise 3.1

const shoppingList = ["milk", "Bread", "apples"];
console.log(shoppingList);
console.log(shoppingList.length);
shoppingList[1] = "bananas";
console.log(shoppingList);

// Exercise 3.2

const list = ["milk", "bread", "apples"];
list.push("bananas", "eggs");
list.pop();
console.log(list);
list.sort();
console.log(list);
console.log(list.indexOf("milk"));
console.log(list);
list.splice(2, 0, "carrots", "lettuce");
console.log(list);
let newList = shoppingList.concat(list);
console.log(newList);
console.log(newList.indexOf("carrots"));

const anotherArray = [1, 2, 3];
const nestedArray = [anotherArray, anotherArray, anotherArray];
console.log(nestedArray);
