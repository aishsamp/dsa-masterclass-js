function charCount(str) {
  //reqmt: alphanumeric count ignore casing
  //create obj
  let result = {};
  //loop the chars
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if char is num/alphab -> add newly to obj and assign count 1
    if (result[char] === str[i]) {
      return (result[char] = result[char]++);
    } else {
      // if char is num/alphab already in obj -> increment count
      result[char] = 1;
    }
  }

  //return obj
  return result;
}

console.log(charCount('Hi, hello world 1!!'));
// doesnt cover alpha numeric
