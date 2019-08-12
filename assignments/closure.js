// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const random = "yes";

function logThis(logged){

  console.log(random);
}

logThis();



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var count = 0;

  return function(){
    return ++count;
  }
 
  
};

const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());





// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  var count = 0;
  return {

    decrement: function(){
                  return --count;
                },
    increment: function(){
                  return ++count;
                }

  }

};

const decrementFunc = counterFactory();

console.log(decrementFunc.decrement());
console.log(decrementFunc.decrement());
console.log(decrementFunc.decrement());
console.log(decrementFunc.increment());
console.log(decrementFunc.increment());
console.log(decrementFunc.increment());
