function sumZeroNaive(arr) {
  //for loop - outer loop to loop first el
  for (let i = 0; i < arr.length; i++) {
    //for loop - inner loop to loop rests of elems
    for (let j = i + 1; j < arr.length; j++) {
      //if first el and respective el give sum = 0
      if (arr[i] + arr[j] === 0) {
        //return the first pair of sum 0
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZeroNaive([-4, -3, -2, -1, 0, 1, 2, 5])); // o(n^2)
