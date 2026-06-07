function maxSubArraySumRefactored(arr, num) {
  if (num > arr.length) return null;
  let maxSum = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  temp = maxSum;
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    maxSum = Math.max(temp, maxSum);
  }
  return maxSum;
}
console.log(maxSubArraySumRefactored([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19
