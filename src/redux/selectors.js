export function getCounter(state) {
  return state.counter;
}

// __________________________________________________________________________________________________
// Cypher____________________________________________________________________________________________
// __________________________________________________________________________________________________
export function getCypher(state) {
  return state.cypher
}

export function getCypherName(state) {
  return getCypher(state).cipher
}

export function getCypherAlphabet(state) {
  return getCypher(state).alphabet
}

export function getCypherOutput(state) {
  return getCypher(state).output
}

export function getMessageInput(state) {
  return getCypher(state).input.message
}

export function getCaesarInput(state) {
  const cypherInput = getCypher(state).input

  return {
    message: cypherInput.message,
    k: cypherInput.k
  }
}

export function getAffineInput(state) {
  const cyp = getCypher(state).input

  return {
    a: cyp.a,
    b: cyp.b,
    message: cyp.message
  }
}

export function getHillInput(state) {
  const cyp = getCypher(state).input

  return {
    matrix: cyp.matrix,
    message: cyp.message
  }
}

export function getKeyInput(state) {
  const cyp = getCypher(state).input

  return {
    key: cyp.key,
    message: cyp.message
  }
}

export const getVigenereInput = getKeyInput
export const getDESInput = getKeyInput
export const getAESInput = getKeyInput

export function getRSAInput(state) {
  const cyp = getCypher(state).input

  return {
    p: cyp.p,
    q: cyp.q,
    message: cyp.message
  }
}