// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

const value = greetings.message;

console.log(value);



// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age. 

const Superman = {
    name: "Jens Kristian",
    age: 85
}

console.log(`I am ${Superman.name} and roamed this place for ${Superman.age} years`);

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = {
  founded: 2008,      
  founder: "Jeff Atwood & Joel Spolsky",
  purpose: "A Q&A platform for developers",
  users: 15000000,
  isAllowed: false
};

stackOverflow.isAllowed = true
console.log(stackOverflow);

const chatGPT = {
  founded: 2022,
  founder: "OpenAI",
  purpose: "An language model for generating text and answering questions",
  users: 100000000,
  isAllowed: true // ;-)
};

console.log(chatGPT);



// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

thisSong.year = "2025";

console.log(thisSong);

delete thisSong.description;

console.log(thisSong);



// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------


