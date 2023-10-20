function add(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(add(1));

function add2(...nums) {
    let sum = 0;
    for (num of nums) {
        sum += num;
    }
    return sum;
}

console.log(add2(8, 1, 9, 2, 6, 7));