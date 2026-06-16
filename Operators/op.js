console.log("There are 5 types of Operators ");
console.log(" 1 Arithmetic operator( + , - , * , / , % ) \n 2. logical operator (&& , || , !  ) \n 3. Assignment operator (= , += , -= , *= , %= , **= ) \n 4. Comparison operator (== , != , === , !== , > , >= , < , <= )\n 5. Tenary operator { ()? , (): , () }")


// 
console.log("Arithmetic Operator  ")
let a = 10; 
let b = 30;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// 
console.log(" Assignment Operators") 

// =
let c = 10;
let ass = 50;
ass = ass +c;
console.log(ass);


// +=
// let c = 10;
 ass = 50;
ass +=c;
console.log(ass);

// -=
// let c = 10;
 ass = 50;
ass -=c;
console.log(ass);


// *=
// let c = 10;
 ass = 50;
ass *=c;
console.log(ass);


// %= 
// let c = 10;
 ass = 50;
ass %=c;
console.log(ass);

// **= 
// let c = 10;
 ass = 50;
ass **=c;
console.log(ass);


// 
console.log(" Comparison operators  ")
// ==
let x = 10;
let y='10';
console.log(x==y)

// ===
console.log(x===y);

// !=
console.log(x!=y);

// !==
console.log(x !==y);

// %
console.log(x % y);


console.log("Logical Oprtators ");


let marks =60;
const result = marks >40? "Pass" : "Fail";
console.log(result);


// template literal - back tick
let Name = "Ishant raj "
let Phone = 9576310383;
let id = "0245CSE037";

console.log(`Your Name is ${Name} and this is your Phone numaber ${Phone} and This is your Collage I'd ${id}`)