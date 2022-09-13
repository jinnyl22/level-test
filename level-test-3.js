function primeFactor(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      if (arr.indexOf(i) == -1) arr.push(i);
      n = n / i;
      i = 1;
    }
  }
  return arr.join();
}
console.log(primeFactor(36));
