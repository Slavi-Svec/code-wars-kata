// Quetion:
// Personalized greeting
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// Answer:

function greet(name, owner) {
   const greeting = name === owner ? 'Hello boss' : 'Hello guest'
   console.log('name=', name, 'owner=', owner, 'greeting====', greeting)

   return greeting
}

//greet = (name, owner) => {
  // return name === owner ? 'Hello boss' : 'Hello guest'
//}

greet('tim', 'sam')


// TODO: re-write the greet fucntion with a ternary operator