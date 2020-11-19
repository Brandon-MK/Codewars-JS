function isPrime(num) {
  let result = true;
  if (num === 1) result = false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      result = false;
      break;
    }
  }
  return result;
}

isPrime(1);
