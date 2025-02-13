import { useSelector } from "react-redux";
import { getCaesarInput } from "../../redux/selectors";
import { affineCipher, alphabetOptions, caesarCipher, desCipher, lowercaseAlphabet, number, uppercaseAlphabet, vigenereCipher } from "../../utilities/crypto";
import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchDESEnscript = createAsyncThunk(
  'cypher/desEnscript',
  async (input, thunkAPI) => {
    const result = await axios.post('api/cypher/des/enscript', input)
    return result.data
  }
)

export const fetchDESDescript = createAsyncThunk(
  'cypher/desDescript',
  async (input, thunkAPI) => {
    const result = await axios.post('api/cypher/des/descript', input)
    return result.data
  }
)
export const fetchAESEnscript = createAsyncThunk(
  'cypher/aesEnscript',
  async (input, thunkAPI) => {
    input.key = input.key.padEnd(16)
    const result = await axios.post('api/cypher/aes/enscript', input)
    return result.data
  }
)

export const fetchAESDescript = createAsyncThunk(
  'cypher/aesDescript',
  async (input, thunkAPI) => {
    input.key = input.key.padEnd(16)
    const result = await axios.post('api/cypher/aes/descript', input)
    return result.data
  }
)

function ModernCypher(state, action) {
  state.output = action.payload.output
}

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
  name: "cypher",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchDESEnscript.fulfilled, ModernCypher)
    builder.addCase(fetchDESDescript.fulfilled, ModernCypher)
    builder.addCase(fetchAESEnscript.fulfilled, ModernCypher)
    builder.addCase(fetchAESDescript.fulfilled, ModernCypher)
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
    enscriptClassic(state, action) {
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
      }
    },
    descriptClassic(state, action) {
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
      }
    }
  }
})

export default cypherSlice