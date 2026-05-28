//1
function addUpto(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
let t1 = performance.now();
addUpto(1000000);
let t2 = performance.now();
console.log(`${(t2 - t1) / 1000} seconds`);
console.log(addUpto(7));
//2
// function addUpto(n) {
//   return (n * (n + 1)) / 2;
// }
// let t1 = performance.now();
// addUpto(1000000);
// let t2 = performance.now();
// console.log(`${(t2 - t1) / 1000} seconds`);
