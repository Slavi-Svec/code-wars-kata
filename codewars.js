// Quetion:
// Personalized greeting
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// Answer:

// function greet(name, owner) {
//    const greeting = name === owner ? 'Hello boss' : 'Hello guest'
//    console.log('name=', name, 'owner=', owner, 'greeting====', greeting)

//    return greeting
// }

//greet = (name, owner) => {
  // return name === owner ? 'Hello boss' : 'Hello guest'
//}



// TODO: re-write the greet fucntion with a ternary operator


// question
// // Sentence Smash
// Write a method smash that takes an array of words and smashes them together into a sentence
//  and returns the sentence. You can ignore any need to sanitize words or add punctuation,
//   but you should add spaces between each word. Be careful,
//    there shouldn't be a space at the beginning or the end of the sentence!

// Example
// var words = ['hello', 'world', 'this', 'is', 'great'];
// smash(words); // returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you will always get an array.
// What We're Testing
// We're testing basic loops and string manipulation. This is for beginners who are just learning loops and 
// string manipulation.

// Disclaimer
// This is for beginners so we want to test basic loops and string manipulation.
// Advanced users should easily be able to do this in one line.


// answer:
// let words = ['hello', 'world', 'this', 'is', 'great'];
// return words.join(' ');


// const words = ['hello', 'world', 'this', 'is', 'great'];
// function smash (words) {
// let x =  words.join(' ');
// return x;
// };


// const words = ['hello', 'world', 'this', 'is', 'great'];
// const smash = words => words.join(' ')


// console.log(smash(['hello', 'world', 'this', 'is', 'great']))


// question
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, 
// and would like to greet him slightly different. She added a special case to her function, 
// but she made a mistake.

// Can you help her?

function greet(name){
   return "Hello, " + name + "!";
   if(name === "Johnny")
     return "Hello, my love!";
 }
