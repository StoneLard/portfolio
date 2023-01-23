import { createSlice } from "@reduxjs/toolkit";

export const tttSlice = createSlice({
    name: 'tictactoe',
    initialState: {turn: true, winner: 0, field: [0, 0, 0, 0, 0, 0, 0, 0, 0], turnHistory: [], gameFinished: false},
    reducers: {
        changeTurn: (state, action) => {
            state.turn = action.payload
        },
        changeWinner: (state, action) => {
            state.winner = action.payload
        },
        changeField: (state, action) => {
            if(state.turn) {
                state.field[action.payload] = 1
            } else {
                state.field[action.payload] = 2
            }
        },
        resetField: (state) => {
            state.field = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        changeTurnHistory: (state, action) => {
            state.turnHistory.push(action.payload)
        },
        resetTurnHistory: (state) => {
            state.turnHistory = []
        },
        changeGameFinished: (state) => {
            state.gameFinished = !state.gameFinished
        }
    }
})

export const { changeTurn, changeWinner, changeField, resetField, changeTurnHistory, resetTurnHistory, changeGameFinished } = tttSlice.actions;

export default tttSlice.reducer;