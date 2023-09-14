const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.sort((a, b) => b - a);
console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr2);
arr3.splice(4, 1);
console.log(arr3);