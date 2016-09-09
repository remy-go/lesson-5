function duplicate(array) {
  return array.concat(array);
}


var arr = [1, 2, 3];
console.log(duplicate(arr)); // [1, 2, 3, 1, 2, 3];
