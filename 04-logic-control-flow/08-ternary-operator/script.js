const age = 12;

// Using an if statement
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can not vote');
}

// ternary operators
// 1) Do you see a repeated action inside an if-else structure?
// 2) If yes, start with that action
// 3) Write the boolean expression without the "if"
// 4) Type a ? after the expression
// 5) Type the value if true after the ?
// 6) Type a : after the value if true
// 7) Type the value if false after the :

console.log(age >= 18 ? 'You can vote!' : 'You can not vote');

if (age >= 17) {
    console.log('R');
} else if (age >= 13) {
    console.log('PG-13');
} else if (age >= 8) {
    console.log('PG');
} else {
    console.log('G');
}

console.log(age >= 17 ? 'R' : age >= 13 ? 'PG-13' : age >= 8 ? 'PG' : 'G');