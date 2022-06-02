import React, { useContext } from 'react';
import TicTacToeContext from '../context/TicTacToeContext';

const Result = () => {
    const { state, dispatch } = useContext(TicTacToeContext)
    const resetGame = () => {
        document.querySelectorAll('.button').forEach((element) => element.innerText = ``)
        dispatch({type: 'RESET_GAME'})
    }

    return (
        <div className='result'>
            <button className='result-button' onClick={resetGame}>Reset</button>
            <div className='result-text'>{state.draw ? "Draw!" : ''}</div>
            <div className='result-text'>{state.winner1 ? 'Player1 won!' : ''}</div>
            <div className='result-text'>{state.winner2 ? 'Player2 won!' : ''}</div>
        </div>
    );
};

export default Result;