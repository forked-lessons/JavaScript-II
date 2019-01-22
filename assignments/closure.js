// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myFunction(person) {
  const myGreeting = person;
  console.log(`Greetings Sir ${person}, I am C3PO Human Cyborg Relations.`);

  function shortGreeting() {
    console.log(`Greetings Sir ${person} I am C3PO.`);

    function theOdds() {
      console.log(`The odds of us meeting Sir ${person} are approximately 12,093,812,412 to 1.`);
    }
    theOdds();
  }
  shortGreeting();
}
myFunction("Howard");


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let counter = 0;
  return function () {
    return ++counter;
  }
};

// Return a function that when invoked increments and returns a counter variable.
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
console.log(newCounter()); // 3



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
