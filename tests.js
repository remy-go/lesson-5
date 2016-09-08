QUnit.test("longest", function(assert) {
  assert.equal(findLongestWord(['sa', 'sak', 'i']), 3);
});

QUnit.test("sum", function(assert) {
  assert.equal(sum([3, 4, 2]), 9);
});

QUnit.test("multiply", function(assert) {
  assert.equal(multiply([3, 4, 2]), 24);
});

QUnit.test("evaluate", function(assert) {
  assert.equal(evaluateExpression(6, 2, '+'), 8);
  assert.equal(evaluateExpression(6, 2, '-'), 4);
  assert.equal(evaluateExpression(6, 2, '*'), 12);
  assert.equal(evaluateExpression(6, 2, '/'), 3);
});

QUnit.test("duplicate", function(assert) {
  assert.deepEqual(duplicate([1, 2, 3]), [1, 2, 3, 1, 2, 3]);
});

QUnit.test("multiples-of-3-5", function(assert) {
  var numbers = multiples().numbers;
  var numbersFromFizzbuzzes = multiples().fizzbuzzes.map(function(item) {
    switch(item) {
      case 'fizz': return 3;
      case 'buzz': return 5;
      case 'fizzbuzz': return 15;
    }
  });
  assert.deepEqual(numbersFromFizzbuzzes, numbers);
});

