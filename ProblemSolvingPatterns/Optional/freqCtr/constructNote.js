function constructNote(str1, str2) {
  let freq1 = {};
  let freq2 = {};
  if (str1.length === 0) return true;
  for (let val of str1) {
    freq1[val] = freq1[val] ? freq1[val] + 1 : (freq1[val] = 1);
  }
  for (let val of str2) {
    freq2[val] = freq2[val] ? freq2[val] + 1 : (freq2[val] = 1);
  }
  console.log(freq1);
  console.log(freq2);
  for (let key in freq1) {
    if (freq2[key] >= freq1[key]) {
      return true;
    }
  }
  return false;
}

console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true
