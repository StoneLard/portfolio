import React from 'react';
import { useSelector } from 'react-redux';

const GameInf = () => {
    const turn = useSelector(state => state.tictactoe.turn)
    const winner = useSelector(state => state.tictactoe.winner)
    const gameFinished = useSelector(state => state.tictactoe.gameFinished)

    function getStatus() {
        if(gameFinished && !winner) {
            return  <div className="game--inf">
                        <h2 className="ttt--heading ttt--tie">It's a tie!</h2>
                    </div>
        }
        if(turn && !winner) {
            return   <div className="game--inf">  
                        <h2 className="ttt--heading">Turn: </h2>
                        <span className="cross--turn--indicator">
                                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"></path>
                                    </svg>
                        </span>
                    </div>
        }
        if(!turn && !winner) {
            return  <div className="game--inf">  
                        <h2 className="ttt--heading">Turn: </h2>
                        <span className="circle--turn--indicator">
                            <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                            </svg>
                        </span>
                    </div>
        }
        if(winner === 1) {
            return  <div className="game--inf">  
                        <h2 className="ttt--heading">Winner: </h2>
                        <span className="cross--turn--indicator">
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"></path>
                            </svg>
                        </span>
                    </div>
        } else {
            return  <div className="game--inf">  
                        <h2 className="ttt--heading">Winner: </h2>
                        <span className="circle--turn--indicator">
                            <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                            </svg>
                        </span>
                    </div>
        }
    }

    const winnerStatus =  getStatus()
    
    return (
        <> 
            { winnerStatus }
        </>
    );
};

export default GameInf;