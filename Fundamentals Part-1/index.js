//ARTHMETIC OPERATORS

/* const myAge= 2022 -1994;
 const newAge = 2**3 + myAge;
 console.log(newAge)*/
//--------------------------------------//

//ASSIGNMENT OPERATORS

/*let x = 10 + 5; // + and = are the operators here 15
x += 10 //adding another 10 to the result above. 15+10 = 25
x *= 4 // this times the result from above command with 4 x 25 = 100
x++ // increment the value of x by 1 100 + 1 = 101
x-- // decrement the value of x by 1 100 - 1 = 100
x -= 5 // minus the value of x by 5 100 -5  = 95 
console.log(x) */

//--------------------------------------//

//COMPARISON OPERATORS

/*const guriAge = 2022 -1992;
const happyAge = 2022 - 1992;

if(guriAge < happyAge){
    console.log("Guri is younger than Happy")
}
else if(guriAge > happyAge){
    console.log("Guri Is Older than happy")
}
else if(guriAge === happyAge){
    console.log("Both are same age")
}*/

//--------------------------------------//

//ASSIGNMENT 1
//Data 1

/*
const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

let bmiMark = markMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;

const output = `Mark's BMI is ${bmiMark.toFixed(2)} and John's BMI is ${bmiJohn.toFixed(2)}
So Deos Mark has a higher BMI Than John 
Answer is ${bmiMark > bmiJohn}`;
console.log(output); */

//Data 2

/*
const markHeight2 = 1.88;
const markMass2 = 95;

const johnHeight2 = 1.76;
const johnMass2 = 85;

let bmiMark2 = markMass2 / markHeight2 ** 2;
let bmiJohn2 = johnMass2 / johnHeight2 ** 2;

const output2 = `Mark's BMI is ${bmiMark2.toFixed(2)} and John's BMI is ${bmiJohn2.toFixed(2)}
So Deos Mark has a higher BMI Than John 
Answer is ${bmiMark2 > bmiJohn2}`;
console.log(output2); */

//--------------------------------------//
//Taking Decision If Else

/*const validAge = 19;
const mikeAge = 15;

let howManyYears = validAge - mikeAge;

if (mikeAge >= validAge) {
  console.log("Can APPLY for Licens");
} else if (mikeAge < validAge) {
  console.log(
    `You still got ${howManyYears} years to Apply for the license`
  );
}*/

//--------------------------------------//

//TYPE CONVERSION

/*let something = "2000";
//Numbers
console.log(something + 20)// will print 200020
console.log(Number(something) +22) //will print 2022

//Strings
console.log((String(23)), 26)*/

//--------------------------------------//

//Type Coericion

/*console.log("I am Gurvinder and i am "+ 28 + " Years old")//28 number becomes a string

// minues(-), times(*), and divide (/) operator however does not convert in string instead its converst strings into numbers

console.log('23' - '3' -'10') // prints 10 as a number
console.log('2' * '3' / '10') // prints 10 as a number*/

//--------------------------------------//

//BOOLEAN - TRUTHY & FALSY VALUES..
// 5 falsy values = 0 , '', null, undifined, NaN

/*
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log("------------------------------")
console.log(Boolean(12));
console.log(Boolean(2022));
console.log(Boolean("String"));
console.log(Boolean(true));
console.log(Boolean(1));

const money = 0;
if(money){
    console.log("You Have Money");
}
else{
    console.log("Nigga's BROKE")
} */

//------------USING prompt IN BROWSER------------

/*const fav = prompt("Enter Your Fav Number");

console.log(Number(fav))*/

//------------LOGICAL OPERATOR ------------

/*let hasPen = true
let hasPencil = false

console.log(hasPen && hasPencil) // results of true and false = false
console.log(hasPen || hasPencil) // if one of the variable is true the whole opration ujs true
console.log(!hasPen) // return false*/

//------------ASSIGNMENT 2 ------------

/*
const dolphinScores = (96 + 108 + 89) / 3;
const koalasScores = (80 + 96 + 110) / 3;


console.log(dolphinScores)
console.log(koalasScores)

if(dolphinScores > koalasScores && dolphinScores >= 100){
    console.log("Dolphin Wins!")
}
else if(koalasScores > dolphinScores && koalasScores >= 100){
    console.log("Koalas Wins!")
}

if(dolphinScores === koalasScores && koalasScores >= 100 && dolphineAvg >= 100){
    console.log("Its A Tie")
}
else{
    console.log("No Result")
}*/

//-----------------SWITCH STATEMENT------------------

/*
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  12
];

//Getting the Current Day with swithc statment.
//use for loop to get the value of an array to use switch statment
for (var i = 0; i < days.length; i++) {
  var weekDays = days[i];
  switch (weekDays) {
    case "Monday":
    case "Wednesday": // multiple cases can be used as well
      console.log("Today is Monday ");
      console.log("Today is also Wednesday ");
      break;
    case "Tuesday":
      console.log("Today is Tuesday ");
      break;
   
  }
} */

//------------ Condition Ternery Operator ------------------

/*
const age = 28;
age >= 18 ? console.log("I AM OLD ENOUGH 👴🏻") : console.log("too young");

const age2 = prompt("Enter Your Age")
age2 >= 18 ? console.log("You Can Buy 🍺") : console.log("TOO YOUNG")

//OR WE CAN DO:

const legalAge = age2 >= 18 ? "You Are Adult" : "Your Are Young";
console.log(legalAge)

//CAN ALSO BE USED INSIDE TEMPLATE LITERLAS
console.log(`you are  ${age2 >= 18 ? "Adult" : "Young"}`)*/

//------------ ASSIGNMENT 3 ------------------

//if bill is from 50 - 300 tip is 15/100
//if not 50 -300 tip is 20/100
const bill = 275;
const bill2 = 40;
const bill3 = 430;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : bill * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? 0.15 * bill2 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? 0.15 * bill3 : bill3 * 0.2;

console.log(
  `Total Bill Was ${bill}, The Tip Was ${tip}, and the total value was ${
    bill + tip
  }`
);
console.log(
  `Total Bill Was ${bill2}, The Tip Was ${tip2}, and the total value was ${
    bill2 + tip2
  }`
);
console.log(
  `Total Bill Was ${bill3}, The Tip Was ${tip3}, and the total value was ${
    bill3 + tip3
  }`
);
