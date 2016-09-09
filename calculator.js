var calculator = (function() {
  var result;
  return function(initialValue) {
    result = initialValue;

    function plus(number) {
      result = result + number;
      return this;
    }

    function minus(number) {
      result = result - number;
      return this;
    }

    function multiply(number) {
      result = result * number;
      return this;
    }

    function divide(number) {
      result = result / number;
      return this;
    }

    function end() {
      return result;
    }

    return {
      plus: plus,
      minus: minus,
      multiply: multiply,
      divide: divide,
      end: end
    };
  };
})();

console.log(calculator(3).end()); // 3
console.log(calculator(3).plus(2).multiply(10).minus(2).divide(3).end()); //16
