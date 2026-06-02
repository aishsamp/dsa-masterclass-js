function sumZeroRefactored(arr) {
  //define left, right ptrs
  let left = 0;
  let right = arr.length - 1;
  //left < right for sorted
  while (left < right) {
    //if sum === 0  return pair
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    //if sum > 0 move right ptr
    else if (sum > 0) right--;
    //if sum < 0 move left pt
    else left++;
  }
}

console.log(sumZeroRefactored([-4, -3, -2, -1, 0, 1, 2, 5])); // o(n)
