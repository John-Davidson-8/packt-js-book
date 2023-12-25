// Chapter 5 Loops

// While Loops

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// We can also have a while loop that looks for a value in an array

let someArray = ["Mike", "Antal", "Mark", "Emir", "Louiza", "Jacky"];
let notFound = true;

while (notFound && someArray.length > 0) {
  if (someArray[0] === "Louiza") {
    console.log("Found her!");
    notFound = false;
  } else {
    someArray.shift();
  }
}
console.log(notFound);

// Fibonacci Sequence
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];

while (fibonacciArray.length < 25) {
  fibonacciArray.push(nr1);
  temp = nr1 + nr2;
  nr1 = nr2;
  nr2 = temp;
}
console.log(fibonacciArray);

/* Practice Exercise 5.1 */
let maxNum;

let randNum = Math.floor(Math.random() * 6);
console.log(randNum);

let numCheck = false;
