const luckyNumber = 7;
let i = 0;
while (i <= 10) {
    if (i === luckyNumber) {
        console.log(`${luckyNumber} is my lucky number`);
    } else {
        console.log('Number ' + i);
    }
    i++;
}

// Nesting while loops
i = 1;
while (i <= 5) {
    let j = 1;
    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    console.log();
    i++;
}

// Loop over arrays
const names = ['Sam', 'Sara', 'John', 'Tim'];
i = 0;
while (i < names.length) {
    console.log(`I like ${names[i]}`);
    i++;
}

// Do While Loop - Always runs once
do {
    console.log('Number ' + i);
    i++;
} while (false);