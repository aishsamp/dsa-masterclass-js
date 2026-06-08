function findAllDuplicates(arr) {
  let freq1 = {};
  let res = [];
  for (let val of arr) {
    freq1[val] = freq1[val] ? freq1[val] + 1 : (freq1[val] = 1);
  }
  console.log(freq1);
  for (let key in freq1) {
    if (freq1[key] > 1) {
      console.log(freq1[key]);
      res.push(+key);
    }
  }
  return res;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []?
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
