import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInGame, changeCurrentWord} from '../../../features/enlearnSlice';
import { getRandomInt } from '../../../utils/words';

const EnlearnControls = () => {
    const dispatch = useDispatch()
    const inGame = useSelector(state => state.enlearn.inGame)
    const words = useSelector(state => state.enlearn.words)

    function startGame() {
        let first = getRandomInt(0, words.length)
        dispatch(changeInGame(true))
        dispatch(changeCurrentWord(words[first].text))
    }

    function stopGame() {
        dispatch(changeInGame(false))
        dispatch(changeCurrentWord(''))
    }

    return (
        <div className="game--controls">
            <button
                className="start--game--btn btn"
                disabled={ inGame || !words.length }
                onClick={ startGame }
            >START</button>
            <button
                className="stop--game--btn btn"
                disabled={ !inGame }
                onClick={ stopGame }
            >STOP</button>
        </div>
    );
};

export default EnlearnControls;