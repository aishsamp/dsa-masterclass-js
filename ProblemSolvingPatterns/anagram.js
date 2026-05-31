// function validAnagram(str1, str2) {
//   // add whatever parameters you deem necessary - good luck!
//   //check if size of strs match
//   if (str1.length !== str2.length) return false;
//   //instantiate freqCountrs
//   let freqCnt1 = {};
//   let freqCnt2 = {};
//   //for loop for freqCnt1
//   for (let val of str1) freqCnt1[val] = (freqCnt1[val] || 0) + 1;
//   //for loop for freqCnt2
//   for (let val of str2) freqCnt2[val] = (freqCnt2[val] || 0) + 1;
//   console.log(freqCnt1);
//   console.log(freqCnt2);
//   //for loop for looping Object
//   for (let key in freqCnt1) {
//     console.log(key);
//     console.log(freqCnt2);
//     if (!(freqCnt1[key] === freqCnt2[key])) {
//       return false;
//     }
//   }

//   //default as return true
//   return true;
// }
// console.log(validAnagram('anagram', 'nagaram'));
// //o(n)
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  //check if size of strs match
  if (str1.length !== str2.length) return false;
  //instantiate freqCountr
  let lookup = {};
  //for loop for str1 -> creating an obj
  for (let val of str1) lookup[val] ? ++lookup[val] : (lookup[val] = 1);
  console.log(lookup);

  //for loop for str2 - to compare if char are present
  for (let val of str2) {
    if (!lookup[val]) return false;
    else lookup[val] -= 1;
    console.log(val);
  }

  //default as return true
  return true;
}
console.log(validAnagram('anagram', 'nagaram')); //o(n)
