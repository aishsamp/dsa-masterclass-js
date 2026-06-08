function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  if (num1.length !== num2.length) return false;
  let freq1 = {};
  let freq2 = {};

  for (let val of num1.toString()) {
    freq1[val] = freq1[val] ? freq1[val] + 1 : (freq1[val] = 1);
  }
  for (let val of num2.toString()) {
    freq2[val] = freq2[val] ? freq2[val] + 1 : (freq2[val] = 1);
  }
  for (let key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] !== freq2[key]) return false;
  }
  console.log(freq1);
  console.log(freq2);

  return true;
}
console.log(sameFrequency(1242, 3221)); //false //o(n)
console.log(sameFrequency(1232, 3221)); //true //o(n)
