function sameRefactored(arr1, arr2) {
  //add check for arr lengths similar
  if (arr1.length !== arr2.length) return false;
  let freqCtr1 = {};
  let freqCtr2 = {};

  //for loop to construct objects and numbers occurence from arr1
  for (let val of arr1) {
    freqCtr1[val] = (+freqCtr1[val] || 0) + 1;
  }
  //for loop to construct objects and numbers occurence from arr2
  for (let val of arr2) {
    freqCtr2[val] = (+freqCtr2[val] || 0) + 1;
  }
  //for loop to loop obj1
  for (let key in freqCtr1) {
    //return false if square of key is not equal
    if (!(key ** 2 !== freqCtr2)) return false;
    // return false if values are objs not equal
    if (freqCtr2[key ** 2] !== freqCtr1[key]) return false;
  }
  console.log(freqCtr1);
  console.log(freqCtr2);

  // return true as default return stmt
  return true;
}
console.log(sameRefactored([1, 2, 3, 0], [4, 1, 9, 0])); //o(n)
