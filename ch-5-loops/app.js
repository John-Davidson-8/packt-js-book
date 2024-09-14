// Chapter 5 Loops

// While Loops

/* The while loop will only be executed as long as the condition is true, so 
if the condition is false to begin with, the code inside will be skipped */

/* while (condition) {
  code that gets executed as long as condition is true
} */

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// We can also have a while loop that looks for a value in an array

// let someArray = ["Mike", "Antal", "Mark", "Emir", "Louiza", "Jacky"];
// let notFound = true;

// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//   }
// }
// console.log(notFound);

// // Fibonacci Sequence
// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];

// while (fibonacciArray.length < 25) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
// }
// console.log(fibonacciArray);

/* Practice Exercise 5.1 */

// let maxVal = 5;
// const ranNumber = Math.floor(Math.random() * maxVal) + 1;
// console.log(ranNumber);
// let correct = false;

// while (!correct) {
//   let guess = prompt("Guess a number 1-" + maxVal);
//   guess = Number(guess);
//   if (guess === ranNumber) {
//     correct = true;
//     console.log("You got it " + ranNumber);
//   } else if (guess > ranNumber) {
//     console.log("too high");
//   } else {
//     console.log("too low");
//   }
// }

// Do While loops

/* It executes what is within the do block, and then after that 
evaluates the while. If the condition is true, it will execute 
what is in the do block again. It will continue to do so until 
the condition in the while changes to false */

/* 
do {
  code to be executed if the condition is true
} while (condition) */

/*
let number;
do {
  number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));
console.log(number);
*/

// let counter = 0;
// let step = 5;
// do {
//   console.log(counter);
//   counter += step;
// } while (counter <= 100);

// For Loops

/* for (initialize variable; condition; statement) {
  code to be executed
}
1. Initialize the variable 
2. Check the condition
3. If the condition is true, execute the code block. If the condition is false,
the loop will end here.
4. Perform the statement(the third part, for example, i++)
5. Go back to step 2.

example code that logs numbers 0 to 10 (excluding 10) to the console.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

It starts by creating a variable, i, and sets this to 0. Then it checks 
whether i is smaller than 10. If it is, it will execute the log statement.
After this, it will execute i++ and increase i by 1. If we don't increase i
we get stuck in an infinite loop. 
*/

// We can also use a for loop to create a sequence and add values to an array

// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let counter = 0;
// let step = 10;
// do {
//   console.log(counter);
//   counter += step;
// } while (counter <= 100);
// console.log(step);

// const myWork = [];
// for (let x = 1; x < 10; x++) {
//   let stat = x % 2 ? true : false;
//   let temp = {
//     name: `Lesson ${x}`,
//     status: stat,
//   };
//   myWork.push(temp);
// }
// console.log(myWork);

// let names = ["John", "Harry", "Mark"];
// for (let i = 0; i < names.length; i++) {
//   if (names[i].startsWith("M")) {
//     delete names[i];
//     continue;
//   }
//   names[i] = "hello " + names[i];
// }
// console.log(names);

// let maxValue = 5;
// let randomNumber = Math.floor(Math.random() * maxValue + 1);
// console.log(randomNumber);
// let correct = false; // flag
// while (correct === false) {
//   let userChoice = prompt(`pick a number between 1 - ${maxValue}`);
//   userChoice = Number(userChoice);
//   if (userChoice === randomNumber) {
//     correct = true; //flag//
//     console.log(
//       `wow you got it, computer chose ${randomNumber} and you chose ${userChoice}`
//     );
//     break;
//   } else if (userChoice < randomNumber) {
//     console.log(`too low, go again`);
//   } else {
//     console.log(`too high, go again`);
//   }
// }

// practice 5.1 Again

// let mValue = 5;
// let computerNumber = Math.floor(Math.random() * mValue) + 1;
// console.log(computerNumber);
// let match = false;

// while (!match) {
//   let userInput = prompt(`Pick a number between 1 and ${mValue}`);
//   userInput = Number(userInput);
//   if (userInput === computerNumber) {
//     match = true;
//     console.log(
//       `Great, you picked ${userInput} and computer picked ${computerNumber}, it is a match`
//     );
//   } else if (userInput < computerNumber) {
//     console.log(`too low, go again`);
//   } else {
//     console.log(`too high, go again`);
//   }
// }

// Exercise 5.2

// let counter = 0;
// let step = 5;
// do {
//   console.log(counter);
//   counter += step;
// } while (counter <= 100);

// const myWork = [];

// for (let i = 0; i < 10; i++) {
//   let stat = i % 2 ? true : false;
//   let temp = {
//     name: `Lesson ${i}`,
//     status: stat,
//   };
//   myWork.push(temp);
// }
// console.log(myWork);
