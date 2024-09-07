// Chapter 4 Logical Operators

// If and If Else Statements
// Else if Statements

// Practice Exercise 4.1

// const sun = false;
// if (sun) {
//   console.log("I need to take my sun screen");
// }
// if (!sun) {
//   console.log("I don't need my sun screen");
// }

// Practice Exercise 4.2

// let userAge = prompt("What is your age?");
// userAge = Number(userAge);
// let message;
// if (userAge >= 21) {
//   message = "You are 21 or over and are welcome to come in and drink alcohol";
// } else if (userAge >= 19) {
//   message = "You can come in but not drink alcohol";
// } else {
//   message = "Sorry, you can't enter as you are under 19";
// }
// console.log(message);

// Conditional Ternary Operators

// operand1 ? operand2 : operand3;

// expression ? statement for true : statement associated with false;

// if operand1, then operand2, else operand3.

// Ternary Example below

// let access = age < 18 ? "denied" : "allowed";

// Practice Exercise 4.3

// const id = true;
// const message = id ? "Allowed in" : "Denied Entry";
// console.log(message);

// Switch Statements (can be used instead of if else statements)
// This includes the "default" at the end (same as else in if else)
// let activity;
// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:30AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "dinner":
//     console.log("It is 6;30PM");
//     break;
//   default:
//     console.log("I can't determine the time");
//     break;
// }

// Practice Exercise 4.4

// random number between 0 and 1.
// let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
// randomNumber = Math.floor(randomNumber);

/* create a variable that gets a random number between 1-5
assigned to it */
// let randNum = Math.random();
// multiply by 5 to obtain a number between 0 and 5
// randNum = randNum * 5;
// remove digits pas decimal to provide a whole number
// randNum = Math.floor(randNum);
/* create a prompt to get a string value input from a user 
that can be repeated back later in the final output */
// let userInput = prompt("Pick a number between 1 and 5");
/* create 6 responses using the switch statement, each
assigned to a different value from the random number 
generator */
// switch (userInput) {
//   case "0":
//     console.log("You chose 0");
//     break;
//   case "1":
//     console.log("You chose 1");
//     break;
//   case "2":
//     console.log("You chose 2");
//     break;
//   case "3":
//     console.log("You chose 3");
//     break;
//   case "4":
//     console.log("You chose 4");
//     break;
//   case "5":
//     console.log("You chose 5");
//   default:
//     console.log("You did not choose a number");
// }

// Practice Exercise 4.4 Book Answer

// start by setting a variable that gets a random number assigned to it
// const randomNumber = Math.floor(Math.random() * 6);
// let answer = "Something went wrong";
/* create a prompt that gets a string value input that can repeat back 
in final output */
// let question = prompt("Ask me anything");
// switch (randomNumber) {
//   case 0:
//     answer = "It will work out";
//     break;
//   case 1:
//     answer = "Maybe, maybe not";
//     break;
//   case 2:
//     answer = "Probably not";
//     break;
//   case 3:
//     answer = "Highly likely";
//     break;
//   default:
//     answer = "I don't know about that";
// }
// let output = "You asked me " + question + ". I think that. " + answer;
// console.log(output);

// Combining Cases (instead of using or (//) clauses)

// let grade;
// let answer = "something went wrong";
// let question = prompt("What grade did you get?");
// switch (grade) {
//   case "F":
//   case "D":
//     console.log("You've failed!");
//     break;
//   case "C":
//   case "B":
//     console.log("You've passed!");
//     break;
//   case "A":
//     console.log("Nice one!");
//     break;
//   default:
//     console.log("I don't know this grade");
// }
// console.log(grade);

// Practice Exercise 4.5
/* create a variable called prize and use a prompt to ask the user
to set the value by selecting a number between 0 and 10 */

// let prize = prompt("Choose a number between 0 and 7");
// convert the prompt response to a number data type
// prize = Number(prize);
/* create a variable to use for the output message containing the 
value "My Selection" */
// let message1 = "My Selection: ";
/* using the switch statement (and creativity), provide a response back
regarding a prize that is awarded depending on what number is selected */
// switch (prize) {
//   case 0:
//     console.log(message1 + 0 + ": no prize");
//     break;
//   case 1:
//     console.log(message1 + 1 + ": 1 prize");
//     break;
//   case 2:
//     console.log(message1 + 2 + ": 2 prizes");
//     break;
//   case 3:
//     console.log(message1 + 3 + ": 3 prizes");
//     break;
//   case 4:
//     console.log(message1 + 4 + ": 4 prizes");
//     break;
//   case 5:
//     console.log(message1 + 5 + ": 5 prizes");
//     break;
// use switch break to add combine results
// case 6:
// case 7:
//   console.log(message1 + 6 + " or " + 7 + ": 6 or 7 prizes");
//   break;
// default:
//   console.log("I don't know that one");
// }
/* output the message back to the user by concatenating your prize
variable strings and the output message string */
// let prizeResult = message1 + prize;
// console.log(message1 + prize);

// Exercise 4.5 Book Answer

// let prize = prompt("Pick a number between 0 and 10");
// prize = Number(prize);
// let output = "My Selection: ";
// switch (prize) {
//   case 0:
//     output += "Gold ";
//   case 1:
//     output += "Coin ";
//     break;
//   case 2:
//     output += "Big ";
//   case 3:
//     output += "Box of ";
//   case 4:
//     output += "Silver ";
//   case 5:
//     output += "Bricks ";
//     break;
//   default:
//     output += "Sorry try again!";
// }
// console.log(output);
// The above code is a good example of joining cases together

// Chapter Projects

// 1 Evaluating a Number Game Project
/* Ask the user to enter a number and check whether it is greater than
, equal to, or less than a dynamic number  value in your code. Output
the result to the user */

// Book answer

// let val = prompt("What number?");
// val = Number(val);
// let num = 100;
// let message2 = "nothing";
// if (val > num) {
//   message = val + " was greater than " + num;
// } else if (val === num) {
//   message = val + " was equal to " + num;
// } else {
//   message = val + " is less than " + num;
// }
// console.log(message);
// console.log(message);

// Friend Checker Game

// let nameChoice = prompt("Enter a name");
// switch (nameChoice) {
//   case "Amanda":
//     output = "yes your right";
//     break;
//   case "Sam":
//     output = "yes it is him";
//     break;
//   default:
//     output = "sorry don't know them";
// }
// console.log(output);

// Book answer to friend check game

// let person = prompt("enter a name");
// let message;
// switch (person) {
//   case "John":
//   case "Larry":
//   case "Jane":
//   case "Laurence":
//     message = person + " is my friend";
//     break;
//   default:
//     message = "I don't know " + person;
// }
// console.log(message);

// Rock, Paper, Scissors

// const myArr = ["Rock", "Paper", "Scissors"];
// let computer = Math.floor(Math.random() * 3);
// let player = Math.floor(Math.random() * 3);
// let message = "player " + myArr[player] + "vs computer " + myArr[computer] + "";
// if (player === computer) {
//   message += "It's a tie";
// } else if (player > computer) {
//   if (computer == 0 && player == 2) {
//     message += "Computer wins";
//   } else {
//     if (computer == 2 && player == 0) {
//       message += "Player wins";
//     } else {
//       message += "Computer wins";
//     }
//   }
// }
// console.log(message);

// Rock, Paper Scissors Again!!!

// let choice = ["rock", "paper", "scissors"];
// let playerMessage = "you choose";
// let computerMessage = "computer chose";

// let playerChoice = prompt("Choose rock, paper or scissors");

// if (playerChoice === choice[0]) {
//   playerMessage = "You chose rock";
// } else if (playerChoice === choice[1]) {
//   playerMessage = "You chose paper";
// } else if (playerChoice === choice[2]) {
//   playerMessage = "You chose scissors";
// } else {
//   playerMessage = "You have to choose between rock, paper or scissors!";
// }
// console.log(playerMessage);

// let computerChoice = Math.floor(Math.random() * 3);
// if (computerChoice === 1) {
//   computerMessage = "computer chose rock";
// } else if (computerChoice === 2) {
//   computerMessage = "computer chose paper";
// } else {
//   computerMessage = "computer chose scissors";
// }
// console.log(computerMessage);

// // Tie
// if (
//   (playerChoice == choice[0] && computerChoice == 1) ||
//   (playerChoice == choice[1] && computerChoice == 2) ||
//   (playerChoice == choice[2] && computerChoice == 3)
// ) {
//   console.log("It is a tie");
// }

// // Player wins
// else if (playerChoice == choice[0] && computerChoice == 3) {
//   console.log("You win! Rock beats Scissors!");
// } else if (playerChoice == choice[1] && computerChoice == 1) {
//   console.log("You win! Paper beats rock!");
// } else if (playerChoice == choice[2] && computerChoice == 2) {
//   console.log("You win scissors beats paper");
//   // Computer wins
// } else if (playerChoice == choice[0] && computerChoice == 2) {
//   console.log("You lose! Paper beats rock");
// } else if (playerChoice == choice[1] && computerChoice == 3) {
//   console.log("You lose! Scissors beats paper");
// } else if (playerChoice == choice[2] && computerChoice == 1) {
//   console.log("You lose! Rock beats scissors");
// }

// Practice exercise 4.1
// let sunny = false;
// console.log(sunny);
// if (sunny === true) {
//   console.log("yes it is sunny, beach time!");
// }
// if (sunny !== true) {
//   console.log("oh no it is not sunny!");
// }

// Exercise 4.2

// let ageRequest = prompt("What is your age?");
// let userAge = Number(ageRequest);
// let message;
// if (userAge >= 21) {
//   message = "you are old enough to enter";
// } else if (userAge >= 19) {
//   message = "you can come in but not purchase alcohol";
// } else {
//   message = "you are not old enough to enter, sorry!";
// }
// console.log(message);
// alert(message);
