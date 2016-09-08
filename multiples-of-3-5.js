function multiples() {
  numbers = []; // For testing
  var fizzbuzzes = [];
  for(i = 0; i <= 100; i++) {
    if(i % 3 === 0) {
      if(i % 5 === 0) {
        numbers.push(15);
        fizzbuzzes.push('fizzbuzz');
        continue;
      }
      numbers.push(3);
      fizzbuzzes.push('fizz');
      continue;
    }
    if(i % 5 === 0) {
      numbers.push(5);
      fizzbuzzes.push('buzz');
    }
  }
  return {'numbers': numbers, 'fizzbuzzes': fizzbuzzes };
}

console.log(multiples().fizzbuzzes);
