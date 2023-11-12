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
