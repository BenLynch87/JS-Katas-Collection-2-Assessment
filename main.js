function add(x, y){
    return x + y;
}
console.log(add(5, 7))
console.log(add(-5, 22))

function multiply(x, y){
    let total = 0;
    while (y > 0){
        total = add(total, x);
        y = add(y, -1);
    }
    return total;
}
console.log(multiply(8, 5))
console.log(multiply(-3, 6))

function power(x, n){
    let total = 1;
    while (n > 0){
        total = multiply(total, x);
        n = add(n, -1);
    }
    return total;
}
console.log(power(5, 5))
console.log(power(2, 10))

function factorial(x){
    let total = 1;
    for (let i = 1; i < add(x, 1); i = add(i, 1)){
        total = multiply(total, i);
    }
    return total;
}
console.log(factorial(8))
console.log(factorial(5))
console.log(factorial(3))

function Fibonacci(n){
if (n < 2){return n;}
let sequence = [0,1]
for (i = 1; i < n; i = add(i, 1)){
    sequence[add(i, 1)] = add(sequence[add(i,-1)], sequence[i])
}
return sequence.pop();
}
console.log(Fibonacci(1))
console.log(Fibonacci(6))
console.log(Fibonacci(11))
console.log(Fibonacci(25))