// Chapter 3, Multiple Values

// Creating Arrays

// Below is the wrong way, it creates an array with 10 undefined values
arr3 = new Array(10);
// Below creates an array with one value the number 10
arr4 = [10];

console.log(arr3);
console.log(arr4);

// Arrays can hold multiple variable types

let arr = ["hi", 5, true];
// Can check each type of data type with the type of operator
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

/* The const keyword ensures that the variable "users" can't be reassigned 
to a new value. It's worth noting, that while const keyword is recommended
for arrays that should not be reassigned */

// Accessing Elements

cars = ["Toyota", "Renault", "VW"];
console.log(cars[0]);
// Below shows undefined as there is no values assigned to "3" or "-1"
console.log(cars[3]);
console.log(cars[-1]);

// Overwriting Elements in an array - see below
cars[0] = "Tesla";
console.log(cars);
console.log(cars[0]);

// What if we overwrite an element that doesn't exist?
cars[3] = "Kia";
// Or a negative number
cars[-1] = "Fiat";
console.log(cars[3]);
console.log(cars[-1]);
/* These suddenly exist, we added to the array, however
this is not the correct way to add element to an array */

// Built-in Length Property
// Arrays have ability to return the number of elements an array has
colors = ["black", "orange", "pink"];
booleans = ["true", "false", "false", "true"];
emptyArray = [];

console.log("Length of colors:", colors.length);
console.log("Length of boolean:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

/* When counting remember the index system! The length is always 
one higher than the maximum index. This is why the max index will
be 3 when the length is 4. The remember the non existent index 
number. The code below shows us this */

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);

/* this code above adds the value 48 to the numbers array. So 
when we ask the question of length of numbers we get 6. The 
length of the array is only counting the integer numbers starting
from 0 up to the highest filled index. If there are elements in the
middle of the sequence that do not have a value, they will still 
get counted. In this case, the length becomes 6. If we log the 
array, we can see why: */

console.log("numbers", numbers);

// Must remember this!!!!!!

// Practice Exercise 3.1
const list = ["Milk", "Bread", "Apples"];
console.log(list.length);
list[1] = "Bananas";
console.log(list);

// Adding and Replacing Elements (p.53)
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
// Tangerine gets added to the end of the array
// Push method returns length of the array like this
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);
console.log(lengthOfFavoriteFruits);

// Splice() Method adds in elements and takes away elements
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

// Concat() Method adds arrays together by creating a new array
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

// Concat() method can also add elements
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

// Deleting Elements using pop()
arr8.pop();
console.log(arr8);

/* Remember splice() - it can also delete elements. We specify the 
index from where we want to start deleting, and then the number of 
elements we want to delete */

// Deleting the first element is done with shift() method
arr8.shift();
console.log(arr8);

/* Remember splice() - it can also delete elements. We specify the 
index from where we want to start deleting, and then the number of 
elements we want to delete */

arr8.splice(1, 3);
console.log(arr8);

/* For deleting we can also use the operator delete, this is not
a method, but we can use it to change the value of a certain 
position of the array to be undefined */

delete arr8[0];
console.log(arr8);
/* The delete operator is good for keeping the space as undefined */

//Finding Elements with the find() method

/* What will go in the find() method is different because it is 
not a method, but actually a function. This function will be 
executed on every element in the array until it finds a match, and
if it does not, then it will return undefined */

/* The following code snippet is doing the same thing two 
different ways */

arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (e) {
  return e === 6;
});
let findValue2 = arr8.find((e) => e === 10);
console.log(findValue, findValue2);

/* The log statement will log 6 and undefined because it can find
an element that matches for 6, but not one that matches for 10 */

// Indexof() method

/* At times we not only want to find an element in an array, but 
we also need to know in what position it is in the array. the 
following code does this for us */

arr8 = [2, 6, 7, 8];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);

/* The first one will return 1 as 6 in is position index 1 in the 
array. The second will return -1 as 10 is not in the array. if you 
want to find the next occurrence of the specified number, you can 
add a second argument to indexOf(), specifying from which position 
it should start searching: */

arr8 = [2, 6, 7, 8];
let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex3);

/* In this case the value of findIndex3 will be -1, because 6 cannot
be found starting from index 2. */

/* The last occurrence can also be found. This is done with the 
lastIndexOf() method: */

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

// Sorting
/* There is also a built in method for sorting arrays. Numbers from 
small to high and strings A-Z. You can sort() on an array and the 
order of the values of the array will change to a sorted order */

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages);

// Reversing
names.reverse();
console.log(names);

// Practice Exercise 3.2
// List 1
let myList = [];
myList.push("milk", "bread", "apples");
console.log(myList);
myList.splice(1, 1, "bananas", "eggs");
console.log(myList);
const lastRemoved = myList.pop();
console.log(lastRemoved);
myList.sort();
console.log(myList);
let findMilk = myList.indexOf("milk");
console.log(findMilk);
myList.splice(1, 0, "carrots", "lettuce");
console.log(myList);

// List 2
let myList2 = ["juice", "pop"];
console.log(myList2);

// Combine list 1 and list 2
let myList3 = myList.concat(myList2);
console.log(myList3);

// Add list on again
myList4 = myList3.concat(myList2);
console.log(myList4);

let lastIndexOfPop = myList4.lastIndexOf("pop");
console.log(lastIndexOfPop);

// Multidimensional Arrays

// Practice exercise 3.3

const newArr = [1, 2, 3];
newArr2 = [newArr, newArr, newArr];
console.log(newArr2[0][1]);
console.log(newArr2[1][1]);
console.log(newArr2[2][1]);

// Objects in Javascript

let dog = {
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true,
};

// Two ways of accessing any given value

let dogColor1 = dog["color"];
let dogColor2 = dog.color;
console.log(dogColor1);
console.log(dogColor2);

// Updating Objects, once again two ways to do the same thing

dog["color"] = "blue";
dog.weight = 2.3;

console.log(dog);

// Can also change data type like so:

dog["age"] = "three";
console.log(dog);

// Can also work with variables rather than literal string values

let variable = "age";
console.log(dog[variable]);

/* If we change value of variable to another dog property we will
be accessing another property like this: */

variable = "breed";
console.log(dog[variable]);

// Practice exercise 3.4

let myCar = {
  make: "Ford",
  model: "Fiesta",
  petrol: true,
  color: "blue",
  engineSize: 1.3,
};
console.log(myCar);

// I can change color two ways

myCar["color"] = "pink";
console.log(myCar);

myCar.color = "green";
console.log(myCar);

// Book answer to practice 3.4

const myCar1 = {
  make: "Toyota",
  model: "Camry",
  tires: 4,
  doors: 4,
  color: "blue",
  forSale: false,
};

let propColor = "color";
myCar[propColor] = "red";
propColor = "forSale";
myCar1[propColor] = true;
console.log(myCar1.make + "" + myCar1.model);
console.log(myCar1.forSale);

// Objects in Objects

let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
    street: "2nd Street",
    number: "123",
    zipCode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};
console.log(company);

// As we can see our address is an embedded object, this can go deeper

// To access or modify properties of address, two ways to do it

company.address.zipCode = "33117";
company["address"]["number"] = "100";
console.log(company);

// Arrays in Objects, simply change activity object to activities

company = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: {
    street: "2nd Street",
    number: "123",
    zipCode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};
// Now lets fetch second value of the array

let activity = company.activities[1];

console.log(company);

// Objects in Arrays, an array of address objects

let addresses = [
  {
    street: "2nd street",
    number: "123",
    zipCode: "33116",
    city: "Miami",
    state: "Florida",
  },
  {
    street: "1st west avenue",
    number: "5",
    zipCode: "75001",
    city: "Addison",
    state: "Texas",
  },
];
/* Arrays are recognized by their square brackets 
and objects by their curly brackets */

// Objects in Arrays in Objects. This is in the book.

/* Arrays are for lists, objects are for representing 
something with properties that have descriptive names.
Object properties can be of any type */

// Practice Exercise 3.5

const people = {
  friends: [],
};
const friend1 = {
  first: "andrew",
  second: "macarthur",
  id: 1,
};
const friend2 = {
  first: "roger",
  second: "hunt",
  id: 2,
};
const friend3 = {
  first: "kenny",
  second: "burns",
  id: 3,
};
people.friends.push(friend1, friend2, friend3);
console.log(people);

// Chapter Projects

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
//
theList.shift();
theList.pop();
console.log(theList);
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();
console.log(theList);
theList.unshift("FIRST");
console.log(theList);
theList[3] = "MIDDLE";
theList[4] = "hello world";
theList.push("LAST");
console.log(theList);
console.log(theList);
theList.slice(2, 1);
console.log(theList);
theList[2] = "yo";
console.log(theList);
theList.splice(2, 1);
console.log(theList);

// Above is the long way of doing this lol

// Company Product Catalogue my attempt

const stuff = [];

const item1 = {
  name: "apple",
  model: "iphone",
  cost: 500,
  quantity: 10,
};
const item2 = {
  name: "samsung",
  model: "galaxy",
  cost: 700,
  quantity: 20,
};
const item3 = {
  name: "sony",
  model: "playstation",
  cost: 900,
  quantity: 30,
};

stuff.push(item1, item2, item3);
console.log(stuff);
// Now must retrieve quantity element of third item
console.log(stuff[2].quantity);
// Worked a treat excellent!!!!
