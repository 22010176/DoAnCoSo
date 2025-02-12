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

  const result = {
    message: cypherInput.message,
    k: cypherInput.k
  }

  return result
}

