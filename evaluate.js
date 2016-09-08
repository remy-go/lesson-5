function evaluateExpression(x, y, operation) {

switch(operation) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    case '/': return x / y;
  }
}

console.log(evaluateExpression(2, 3, '+')); // 5
console.log(evaluateExpression(2, 3, '-')); // -1
console.log(evaluateExpression(2, 3, '*')); // 6
console.log(evaluateExpression(2, 3, '/')); // 0.6666...
