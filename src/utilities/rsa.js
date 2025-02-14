import { GCD } from "./number"

function findPsuedoPrime(p, q) {
  return {
    n: p * q,
    psuedoPrime: (p - 1) * (q - 1),
  }
}

export function findNextE(p, q, min = 2) {
  const { psuedoPrime } = findPsuedoPrime(p, q)

  let temp = min;
  while (temp < psuedoPrime && GCD(i, psuedoPrime) !== 1) temp++

  return temp
}

export function findNextD(p, q, e, min = 1) {
  const { psuedoPrime } = findPsuedoPrime(p, q)

  let temp = min;
  while ((temp * e - 1) % psuedoPrime !== 0) temp++;

  return temp;
}

export function rsaEncrypt(message, key) {

}

export function rsaDescrypt(message, key) { }