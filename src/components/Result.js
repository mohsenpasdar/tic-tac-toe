import React, { useContext } from 'react';
import TicTacToeContext from '../context/TicTacToeContext';

const Result = () => {
    const { state, dispatch } = useContext(TicTacToeContext)
    const resetGame = () => {
        document.querySelectorAll('.button').forEach((element) => element.innerText = ``)
        dispatch({type: 'RESET_GAME'})
    }

    return (
        <div>
            <button className='reset' onClick={resetGame}>Reset</button>
            <div>{state.draw ? "Draw" : ''}</div>
            <div>{state.winner1 ? 'player1 won' : ''}</div>
            <div>{state.winner2 ? 'player2 won' : ''}</div>
        </div>
    );
};

export default Result;