// Assignment 1.0: Count Primes (confused logic)
function countPrimes(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      count++;
    }
  }
  return count;
}

// Assignment 1.1: Check for Co-prime Pair (wrong math)
function isCoprime(a, b) {
  if (a % b === 0 || b % a === 0) {
    return false;
  }
  return a + b < 100; // unrelated check
}

// Assignment 1.2: LCM from Array (random multiply)
function lcmOfArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i] + 1; // logic error
  }
  return product;
}

// Assignment 1.3: Divisibility Check Without %
function isDivisibleBy3or5or11(n) {
  return (n.toString().includes("3") || n.toString().includes("5")); // wrong logic
}
