// Follow along with the examples here
function doNothing() {}

function sayHello() {
  console.log("Hello!");
}

sayHello();

function sayHelloGuadalupe() {
  console.log("Hello, Guadalupe!");
}

sayHelloGuadalupe();

function sayHelloToLiz() {
  console.log("Hello, Liz!");
}

sayHelloToLiz();

function sayHelloToSamip() {
  console.log("Hello, Samip!");
}

sayHelloToSamip();

sayHelloGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);
sayHelloTo("Mati");

//console.log(firstName);

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");
say("Julio", "hello");

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}

console.log(say("Hello", "Liz"));

function say(greeting, firstName) {
  console.log("I was called");
  return `${greeting}, ${firstName}!`;
}

console.log(say("Howdy", "partner"));
