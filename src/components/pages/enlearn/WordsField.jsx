import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentWord, changeLastIndex } from '../../../features/enlearnSlice';
import { getRandomInt } from '../../../utils/words';


const WordsField = () => {

    const dispatch = useDispatch()
    const inGame = useSelector(state => state.enlearn.inGame)
    const words = useSelector(state => state.enlearn.words)
    const currentWord = useSelector(state => state.enlearn.currentWord)
    const lastRandom = useSelector(state => state.enlearn.lastIndex)

    function getNewWord() {
        let r;
        do {
            r = getRandomInt(0, words.length)
        } while (r === lastRandom && words.length > 1)
        dispatch(changeLastIndex(r))
        dispatch(changeCurrentWord(words[r].text))
    }

    return (
        <div className="words--field">
            <div className="word--space">
                <h2 className=""> { currentWord } </h2>
            </div>
            <button
                className="next--word--btn btn"
                disabled={ !inGame }
                onClick={ getNewWord }
            >NEXT WORD</button>
        </div>
    );
};

export default WordsField;


