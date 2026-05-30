function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  console.log('Going down!');
  for (let j = n; j >= 1; j--) {
    console.log(j);
  }
}

countUpAndDown(5);
