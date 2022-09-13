function base10ToString(n) {
  let arr = "";
  function base10ToStringHelper(a) {
    if (a < 1) return;
    else {
      base10ToStringHelper(Math.floor(a / 2));
      arr += a % 2;
    }
  }
  base10ToStringHelper(n);
  return arr;
}

console.log(base10ToString(100)); //1100100
