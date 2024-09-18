const fibonacci = function(num) {
    let fib = []
    if (num < 0){
        return 'OOPS'
    }
    if (num == 0) {
        return 0
    }
    if (num == 1 || num == 2) {
        return 1
    }
    if (fib[num] > 0) {
        return fib[num]
    } return fib[num] = fibonacci(num - 1) + fibonacci(num - 2)
};

// Do not edit below this line
module.exports = fibonacci;
