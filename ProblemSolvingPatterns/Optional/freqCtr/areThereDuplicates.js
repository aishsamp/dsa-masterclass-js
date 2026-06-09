function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  console.log(args);
  let freq1 = {};
  for (let val of args) {
    freq1[val] = freq1[val] ? freq1[val] + 1 : (freq1[val] = 1);
  }
  console.log(freq1);
  for (let key in freq1) {
    if (freq1[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
