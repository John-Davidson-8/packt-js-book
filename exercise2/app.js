let company = {
  companyTitle: "davidson design",
  activity: [
    "data analysis",
    "web development",
    "javascript training",
    {
      abroad: "mobile development",
      charity: "third sector organizations",
      tax: true,
    },
  ],
  address: {
    street: "Hope Terrace",
    town: "Stornoway",
    postcode: "HS1 2PH",
  },
  apprentices: true,
  startDate: 2024,
  brandColors: ["orange", "blue", "white"],
  buildingColor: "blue",
  employees: 4,
};
console.log(company);
// Access an object property one way. p. 62
let var1 = company["employees"];
console.log(var1);
// Access an object property another way. p. 62
let var2 = company.employees;
console.log(var2);

/* update the value of a properties in objects. Hint, remember how to do it with arrays */
company["employees"] = 56;
console.log(company.employees);
/* Another way of updating the value of properties in objects. Remember the dot! */
company.employees = 8;
console.log(company.employees);

/* We are referring to object properties by literal string values. We can also do this with variables. Assign an object property to a variable, console log the property and then console log the property value. p63 */
let var3 = company["employees"];
console.log(var3);

/*  change the value of the variable to another company property so we access another property */
var3 = "companyTitle";
console.log(company[var3]);
/* update the value of accessed property with var and print to console */
company[var3] = "design";
console.log(company["companyTitle"]);

/* objects in objects */

/* modify the the value of the postcode property inside the address object , which in turn is inside the company object. There are two ways to do this (no extra variables) */
company.address.postcode = "HS1 123";
console.log(company.address.postcode);
/* second way */
company["address"]["postcode"] = "HS1 321";
console.log(company.address.postcode);
/* Now change the street value inside the address object. Use the other way to do this (hint: remember square brackets) */
company.address.street = "faith street";
console.log(company.address.street);
/* Arrays in objects */

/* Fetch the first color in the brandColors array, hint: assign it to a new variable */
console.log(company.brandColors[0]);

/* Objects in arrays and objects in arrays in objects (now learn) */

// Exercise 3.5
people = {
  friends: [],
};
friend1 = {
  firstName: "john",
  lastName: "davies",
  iD: 1,
};
friend2 = {
  firstName: "james",
  lastName: "mason",
  iD: 2,
};
friend3 = {
  firstName: "simon",
  lastName: "turk",
  iD: 3,
};
people.friends.push(friend1, friend2, friend3);
console.log(people);

// Chapter Projects p.68.

// Manipulating an Array

const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];
console.log(theList);

theList.shift();
console.log(theList);
theList.pop();
console.log(theList);
theList[0] = "FIRST";
console.log(theList);
theList[3] = "hello world";
console.log(theList);
theList[2] = "MIDDLE";
console.log(theList);
theList.push("LAST");
console.log(theList);

// Company Product Catalog

const itemList = [];

let item1 = {
  name: "Apple",
  model: "MacBook Pro",
  cost: 2000,
  quantity: 10,
};
let item2 = {
  name: "Dell",
  model: "Desktop",
  cost: 1500,
  quantity: 5,
};
let item3 = {
  name: "Atari",
  model: "Pocket Book",
  cost: 1000,
  quantity: 50,
};
itemList.unshift(item1, item2, item3);
console.log(itemList);
console.log(itemList[2]);
console.log(itemList[0].cost);

/* Self check quiz p.69.
1. yes you can use const for a an array and change the values within it, however you are not allowed to reassign the array itself.
2. length
3. -1, 1.
4. myArr.splice(1, 0, 4);
5. 10 empty elements, undefined.
6. 
*/
const myArr2 = [];
myArr2[10] = "test";
console.log(myArr2);
console.log(myArr2[2]);
