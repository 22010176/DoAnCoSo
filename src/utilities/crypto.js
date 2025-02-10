export function affineCipher(text, a, b, encode = true) {
  const alphabet =
    'abcdefghijklmnopqrstuvwxyz'
    + 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    + '0123456789'

  const len = alphabet.length

  // Mã hóa Affine
  if (encode) return [...text].map(char => {
    const code = alphabet.indexOf(char);
    return alphabet[(code * a + b) % len];
  }).join('');

  // Giải mã Affine
  return [...text].map(i => {
    let index = alphabet.indexOf(i) - b
    while (index < 0 || index % a !== 0) index += len;
    return alphabet[Math.floor(index / a)]
  }).join('')
}
