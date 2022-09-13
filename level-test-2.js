function isPrime(n) {
  let isPrimeArray = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      isPrimeArray.push(i);
    }
  }
  if (isPrimeArray.length == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(31)); //true
console.log(isPrime(10)); //false
