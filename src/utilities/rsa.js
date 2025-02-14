import { GCD } from "./number"

export function findPsuedoPrime(p, q) {
  return {
    n: p * q,
    psuedoPrime: (p - 1) * (q - 1),
  }
}

export function checkE(psuedoPrime, e) {
  return e < psuedoPrime && GCD(e, psuedoPrime) === 1
}

function findE(psuedoPrime) {
  let e = 2;

  for (; !checkE(psuedoPrime, e); ++e) console.log(psuedoPrime, e);
  return e;
}

export function findNextE(psuedoPrime, min = 2, revert = false) {
  const step = revert ? -1 : 1
  const _min = findE(psuedoPrime)

  if (psuedoPrime <= 2) throw new Error(`${psuedoPrime} is not valid`)

  if (revert && min <= _min) return _min

  let temp = min;
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

export function findNextD(psuedoPrime, e, min = 1, revert = false) {
  const step = revert ? -1 : 1
  const _min = findD(psuedoPrime, e)

  let temp = Math.max(_min + 1, min);
  while (!checkD(psuedoPrime, e, temp)) temp += step;


  return temp;
}

export function rsaEncrypt(message, key) {

}

export function rsaDescrypt(message, key) { }