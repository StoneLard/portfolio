import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWord } from '../../../features/enlearnSlice';

const Word = ({word}) => {
    const dispatch = useDispatch();

    return (
        <li>
            { word.text }
            <button onClick={() => dispatch(removeWord(word))}>X</button>
        </li>
    );
};

export default Word;