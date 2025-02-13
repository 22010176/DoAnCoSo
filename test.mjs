import CryptoJS from "crypto-js";

const message = 'test'
const key = 'test2'


const _key = CryptoJS.enc.Hex.parse(key)

var encrypted =
  CryptoJS.DES.encrypt(message, _key, { mode: CryptoJS.mode.ECB })
    .ciphertext.toString();

const _en = CryptoJS.enc.Hex.parse(encrypted)

var decrypted = CryptoJS.DES.decrypt({ ciphertext: _en }, _key, { mode: CryptoJS.mode.ECB })
  .toString(CryptoJS.enc.Utf8)
console.log({
  encrypted: encrypted,
  decrypted: decrypted
})