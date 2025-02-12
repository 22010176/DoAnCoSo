import { alphabetOptions, lowercaseAlphabet, number, uppercaseAlphabet } from "../../utilities/crypto";

const { createSlice } = require("@reduxjs/toolkit");

const cypherSlice = createSlice({
  name: "mainSlice",
  initialState: {
    cipher: "caesar",
    alphabet: [...alphabetOptions],
    keys: '',
    input: {
      k: 0,               // caesar
      a: 0,               // affine
      b: 0,               // affine
      matrix: [],         // hill
      key: '',            // vigenere, des, aes
      p: 0,               // rsa
      q: 0,               // rsa
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
    enscript(state, action) {

    },
    descript(state, action) {

    },
    setAlphabet(state, action) {
      if (action.payload.length == 0) return
      state.alphabet = [...action.payload]

      state.keys = ""
      if (state.alphabet.includes('a-z')) state.keys += lowercaseAlphabet
      if (state.alphabet.includes('A-Z')) state.keys += uppercaseAlphabet
      if (state.alphabet.includes('0-9')) state.keys += number
    }
  }
})

export default cypherSlice