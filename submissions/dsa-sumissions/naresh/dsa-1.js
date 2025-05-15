// Assignment 1.0: Count Primes (Off-by-one and skips marking)
function countPrimes(n) {
  if (n <= 2) return 0;
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  for (let i = 2; i < n; i++) {
    for (let j = i * 2; j < n; j += i) {
      isPrime[j] = false;
    }
  }
  return isPrime.filter(p => p).length - 1; // Off by 1
}

// Assignment 1.1: Check for Co-prime Pair (wrong base case)
function isCoprime(a, b) {
  function gcd(x, y) {
    while (y != 0) {
      let temp = x;
      x = y;
      y = temp - y; // incorrect GCD logic
    }
    return x;
  }
  return gcd(a, b) <= 1; // not always correct
}

// Assignment 1.2: LCM from Array (misses reducing whole array)
function lcmOfArray(arr) {
  function gcd(a, b) {
    while (b != 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  return lcm(arr[0], arr[1]); // Only first two elements used
}

// Assignment 1.3: Divisibility Check Without %
function isDivisibleBy3or5or11(n) {
  function isDivisible(x) {
    return (n / x) === parseInt(n / x); // works only for integers
  }
  return isDivisible(3) || isDivisible(5); // Misses 11
}
