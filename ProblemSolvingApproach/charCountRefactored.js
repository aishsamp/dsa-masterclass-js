function charCount(str) {
  //reqmt: alphanumeric count ignore casing
  //create obj
  let result = {};
  //loop the chars
  for (let char of str) {
    //casing
    char = char.toLowerCase();
    // if char is num/alphab -> add newly to obj and assign count 1
    // if char is num/alphab already in obj -> increment count
    //alphanum
    if (/[a-z0-9]/.test(char)) {
      //   result[char] = ++result[char] || 1;
      result[char] ? ++result[char] : (result[char] = 1);
    }
  }

  //return obj
  return result;
}

console.log(charCount('Hi, hello world 1!!'));
//use char.charCodeAt(0) to use ASCII values for alphanum char
