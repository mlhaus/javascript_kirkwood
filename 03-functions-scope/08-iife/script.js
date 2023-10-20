// Immediately Invoked Function Expressions (IIFE)

(function (a, b) {
    console.log(a + b);
})(1, 2);

(function () {
    console.log('Hello');
})();

(function (name) {
    console.log('Hello, ' + name);
})('Marc');