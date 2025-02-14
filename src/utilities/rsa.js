import { GCD } from "./number"

function findPsuedoPrime(p, q) {
  return {
    n: p * q,
    psuedoPrime: (p - 1) * (q - 1),
  }
}

export function checkE(psuedoPrime, e) {
  return e < psuedoPrime && GCD(e, psuedoPrime) === 1
}

function findE(psuedoPrime) {
  let e = 1;

  for (e = 1; !checkE(psuedoPrime, e); ++e);
  return e;
}

export function findNextE(p, q, min = 2, revert = false) {
  const { psuedoPrime } = findPsuedoPrime(p, q)
  const step = revert ? -1 : 1
  const _min = findE(psuedoPrime)

  let temp = Math.max(_min + 1, min);
  while (!checkE(psuedoPrime, temp)) temp += step

  return temp
}

export function checkD(psuedoPrime, e, d) {
  return (d * e - 1) % psuedoPrime === 0
}

function findD(psuedoPrime, e) {
  let d = 1;
  for (d = 1; !checkD(psuedoPrime, e, d); ++d);
  return d;
}

export function findNextD(p, q, e, min = 1, revert = false) {
  const { psuedoPrime } = findPsuedoPrime(p, q)
  const step = revert ? -1 : 1
  const _min = findD(psuedoPrime, e)

  let temp = Math.max(_min + 1, min);
  while (!checkD(psuedoPrime, e, temp)) temp += step;


  return temp;
}

export function rsaEncrypt(message, key) {

}

export function rsaDescrypt(message, key) { }