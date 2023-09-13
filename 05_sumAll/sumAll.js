const sumAll = function(num1, num2) {
    let totalSum = 0;
    if (
      num1 < 0 ||
      typeof num1 !== "number" ||
      num2 < 0 ||
      typeof num2 !== "number"
    ) {
      return "ERROR";
    }
      if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
      }
    for(let i = num1; i <= num2; i++) {
        totalSum+=i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
