function findLongestWord(words) {
  var max = 0;
  for (i = 0; i < words.length; i++) {
    if (words[i].length > max)
      max = words[i].length;
  }
  return max;
}

var arr = ['satur', 'tristraust', 'tristrauststr', 'i', 'st', 'satr'];

var longest = findLongestWord(arr);
console.log(longest); // 13
