// An arrow function is a function expression
const add = (a, b) => {
    return a + b;
};
const add2 = (a, b) => a + b;
const print = el => console.log(el);
print('Hello');
print('Marc Hauschildt');


const initials = fullName => {
    const nameArr = fullName.split(' ');
    return {
        firstInitial: nameArr[0].charAt(0),
        lastInitial: nameArr[1].charAt(0)
    };
};
console.log(initials('Marc Hauschildt'));