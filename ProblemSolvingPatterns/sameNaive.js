// function sameNaive(arr1, arr2) {
//   //add check for arr lengths similar
//   if (arr1.length !== arr2.length) return false;
//   //add for loop for arr1
//   for (let el of arr1) {
//     // use indexof to compare the square of arr1 index value prsent
//     let indexOfVal = arr2.indexOf(el ** 2);
//     // add check if the indexof value is -1 -> return false
//     if (indexOfVal === -1) return false;
//     // remove the indexof value using splice
//     arr2.splice(indexOfVal, 1);
//     console.log(arr2);
//   }

//   // return true as default return stmt
//   return true;
// }
// console.log(sameNaive([1, 2, 3], [4, 1, 9]));

function sameNaive(arr1, arr2) {
  //add check for arr lengths similar
  if (arr1.length !== arr2.length) return false;
  //add for loop for arr1
  for (let el1 of arr1) {
    for (let el2 of arr2) {
      if (el2 === el1 ** 2) {
        arr2.splice(el2, 1);
      }
    }
    console.log(arr2);
  }

  // return true as default return stmt
  return true;
}
console.log(sameNaive([1, 2, 3, 0], [4, 1, 9, 0])); //o(n^2)
