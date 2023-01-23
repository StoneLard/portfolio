import React from 'react';
import { Link } from 'react-router-dom';
import Game from './Game';


const TicTacToe = () => {
    return (
        <div className="ttt--game">
            <h1 className="heading">Tic-Tac-Toe</h1>
            <Game/>
            <div className="back--button">
                <Link to="/">Back</Link>
            </div>
        </div>
    );
};

export default TicTacToe;