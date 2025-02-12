export const cypherName = [
  { lower: 'caesar', upper: 'CAESAR', cap: 'Caesar' },
  { lower: 'affine', upper: 'AFFINE', cap: 'Affine' },
  // { lower: 'hill', upper: 'HILL', cap: 'Hill' },
  { lower: 'vigenere', upper: 'VIGENERE', cap: 'Vigenere' },
  { lower: 'des', upper: 'DES', cap: 'DES' },
  { lower: 'aes', upper: 'AES', cap: 'AES' },
  { lower: 'rsa', upper: 'RSA', cap: 'RSA' },
]

export const alphabetOptions = ['a-z', 'A-Z', '0-9']
export const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'
export const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const number = '0123456789 \n'

export function caesarCipher(text, k, alphabet = '', encode = true) {
  const len = alphabet.length
  const shift = encode ? k : -k;

  return [...text].map(char => {
    const code = alphabet.indexOf(char);

    if (code === -1) return char
    return alphabet[(code + shift + len) % len];
  }).join('');
}

export function affineCipher(text, a, b, alphabet = '', encode = true) {
  const len = alphabet.length

  // Mã hóa Affine
  if (encode) return [...text].map(char => {
    const code = alphabet.indexOf(char);

    if (code === -1) return char
    return alphabet[(code * a + b) % len];
  }).join('');

  // Giải mã Affine
  return [...text].map(i => {
    if (alphabet.indexOf(i) === -1) return i

    let index = alphabet.indexOf(i) - b
    while (index < 0 || index % a !== 0) index += len;
    return alphabet[Math.floor(index / a)]
  }).join('')
}


export function vigenereCipher(message = '', key = '', alphabet = '', encode = true) {
  const len = alphabet.length
  const keyCharcode = [...key].map(i => {
    const index = alphabet.indexOf(i)
    return index === -1 ? alphabet.length - 1 : index
  })
  if (encode) return [...message].map((i, j) => {
    const charCode = alphabet.indexOf(i)

    if (charCode === -1) return alphabet[alphabet.length - 1]
    return alphabet[(charCode + keyCharcode[j % keyCharcode.length]) % len]
  }).join('')

  return [...message].map((i, j) => {
    const result = alphabet.indexOf(i) - keyCharcode[j % keyCharcode.length]
    return alphabet[(result + len) % len]
  }).join('')
}