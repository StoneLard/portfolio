import React from 'react';
import { useSelector } from 'react-redux';

const Cell = ({value, index, hitHandle}) => {
    let cellValue = ''
    const gameFinished = useSelector(state => state.tictactoe.gameFinished)

    switch(value) {
        case 0:
            cellValue = '';
            break;
        case 1:
            cellValue = 'X';
            break;
        case 2:
            cellValue = 'O';
            break;
    }
    return (
        <button
            className="cell"
            onClick={() => hitHandle(index)}
            disabled={value || gameFinished}
        >{ cellValue }</button>
    );
};

export default Cell;