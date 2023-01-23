import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleList, changeWords } from '../../../features/enlearnSlice';

const ListControls = () => {
    const dispatch = useDispatch()
    const listToggle = useSelector(state => state.enlearn.listToggle)
    const words = useSelector(state => state.enlearn.words)
    const inGame = useSelector(state => state.enlearn.inGame)

    return (
        <div className="list--controls">
            <button
                className={ listToggle ? "list--tgl--btn list--showed btn" : "list--tgl--btn list--hidden btn" }
                onClick={ () => dispatch(toggleList()) }
                disabled={ !words.length }
            >{ listToggle ? "Hide list" : "Show list" }</button>
            <button
                className="list--clr--btn btn"
                onClick={ () => dispatch(changeWords([]))}
                disabled={ !words.length || inGame }
            >Clear list</button>
        </div>
    );
};

export default ListControls;