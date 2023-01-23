import { createSlice } from "@reduxjs/toolkit";

export const enlearnSlice = createSlice({
    name: 'enlearn',
    initialState: {newWord: '', nextWord: '', words: [], inGame: false, listToggle: true, isWord: false, currentWord: "", lastIndex: 0 },
    reducers: {
        addWord: (state) => {
            state.words.push({text: state.newWord, id: Date.now()})
            state.newWord = ''
        },
        removeWord: (state, action) => {
            state.words = state.words.filter(w => w.id !== action.payload.id)
        },
        toggleList: (state) => {
            state.listToggle = !state.listToggle
        },
        changeIsWord: (state, action) => {
            state.isWord = action.payload
        },
        changeInGame: (state, action) => {
            state.inGame = action.payload
        },
        changeWords: (state, action) => {
            state.words = action.payload
        },
        setNewWord: (state, action) => {
            state.newWord = action.payload
        },
        changeCurrentWord: (state, action) => {
            state.currentWord = action.payload
        },
        changeLastIndex: (state, action) => {
            state.lastIndex = action.payload
        }
    }
})

export const { addWord, removeWord, toggleList, changeInGame, changeIsWord, changeWords, setNewWord, changeCurrentWord, changeLastIndex } = enlearnSlice.actions;
export default enlearnSlice.reducer;