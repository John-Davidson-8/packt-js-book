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
