import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWord, setNewWord, changeIsWord } from '../../../features/enlearnSlice';

const EnlearnInput = () => {
    const dispatch = useDispatch();
    const wordInput = useSelector(state => state.enlearn.newWord)
    const isWord = useSelector(state => state.enlearn.isWord)

    function onChangeHandler(e) {        
        if (e) {
            dispatch(changeIsWord(true))
        } else {
            dispatch(changeIsWord(false))
        }
        dispatch(setNewWord(e))
    }

    function addNewWord() {
        dispatch(addWord())
        dispatch(changeIsWord(false))
    }

    function handleEnter(event) {
        if (event.key === "Enter") {
            addNewWord()
        }
    }

    return (
        <div className="game--input">
            <input
                placeholder="Type a new word!"
                autoFocus value={ wordInput }
                onChange={e => onChangeHandler(e.target.value)}
                onKeyDown={handleEnter}
            />
            <button
                className="word--add--btn btn"
                onClick={ addNewWord }
                disabled={!isWord}
            >ADD</button>
        </div>
    );
};

export default EnlearnInput;