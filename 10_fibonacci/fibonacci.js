const fibonacci = function(num) {
    if(num < 0) return "OOPS";

    let a = 0
    let b = 1
    let temp

    for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;

    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
