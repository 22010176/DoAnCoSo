export function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export function GCD(a, b) {
  if (!b) return a;
  return GCD(b, a % b);
}

export function LCD(a, b) {
  return (a * b) / GCD(a, b);
}