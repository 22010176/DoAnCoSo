export function getCounter(state) {
  return state.counter;
}

export function getCypher(state) {
  return state.cypher
}

export function getCypherName(state) {
  return getCypher(state).cipher
}