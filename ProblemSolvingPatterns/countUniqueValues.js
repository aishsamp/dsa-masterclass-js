function countUniqueValues(arr) {
  //if empty arr return 0
  if (arr.length === 0) return 0;
  let i = 0; //first ptr i
  for (let j = 1; j < arr.length; j++) {
    // second ptr j
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } // if arr[i] != arr[j] move i ptr index and assign arr[i] = arr[j]
  }
  return i + 1;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 99])); //o(n)
