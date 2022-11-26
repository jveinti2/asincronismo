function sum (a, b){
    return a + b;
}

function res (a, b){
    return a - b;
}

function calc (num1, num2, callback){
    return callback(num1, num2);
}

console.log("callback suma ->" + calc(6, 2, sum));
console.log("callback resta ->" + calc(6, 2, res));