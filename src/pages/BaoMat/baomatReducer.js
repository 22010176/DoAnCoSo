import { useSelector } from "react-redux";
import { getCaesarInput } from "../../redux/selectors";
import { affineCipher, alphabetOptions, caesarCipher, desCipher, lowercaseAlphabet, number, uppercaseAlphabet, vigenereCipher } from "../../utilities/crypto";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const fetchDESResult = createAsyncThunk(
  'cypher/enscript',
  async (input, thunkAPI) => {
    const result = input;
    return result
  }
)

const initialState = {
  cipher: "des",
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
}
const cypherSlice = createSlice({
  name: "mainSlice",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchDESResult.fulfilled, (state, action) => {
      // state.
    })
  },
  reducers: {
    changeCypher(state, action) {
      state.cipher = action.payload
    },
    updateInput(state, action) {
      state.input = { ...state.input, ...action.payload }
    },
    resetInput(state, action) {
      state.input = { ...initialState.input }
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
          console.log('des', payload)
          state.output = desCipher(payload.message, payload.key)
          console.log(desCipher(payload.message, payload.key))
          break;
        case 'aes':
          break;
        case 'rsa':
          break;
      }
    },
    descript(state, action) {
      const payload = action.payload
      switch (state.cipher) {
        case 'caesar':
          state.output = caesarCipher(payload.message, payload.k, state.keys, false)
          break;
        case 'affine':
          state.output = affineCipher(payload.message, payload.a, payload.b, state.keys, false)
          break;
        case 'hill':
          state.output = ''
          break;
        case 'vigenere':
          state.output = vigenereCipher(payload.message, payload.key, state.keys, false)
          break;
        case 'des':
          state.output = desCipher(payload.message, payload.key, false)
          break;
        case 'aes':
          break;
        case 'rsa':
          break;
      }
    },
  }
})

export default cypherSlice