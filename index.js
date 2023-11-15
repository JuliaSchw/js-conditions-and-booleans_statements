console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 10;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 45;

if (numberOfHotdogs < 5) {
  console.log("2 euros");
}
if (numberOfHotdogs >= 5 && numberOfHotdogs <= 100) {
  console.log("1,5 euros");
}
if (numberOfHotdogs >= 100 && numberOfHotdogs <= 1000000) {
  console.log("1 euro");
}
if (numberOfHotdogs > 1000000) {
  console.log("0,10 euros");
}

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";
const coachName = "Peter";

const greeting = name === coachName ? "Hello Coach!" : "Hello " + name + "!";

console.log(greeting);
