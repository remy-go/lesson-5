function duplicate(array) {
  var duplicated = [];
  var length = array.length;
  for(i = 0; i < length; i++) {
    duplicated[i] = duplicated[i + length] = array[i];
  }
  return duplicated;
}


var arr = [1, 2, 3];
console.log(duplicate(arr)); // [1, 2, 3, 1, 2, 3];
