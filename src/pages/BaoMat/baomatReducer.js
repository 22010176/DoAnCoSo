import { useSelector } from "react-redux";
import { getCaesarInput } from "../../redux/selectors";
import { affineCipher, alphabetOptions, caesarCipher, lowercaseAlphabet, number, uppercaseAlphabet, vigenereCipher } from "../../utilities/crypto";

const { createSlice } = require("@reduxjs/toolkit");

const cypherSlice = createSlice({
  name: "mainSlice",
  initialState: {
    cipher: "caesar",
    alphabet: [...alphabetOptions],
    keys: lowercaseAlphabet + uppercaseAlphabet + number,
    input: {
      k: 0,                         // caesar
      a: 0,                         // affine
      b: 0,                         // affine
      matrix: [],                   // hill
      key: '',                      // vigenere, des, aes
      p: 1,                         // rsa
      q: 1,                         // rsa
      message: '',
    },
    output: ''
  },
  reducers: {
    changeCypher(state, action) {
      state.cipher = action.payload
    },
    updateInput(state, action) {
      state.input = { ...state.input, ...action.payload }
    },
    setAlphabet(state, action) {
      if (action.payload.length == 0) return
      state.alphabet = [...action.payload]

      state.keys = ""
      if (state.alphabet.includes('a-z')) state.keys += lowercaseAlphabet
      if (state.alphabet.includes('A-Z')) state.keys += uppercaseAlphabet
      if (state.alphabet.includes('0-9')) state.keys += number
    },
    enscript(state, action) {
      console.log(action)
      const payload = action.payload
      switch (state.cipher) {
        case 'caesar':
          state.output = caesarCipher(payload.message, payload.k, state.keys)
          break;
        case 'affine':
          state.output = affineCipher(payload.message, payload.a, payload.b, state.keys)
          break;
        case 'hill':
          state.output = ''
          break;
        case 'vigenere':
          state.output = vigenereCipher(payload.message, payload.key, state.keys)
          break;
        case 'des':
          break;
        case 'aes':
          break;
        case 'rsa':
          break;
      }
    },
    descript(state, action) {

    },
  }
})

export default cypherSlice