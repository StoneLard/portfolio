import React from 'react';
import Cell from './Cell';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, changeGameFinished, changeCanRestart, changeTurn, changeWinner, changeTurnHistory } from '../../../features/tttSlice';
import { winningLines } from '../../../utils/lines';

const GameField = () => {
    const dispatch = useDispatch()
    const field = useSelector(state => state.tictactoe.field)
    const turn = useSelector(state => state.tictactoe.turn)
    const turnHistory = useSelector(state => state.tictactoe.turnHistory)

    function calculateWinner(field, lines, index, turn){
        const tempField = [...field]
        if(turn) {
            tempField[index] = 1
        } else {
            tempField[index] = 2
        }

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (tempField[a] && tempField[a] === tempField[b] && tempField[a] === tempField[c]) {
              return tempField[a];
            }
        }
        return 0;
    }

    function hit(index) {
        let hasWinner = calculateWinner(field, winningLines, index, turn)       
        if(hasWinner || turnHistory.length === 8) {
            dispatch(changeGameFinished())
            dispatch(changeWinner(hasWinner))
        } 
        dispatch(changeField(index))
        dispatch(changeTurn(!turn))
        dispatch(changeTurnHistory(index))
    }

    return (
        <div className="game--field">
            {field.map((cell, index) => 
                <Cell key={index} index={index} value={cell} hitHandle={ hit }/>    
            )}
        </div>
    );
};

export default GameField;