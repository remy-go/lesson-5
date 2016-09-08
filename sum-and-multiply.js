function sum(array) {
  var sum = 0;
  for(i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

function multiply(array) {
  return array.reduce(function(x, y) {
    return x * y;
  });
}

var arr = [2, 3, 5];

console.log(sum(arr)); // 10
console.log(multiply(arr)); //30
