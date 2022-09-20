"use strict";
//--------------------FUNCTIONS--------------------
/*A Function is a piece of code that we can re use over and over
Again , basically a variable with fubnctionality */

//Simple Function
/*function logMe(){
    console.log("I am a function")
}

logMe();

//Function With Parameters 
function withParam(x, y){
    return x+ y;
}

const funcOutput = withParam(1,1);
console.log(funcOutput)

//Reusing the function 

Output2 = (withParam(3, 10))
console.log(Output2)*/

//Birthday  Calculater Function
// storing function in a variable
/*
const old =function methodName (cur, bdy) {
    const age = cur + bdy;
    return console.log("Your Are Now ", age, " years old");
}

old(2022, 1994)*/

//-------------ARROW FUNCTION-----------------
//shorter version of writting function USED a lot in REACT
//const birth = (cury, bdy) => `Your Are ${cury - bdy} Yeats Old`;

//console.log(birth(2022, 1994));

/*
const yearsToRetire = (cur, bdy, name) => {
    age = cur -bdy;
    return `Your Mr ${name} are ${age} years old and still got ${65-age} years to retire`
}

console.log(yearsToRetire(2022, 1994, "Guri"));
*/

/*
const fruitsCut = (pieces) => {
  return pieces * 4;
};

const fruitJuice = (apple, orange) => {
  const juice = `Juice With ${fruitsCut(apple)} apples and ${fruitsCut(
    orange
  )} oranges`;
  return console.log(juice);
};

fruitJuice(3, 1); */

//----------- ASSIGNMENT WITH FUNCTIONS------------

//Function Decleratrion
function calAge1(birthYear) {
  const age = 2022 - birthYear;
  console.log(`You Are ${age} years old`);

  return age;
}

calAge1(1994);

//Function Expression

const calcAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  console.log(`You Are ${age} years old`);

  return age;
};

calcAge2(1965);
