// Assignment 1.0: Count Primes (Sieve of Eratosthenes)
function countPrimes(n) {
  if (n < 2) return 0;
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.filter(Boolean).length;
}

// Assignment 1.1: Check for Co-prime Pair
function isCoprime(a, b) {
  function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y);
  }
  return gcd(a, b) === 1;
}

// Assignment 1.2: LCM from Array
function lcmOfArray(arr) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  return arr.reduce((acc, val) => lcm(acc, val));
}

// Assignment 1.3: Divisibility Check Without %
function isDivisibleBy3or5or11(n) {
  function isDivisible(divisor) {
    return n - Math.floor(n / divisor) * divisor === 0;
  }
  return isDivisible(3) || isDivisible(5) || isDivisible(11);
}
