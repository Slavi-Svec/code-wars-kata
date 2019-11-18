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
 const greet name => (name === 'Johnny') ? 'Hello, my love!' : 'Hello, ' + name + '!';

 function greet(name){
   return name === 'Johnny' ? 'Hello, my love!' : 'Hello, ' + name + '!';

   greet = name => name === 'Johnny' ? 'Hello, my love!' : 'Hello, ' + name + '!';
 }


//  L1: Bartender, drinks!
//  Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

//  Input	Output
//  "Jabroni"	"Patron Tequila"
//  "School Counselor"	"Anything with Alcohol"
//  "Programmer"	"Hipster Craft Beer"
//  "Bike Gang Member"	"Moonshine"
//  "Politician"	"Your tax dollars"
//  "Rapper"	"Cristal"
//  *anything else*	"Beer"
//  Note: anything else is the default case: if the input to the function is 
//  not any of the values in the table, then the return value should be "Beer."
 
//  Make sure you cover the cases where certain words do not show up with correct 
//  capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

 function getDrinkByProfession(profession) {
   if ('jabroni' === profession) {
       return 'Patron Tequila'
   } else if ('school counselor' === profession) {
       return 'Anything with Alcohol'
   } else if ('programmer' === profession) {
       return 'Hipster Craft Beer'
   } else if ('bike gang member' === profession) {
       return 'moonshine'
   } else if ('rapper' === profession) {
       return  'Cristal'
   } else if ('politician' === profession) {
       return 'Your tax dollars'
   }

   return 'Beer'
}

// question Drink about
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.


function peopleWithAgeDrink(age) {
    if (age < 14) {
        return 'drink toddy'; 
    } else if (age < 18) {
        return 'drink coke';
    } else if (age < 21) {
        return 'drink beer';
    }

    return 'drink whisky';


  }

  function peopleWithAgeDrink(age) {
    switch(age) {
      case('age' < '14'):
        return 'drink toddy'
        break;
      case('age' < '18'):
        return 'drink coke'
        break;
      case('age' < '21'):
        return 'drink beer'
        break;
      default:
        return 'drink whisky'
    }
}
