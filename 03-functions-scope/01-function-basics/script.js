function add(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return num1 + num2;
    } else {
        return null;
    }
    console.log("hello");
}

console.log(add(1, 2));
console.log(add('1', '2'));