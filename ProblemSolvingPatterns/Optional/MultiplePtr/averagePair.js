function averagePair(arr1, val1) {
  let left = 0;
  let right = arr1.length - 1;
  while (left < right) {
    let avg = (arr1[left] + arr1[right]) / 2;
    if (avg === val1) {
      return true;
    } else if (avg < val1) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
