export const cypherName = [
  { lower: 'caesar', upper: 'CAESAR', cap: 'Caesar' },
  { lower: 'affine', upper: 'AFFINE', cap: 'Affine' },
  { lower: 'hill', upper: 'HILL', cap: 'Hill' },
  { lower: 'vigenere', upper: 'VIGENERE', cap: 'Vigenere' },
  { lower: 'des', upper: 'DES', cap: 'DES' },
  { lower: 'aes', upper: 'AES', cap: 'AES' },
  { lower: 'rsa', upper: 'RSA', cap: 'RSA' },
]

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

