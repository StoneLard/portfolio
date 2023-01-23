import React, { useState } from 'react';
import GameInf from './GameInf';
import GameField from './GameField';
import { resetField, changeTurn, changeWinner, changeGameFinished, resetTurnHistory } from '../../../features/tttSlice';
import { useDispatch, useSelector } from 'react-redux';


const Game = () => {
    const dispatch = useDispatch()
    const turnHistory = useSelector(state => state.tictactoe.turnHistory)

    const canRestart = turnHistory.length === 0

    function restartGame() {
        dispatch(resetField())
        dispatch(changeTurn(true))
        dispatch(changeWinner(''))
        dispatch(changeGameFinished())
        dispatch(resetTurnHistory())
    }



    return (
        <div className="game">
            <GameInf/>
            <GameField/>
            <button
                className="restart--button"
                onClick={ restartGame }
                disabled={ canRestart }
            >
                Restart game
            </button>
        </div>
    );
};

export default Game;