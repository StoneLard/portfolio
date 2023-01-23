import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListControls from './ListControls';
import Word from './Word';
import { changeWords } from '../../../features/enlearnSlice';


const WordsList = () => {
    const dispatch = useDispatch()
    const words = useSelector(state => state.enlearn.words)
    const listToggle = useSelector(state => state.enlearn.listToggle)

    useEffect(() => {
        const storedWords = JSON.parse(localStorage.getItem("words")) || []
        dispatch(changeWords(storedWords))
    }, [])

    useEffect(() => {
        localStorage.setItem("words", JSON.stringify(words))
    }, [words])

    return (
        <div className="list--field">
            <ListControls/>
            <div>
                { words.length && listToggle
                ?   <ul className="current--list">
                        {words.map((word) => 
                            <Word word={ word } key={word.id}/>
                        )}
                    </ul>
                :   <h3 className="list--is--empty">{ !listToggle && words.length ? "LIST IS HIDDEN" : "LIST IS EMPTY"}</h3>}
            </div>
        </div>
    );
};

export default WordsList;