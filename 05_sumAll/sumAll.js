const sumAll = function(num1, num2) {
    if (typeof num1==="string" || typeof num2==="string" 
        || isNaN(num1) || isNaN(num2) 
        || num1<0 || num2<0) {
        return "ERROR";
    }
    let sum = 0;
    let start = num1;
    let end = num2;
    if (num1>num2) {
        start = num2;
        end = num1;
    }
    for (let i=start; i<=end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
