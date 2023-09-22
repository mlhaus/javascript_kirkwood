// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax
const luckyNumber = 7;
for (let i = 0; i <= 10; i++) {
    if (i === luckyNumber) {
        console.log(`${luckyNumber} is my lucky number`);
    } else {
        console.log('Number ' + i);
    }
}

// Nested loops
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log();
}

// Loop through an array
const names = ['Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
    console.log(`I like ${names[i]}`);
}

for (i in names) {
    console.log(`I like ${names[i]}`);
}
console.log();

for (name of names) {
    console.log(`I like ${name}`);
}
console.log();

names.forEach(name => console.log(`I like ${name}`));