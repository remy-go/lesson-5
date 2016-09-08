var calculator = (function() {
  var result;
  return function(initialValue) {
    result = initialValue;
    var operations = {
      plus: function(number) {
        result = result + number;
        return operations;
      },

      minus: function(number) {
        result = result - number;
        return operations;
      },

      multiply: function(number) {
        result = result * number;
        return operations;
      },

      divide: function(number) {
        result = result / number;
        return operations;
      },
      
      end: function() {console.log(result);}
    };
    return operations;
  };
})();

calculator(3).end(); // 3
calculator(3).plus(2).multiply(10).minus(3).end(); //47
