export function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export function findNextPrime(min, revert) {
  const step = revert ? -1 : 1
  if (revert && min <= 2) return 2

  let temp = min;
  while (!isPrime(temp)) temp += step
  return temp
}



export function GCD(a, b) {
  if (!b) return a;
  return GCD(b, a % b);
}

export function LCD(a, b) {
  return (a * b) / GCD(a, b);
}